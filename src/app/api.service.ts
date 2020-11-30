import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import Web3 from 'web3';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { convertAmountToRawNumber } from './helpers/bignumber';

declare let window: any;
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  // ABI: any = environment.commanABI;


  constructor(private route: ActivatedRoute, private http: HttpClient, private toaster: ToastrService, private router: Router,) {
    // const that = this;
    if (window.ethereum) {

      window.web3 = new Web3(window.web3.currentProvider);

      window.ethereum.autoRefreshOnNetworkChange = true;

      // window.ethereum.on('accountsChanged', function (accounts) {

      //   window.location.reload();
      //   // Time to reload your interface with accounts[0]!
      // })

    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // commented for future use

    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

  }

  getNetworkName() {
    if (window.ethereum && window.ethereum.chainId) {
      if (window.ethereum.chainId == "0x1") {
        return environment.main;
      }
      if (window.ethereum.chainId == "0x3") {
        return environment.rops;
      }
      if (window.ethereum.chainId == "0x4") {
        return environment.rinkeby;
      }
      if (window.ethereum.chainId == "0x5") {
        return environment.Goerli;
      }
      if (window.ethereum.chainId == "0x2a") {
        return environment.Kovan;
      }
    }
  }


  connect() {
    if (window.ethereum) {
      // commented for future use
      return new Promise((resolve, reject) => {

        let temp = window.ethereum.enable();
        if (temp) {
          resolve(temp)
        } else {
          reject('err');
        }

      })
    }
  }

  // --dn
  async exportInstance(contractAddress, ABI) {
    return await new window.web3.eth.Contract(ABI, contractAddress);
  }
  // --dn
  async export() {
    if (window.web3) {
      return new Promise((resolve, reject) => {
        window.web3.eth.getAccounts((error, result) => {

          // just 1 min jo
          if (error != null) {
            resolve([]);
          }
          if (result == undefined || result.length == 0) {
            // alert("No account found! Make sure the Ethereum client is configured properly.");
            resolve([]);
          } else {

            let account = result[0];

            window.web3.eth.defaultAccount = account;

            resolve(account)
          }
        })
      })
    } else {
      // this.toaster.error('No account found! Make sure the Ethereum client is configured properly. ')
    }

  }

  getSelectedAddress() {
    if (window.ethereum && window.ethereum.selectedAddress) {
      return window.ethereum.selectedAddress;
    }
  }

  getBalance(userWalletAccount, contractInstance, poolId) {
    return new Promise(async (resolve, reject) => {
      if (!userWalletAccount) {
        console.log('Metamask/Wallet connection failed.');
        this.toaster.error('Metamask/Wallet connection failed.');
        return;
      }

      let result = await contractInstance.methods.userInfo(poolId, userWalletAccount).call({
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

  async earned(walletAddress, contractInstance, poolId) {
    return new Promise(async (resolve, reject) => {
      let result = await contractInstance.methods.pendingXAntiSeal(poolId, walletAddress).call({ from: walletAddress })

      if (result) {
        resolve(result / environment.divideValue);
      } else {
        reject('err');
      }
    })
  }

  async approve(contractInstance, walletAddress, _balance, userAccount, chainId) {
    _balance = await convertAmountToRawNumber(_balance);

    return new Promise((resolve, reject) => {

      contractInstance.methods.approve(walletAddress, _balance).send({ from: userAccount }).then((data) => {
        if (data) {
          resolve(data);
        }
      }).catch((er) => {
        if (er) {
          reject(er);
        }
      })

    })
  }

  //-----dn
  async stake(contractInstance, _balance, walletAddress, chainId, poolId) {
    // _balance = _balance * 1e18;
    _balance = await convertAmountToRawNumber(_balance);

    return new Promise((resolve, reject) => {

      contractInstance.methods.deposit(poolId, _balance).send({ from: walletAddress }).then((data) => {
        if (data) {
          resolve(data);
        }
      }).catch((er) => {
        if (er) {
          reject(er);
        }
      })
    })
  }

  //---- dn
  async withdraw(contractInstance, _balance, walletAddress, chainId, poolId) {
    // _balance = _balance * 1e18;
    _balance = await convertAmountToRawNumber(_balance);

    return new Promise((resolve, reject) => {
      // gas: 5000000,
      // gasPrice: 210000,
      contractInstance.methods.withdraw(poolId, _balance).send({ from: walletAddress }).then((data) => {
        if (data) {
          resolve(data);
        }
      }).catch((er) => {
        if (er) {
          reject(er);
        }
      })
    })
  }

  getReward(contractInstance, walletAddress, chainId) {

    return new Promise((resolve, reject) => {

      contractInstance.methods.getReward().send({ from: walletAddress }).then((data) => {
        if (data) {
          resolve(data);
        }
      }).catch((er) => {
        if (er) {
          reject(er);
        }
      })
    })
  }

  allowance(contractInstance, walletAddress, contractAddress) {
    return new Promise(async (resolve, reject) => {
      if (!walletAddress) {
        this.toaster.error('Metamask/Wallet connection failed.');
        return;
      }

      try {
        let result = await contractInstance.methods.allowance(walletAddress, contractAddress).call({
          from: walletAddress
        });
        if (result) {
          let returnValue = (result / environment.divideValue).toFixed(10);
          resolve(returnValue);
        }

      } catch (error) {
        reject(0);
      }

    });
  }

}
