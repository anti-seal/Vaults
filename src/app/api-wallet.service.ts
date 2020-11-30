import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import Web3 from 'web3';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

import WalletConnect from '@walletconnect/client';
import QRCodeModal from "@walletconnect/qrcode-modal";

import { getChainData, sanitizeHex } from "./helpers/utils";
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import WalletConnectProvider from "@walletconnect/web3-provider";
import { apiGetAccountNonce, apiGetGasPrices } from './helpers/api';
import { convertAmountToRawNumber, convertStringToHex } from './helpers/bignumber';


@Injectable({
  providedIn: 'root'
})
export class ApiWalletService {

  private behave = new BehaviorSubject<Object>('');
  private onConnectBehave = new BehaviorSubject<Object>('');

  connector: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private toaster: ToastrService, private router: Router,) {
    const that = this;


    const provider = new WalletConnectProvider({
      infuraId: "5918063957ef4e8bae0348d54fa14ebb" // Required
    });

    if (provider) {
      if (provider.wc && provider.wc['_connected']) {
        // console.log('-----------conne', provider.wc['_chainId'])
        const activeChain = provider.wc['_chainId'] ? getChainData(provider.wc['_chainId']).name : null;
        this.setBehaviorView({
          walletAddress: provider.wc['_accounts'][0],
          networkName: activeChain,
          connected: true,
          chainId: provider.wc['_chainId']
        })

        provider.on("open", (d) => {
          console.log("open", d);
        });


      } else {
        // console.log('---------not--conne')

        this.setBehaviorView({
          walletAddress: '',
          networkName: '',
          connected: false,
          chainId: 0
        })

      }
    }
    // console.log('---------------provider--------||', provider);

  }


  setBehaviorView(behave: object) {
    this.behave.next(behave);
  }

  /** Get Behavior for user registraion */
  getBehaviorView(): Observable<object> {
    return this.behave.asObservable();
  }

  setOnConnectBehaviorView(behave: object) {
    this.onConnectBehave.next(behave);
  }

  /** Get Behavior for user registraion */
  getOnConnectBehaviorView(): Observable<object> {
    return this.onConnectBehave.asObservable();
  }

  // -------------------------wallet Connect code
  public walletConnectInit = async () => {
    // bridge url
    const bridge = "https://bridge.walletconnect.org";

    // create new connector
    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });
    this.connector = connector;
    // check if already connected
    if (!connector.connected) {
      // create new session
      await connector.createSession();
    }

    // // subscribe to events
    await this.subscribeToEvents();
  }


  public subscribeToEvents = () => {

    if (!this.connector) {
      return;
    }

    this.connector.on("session_update", async (error, payload) => {
      console.log(`connector.on("session_update")`, payload);
      if (error) {
        throw error;
      }
    });

    this.connector.on("connect", (error, payload) => {
      const activeChain = this.connector.chainId ? getChainData(this.connector.chainId).name : null;
      const address = this.connector.accounts[0];

      if (error) {
        throw error;
      }
      this.setBehaviorView({
        walletAddress: address,
        networkName: activeChain,
        connected: true,
        chainId: this.connector.chainId
      })

      this.setOnConnectBehaviorView({
        connected: true
      })

    });

    this.connector.on("disconnect", (error, payload) => {
      console.log(`connector.on("disconnect")`, payload);
      this.killSession();
      if (error) {
        throw error;
      }
      this.setBehaviorView({
        walletAddress: '',
        networkName: '',
        connected: false,
        chainId: 0
      })
    });

    this.connector = this.connector;
  };

  public killSession = async () => {
    if (this.connector) {
      this.connector.killSession();
      this.connector = '';
    }
    this.router.navigate(['/index']);
  };

  // exportInstance
  async exportInstance(networkName, contractAddress,ABI) {

    let web3;
    if (networkName == 'Ropsten') {
      web3 = new Web3("https://ropsten.infura.io/v3/5918063957ef4e8bae0348d54fa14ebb");
    } else if (networkName == 'Mainnet') {
      web3 = new Web3("https://mainnet.infura.io/v3/5918063957ef4e8bae0348d54fa14ebb");
    }
    else if (networkName == 'Görli') {
      web3 = new Web3("https://goerli.infura.io/v3/5918063957ef4e8bae0348d54fa14ebb");
    }
    return await new web3.eth.Contract(ABI, contractAddress);
  }

    //balanceOf
    getBalance(userWalletAccount, contractInstance,poolId) {
      return new Promise(async (resolve, reject) => {
        if (!userWalletAccount) {
          this.toaster.error('Wallet connection failed.');
          return;
        }
        let result = await contractInstance.methods.userInfo(poolId,userWalletAccount).call({
          from: userWalletAccount
        });
        if (result) {
          resolve(result.amount / environment.divideValue);
        } else {
          reject('err');
        }
  
      });
  
    }
  
    balanceOfMain(userWalletAccount, contractInstance) {
      return new Promise(async (resolve, reject) => {
        if (!userWalletAccount) {
          console.log('Metamask/Wallet connection failed.');
          this.toaster.error('Metamask/Wallet connection failed.');
          return;
        }
        let result = await contractInstance.methods.balanceOf(userWalletAccount).call({
          from: userWalletAccount
        });
        if (result) {
          resolve(result / environment.divideValue);
        } else {
          reject('err');
        }
  
      });
  
    }
    // earned
    async earned(walletAddress, contractInstance,poolId) {
      return new Promise(async (resolve, reject) => {
        let result = await contractInstance.methods.pendingXAntiSeal(poolId,walletAddress).call({ from: walletAddress });
  
        if (result) {
          resolve(result / environment.divideValue);
        } else {
          reject('err');
        }
      })
    }
  
  
    // --dn
    async approve(contractInstance, walletAddress, _balance, userAccount, chainId) {
      _balance = await convertAmountToRawNumber(_balance);
  
      return new Promise(async (resolve, reject) => {
  
  
        const from = userAccount;
        const to = contractInstance['_address'];
        const _nonce = await apiGetAccountNonce(userAccount, chainId);
        const nonce = sanitizeHex(convertStringToHex(_nonce));
        const gasPrices = await apiGetGasPrices();
        const _gasPrice = gasPrices.slow.price;
        const gasPrice = sanitizeHex(convertStringToHex(convertAmountToRawNumber(_gasPrice, 9)));
        const _gasLimit = 30000;
        const gasLimit = sanitizeHex(convertStringToHex(_gasLimit));
        // const _value = 0;
        // const value = sanitizeHex(convertStringToHex(_value));
  
        // await this.walletConnectInit();
  
        let uniqueAddress = await contractInstance.methods.approve(walletAddress, _balance).encodeABI();
        let txnObject = {
          from: from,
          to: to,
          // gasPrice: gasPrice,
          // gas: gasLimit,
          // value: "0x0",
          nonce: nonce,
  
          data: await uniqueAddress
        };
  
        if (this.connector) {
  
          return this.connector.sendTransaction(txnObject)
            .then((result) => {
              // Returns transaction id (hash)
              resolve(result);
            })
            .catch((error) => {
              // Error returned when rejected
              reject(error);
            });
        } else {
          console.log('-------------else')
        }
  
        // contractInstance.methods.approve(walletAddress, _balance).send({ from: userAccount }).then((data) => {
        //   if (data) {
        //     resolve(data);
        //   }
        // }).catch((er) => {
        //   if (er) {
        //     reject(er);
        //   }
        // })
  
      })
    }
  
  
    async stake(contractInstance, _balance, walletAddress, chainId,poolId) {
      // _balance = _balance * 1e18;
      _balance = await convertAmountToRawNumber(_balance);
  
      return new Promise(async (resolve, reject) => {
  
  
        const from = walletAddress;
        const to = contractInstance['_address'];
        const _nonce = await apiGetAccountNonce(walletAddress, chainId);
        const nonce = sanitizeHex(convertStringToHex(_nonce));
        // const gasPrices = await apiGetGasPrices();
        // const _gasPrice = 100;
        // const gasPrice = sanitizeHex(convertStringToHex(convertAmountToRawNumber(_gasPrice, 9)));
        const _gasLimit = 22000;
        const gasLimit = sanitizeHex(convertStringToHex(_gasLimit));
        
        let res = await contractInstance.methods.deposit(poolId,_balance).encodeABI();
  
        let txnObject = {
          from: from,
          to: to,
          // gasPrice: gasPrice,
          // gas: gasLimit,
          // value: "0x0",
          nonce: nonce,
          data: res
        };
  
        if (this.connector) {
          return this.connector.sendTransaction(txnObject)
            .then((result) => {
              // Returns transaction id (hash)
              resolve(result);
            })
            .catch((error) => {
              // Error returned when rejected
              reject(error);
            });
        } else {
          reject('Please connect with wallet.')
        }
  
      })
    }
  
  
    //---- dn
    async withdraw(contractInstance, _balance, walletAddress, chainId,poolId) {
      // _balance = _balance * 1e18;
      _balance = await convertAmountToRawNumber(_balance);
  
      return new Promise(async (resolve, reject) => {
  
        const from = walletAddress;
        const to = contractInstance['_address'];
        const _nonce = await apiGetAccountNonce(walletAddress, chainId);
        const nonce = sanitizeHex(convertStringToHex(_nonce));
        // const gasPrices = await apiGetGasPrices();
        // const _gasPrice = 100;
        // const gasPrice = sanitizeHex(convertStringToHex(convertAmountToRawNumber(_gasPrice, 9)));
        const _gasLimit = 22000;
        const gasLimit = sanitizeHex(convertStringToHex(_gasLimit));
  
        let res = await contractInstance.methods.withdraw(poolId,_balance).encodeABI();
  
        let txnObject = {
          from: from,
          to: to,
          // gasPrice: gasPrice,
          // gas: gasLimit,
          // value: "0x0",
          nonce: nonce,
          data: res
        };
  
  
        if (this.connector) {
          this.connector.sendTransaction(txnObject)
            .then((result) => {
              // Returns transaction id (hash)
              resolve(result);
            })
            .catch((error) => {
              // Error returned when rejected
              reject(error);
            });
        } else {
          reject('Please connect with wallet.')
        }
  
        // contractInstance.methods.withdraw(_balance).send({ from: walletAddress }).then((data) => {
        //   if (data) {
        //     resolve(data);
        //   }
        // }).catch((er) => {
        //   if (er) {
        //     reject(er);
        //   }
        // })
      })
    }
  
  
    getReward(contractInstance, walletAddress, chainId) {
  
      return new Promise(async (resolve, reject) => {
  
        const from = walletAddress;
        const to = contractInstance['_address'];
        const _nonce = await apiGetAccountNonce(walletAddress, chainId);
        const nonce = sanitizeHex(convertStringToHex(_nonce));
        // const gasPrices = await apiGetGasPrices();
        // const _gasPrice = 100;
        // const gasPrice = sanitizeHex(convertStringToHex(convertAmountToRawNumber(_gasPrice, 9)));
        // const _gasLimit = 22000;
        // const gasLimit = sanitizeHex(convertStringToHex(_gasLimit));
  
        let res = await contractInstance.methods.getReward().encodeABI();
  
        let txnObject = {
          from: from,
          to: to,
          // gasPrice: gasPrice,
          // gas: gasLimit,
          // value: "0x0",
          nonce: nonce,
          data: res
        };
  
        if (this.connector) {
          this.connector.sendTransaction(txnObject)
            .then((result) => {
              // Returns transaction id (hash)
              resolve(result);
            })
            .catch((error) => {
              // Error returned when rejected
              reject(error);
            });
        } else {
          reject('Please connect with wallet.')
        }
  
        // contractInstance.methods.getReward().send({ from: walletAddress }).then((data) => {
        //   if (data) {
        //     resolve(data);
        //   }
        // }).catch((er) => {
        //   if (er) {
        //     reject(er);
        //   }
        // })
      })
    }
    
    allowance(contractInstance,walletAddress,contractAddress){
      return new Promise(async (resolve, reject) => {
        if (!walletAddress) {
          console.log('Metamask/Wallet connection failed.');
          this.toaster.error('Metamask/Wallet connection failed.');
          return;
        }
  
        let result = await contractInstance.methods.allowance(walletAddress,contractAddress).call({
          from: walletAddress
        });
  
        if (result) {
         let returnValue= (result / environment.divideValue).toFixed(10);
          resolve(returnValue);
        } else {
          reject('err');
        }
  
      });
    }
  
    
    
}
