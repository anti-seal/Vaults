import { Component, HostListener, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiWalletService } from '../api-wallet.service';
// 2 diff ABIs  remain

declare const $: any;
declare let window: any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  urlImage: any = '';


  showData: any = {
    pool: '',
    plantation: '',
    token: '',
    staked: '',
    earned: ''
  };


  addForm1: FormGroup;
  addForm2: FormGroup;

  withDrawForm: FormGroup;

  submitted1: Boolean = false;
  submitted2: Boolean = false;
  submitted3: Boolean = false;
  submitted4: Boolean = false;

  contractInstance: any;
  id: any;
  walletId: any;
  earned: any = 0;
  balance: any = 0;
  show: any = 'approve';
  showDisabled: any = '';

  userAccount: any;
  contractDiffStake1Instance: any;
  networkName: any;
  chainId: any;
  approvePopupMsg: any = 'Add Token';

  masterSeal: any = '';
  ropstanLP: any = {
    ANTISEALLPToken: environment.ANTISEALLPTokenR,
    USDTLPToken: environment.USDTLPTokenR,
    USDCLPToken: environment.USDCLPTokenR,
    DAILPToken: environment.DAILPTokenR,
    WBTCLPToken: environment.WBTCLPTokenR,
  };
  mainLP: any = {
    ANTISEALLPToken: environment.ANTISEALLPTokenM,
    USDTLPToken: environment.USDTLPTokenM,
    USDCLPToken: environment.USDCLPTokenM,
    DAILPToken: environment.DAILPTokenM,
    WBTCLPToken: environment.WBTCLPTokenM,
  };

  //----------------------main
  lpToken: any = {};

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private apis: ApiService,
    private _route: ActivatedRoute,
    private toaster: ToastrService,
    private dtr: ChangeDetectorRef,
    private apiWalletService: ApiWalletService) { }

  ngOnInit() {
    this.buildAddForm1();
    this.buildAddForm2();
    this.buildWithDrawForm();

    this.id = this._route.snapshot.params['id'];
    this.walletId = this._route.snapshot.params['walletId'];

    this.checkConnected(this.id, this.walletId)


  }

  buildAddForm1() {
    this.addForm1 = this._formBuilder.group({
      amount: ['', [Validators.required]],
    });
  }
  buildAddForm2() {
    this.addForm2 = this._formBuilder.group({
      amount: ['', [Validators.required]],
    });
  }

  buildWithDrawForm() {
    this.withDrawForm = this._formBuilder.group({
      amount: ['', [Validators.required]],
    });
  }

  async checkConnected(id, walletId) {

    if (id && id != undefined && walletId && walletId != undefined) {

      let walletIdArray = ['1', '2'];
      if (!walletIdArray.includes(walletId)) {
        this.router.navigate(['/index']);
      } else {
        if (walletId == '1') {
          let idArray = ['0', '1', '2', '3', '4'];
          if (!idArray.includes(id)) {
            this.router.navigate(['/dashboard/' + walletId]);
          } else {
            this.userAccount = await this.apis.export();
            if (this.userAccount == undefined || !this.userAccount.length) {
              this.router.navigate(['/index'])
            } else {

              this.networkName = await this.apis.getNetworkName();
              if (this.networkName == 'Ropsten') {
                this.lpToken = this.ropstanLP;
                this.masterSeal = environment.commanContractAddressR;
              }
              if (this.networkName == 'Mainnet') {
                this.lpToken = this.mainLP;
                this.masterSeal = environment.commanContractAddressM;
              }
              // for generate first Instance ETH_ANTISEAL_LP_TOKEN
              if (id == '0') {
                // this.approvePopupMsg = 'Add Liquidity';
                this.urlImage = '../../assets/images/Pair1.png';

                this.contractInstance = await this.apis.exportInstance(this.masterSeal, environment.commanABI);
                this.contractDiffStake1Instance = await this.apis.exportInstance(this.lpToken.ANTISEALLPToken, environment.tokenABI);

                let poolId = parseInt(this.id);

                await this.earnedTokens(this.userAccount, this.contractInstance, this.apis, poolId);
                await this.balanceOf(this.userAccount, this.contractInstance, this.apis, poolId);
                await this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apis)
                await this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apis);

                this.showData.pool = 'TOKEN LIQUIDITY POOLS';
                this.showData.plantation = 'ETH-ANTISEAL';
                this.showData.deposit = 'ETH-ANTISEAL UNI-V2 LP';
                this.showData.staked = 'ETH-ANTISEAL UNI-V2 LP Staked';
                this.showData.earned = 'xANTI earned';

              }
              // for generate second Instance ETH_USDT_LP_TOKEN
              else if (id == '1') {
                let poolId = parseInt(this.id);
                this.urlImage = '../../assets/images/Pair4.png';

                this.contractInstance = await this.apis.exportInstance(this.masterSeal, environment.commanABI)
                this.contractDiffStake1Instance = await this.apis.exportInstance(this.lpToken.USDTLPToken, environment.tokenABI);
                await this.earnedTokens(this.userAccount, this.contractInstance, this.apis, poolId);
                await this.balanceOf(this.userAccount, this.contractInstance, this.apis, poolId);
                await this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apis)

                await this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apis);

                this.showData.pool = 'STABLE COIN LIQUIDITY POOLS';
                this.showData.plantation = 'ETH-USDT';
                this.showData.deposit = 'ETH-USDT UNI-V2 LP';
                this.showData.staked = 'ETH-USDT UNI-V2 LP Staked';
                this.showData.earned = 'xANTI earned';

              }
              // for generate third Instance ETH_USDC_LP_TOKEN
              else if (id == '2') {
                let poolId = parseInt(this.id);
                this.urlImage = '../../assets/images/Pair6.png';

                this.contractInstance = await this.apis.exportInstance(this.masterSeal, environment.commanABI)
                this.contractDiffStake1Instance = await this.apis.exportInstance(this.lpToken.USDCLPToken, environment.tokenABI);
                await this.earnedTokens(this.userAccount, this.contractInstance, this.apis, poolId);
                await this.balanceOf(this.userAccount, this.contractInstance, this.apis, poolId);
                await this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apis)

                await this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apis);

                this.showData.pool = 'STABLE COIN LIQUIDITY POOLS';
                this.showData.plantation = 'ETH-USDC';
                this.showData.deposit = 'ETH-USDC UNI-V2 LP';
                this.showData.staked = 'ETH-USDC UNI-V2 LP Staked';
                this.showData.earned = 'xANTI earned';

              }
              // for generate fourth Instance ETH_DAI_LP_TOKEN
              else if (id == '3') {
                let poolId = parseInt(this.id);
                this.urlImage = '../../assets/images/Pair5.png';

                this.contractInstance = await this.apis.exportInstance(this.masterSeal, environment.commanABI)
                this.contractDiffStake1Instance = await this.apis.exportInstance(this.lpToken.DAILPToken, environment.tokenABI);
                await this.earnedTokens(this.userAccount, this.contractInstance, this.apis, poolId);
                await this.balanceOf(this.userAccount, this.contractInstance, this.apis, poolId);
                await this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apis)

                await this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apis);

                this.showData.pool = 'STABLE COIN LIQUIDITY POOLS';;

                this.showData.plantation = 'ETH-DAI';
                this.showData.deposit = 'ETH-DAI UNI-V2 LP';
                this.showData.staked = 'ETH-DAI UNI-V2 LP Staked';
                this.showData.earned = 'xANTI earned';
              }
              // for generate fifth Instance ETH_WBTC_ETH_TOKEN
              else if (id == '4') {
                let poolId = parseInt(this.id);
                this.urlImage = '../../assets/images/Pair2.png';

                this.contractInstance = await this.apis.exportInstance(this.masterSeal, environment.commanABI)
                this.contractDiffStake1Instance = await this.apis.exportInstance(this.lpToken.WBTCLPToken, environment.tokenABI);
                await this.earnedTokens(this.userAccount, this.contractInstance, this.apis, poolId);
                await this.balanceOf(this.userAccount, this.contractInstance, this.apis, poolId);
                await this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apis)
                await this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apis);

                this.showData.pool = 'TOKEN LIQUIDITY POOLS';

                this.showData.plantation = 'ETH-WBTC';
                this.showData.deposit = 'ETH-WBTC UNI-V2 LP';
                this.showData.staked = 'ETH-WBTC UNI-V2 LP Staked';
                this.showData.earned = 'xANTI earned';

              }
            }
          }
        }
        // if
        else {
          let idArray = ['0', '1', '2', '3', '4'];

          if (!idArray.includes(id)) {
            this.router.navigate(['/dashboard/' + walletId]);
          } else {
            this.apiWalletService.getBehaviorView().subscribe(async (data) => {
              if (data && data != undefined) {
                if (data['connected'] && data['connected'] == true) {
                  this.networkName = data['networkName'];
                  this.userAccount = data['walletAddress'];
                  this.chainId = data['chainId'];

                  if (this.networkName == 'Ropsten') {
                    this.masterSeal = environment.commanContractAddressR;
                    this.lpToken = this.ropstanLP;
                  }
                  if (this.networkName == 'Mainnet') {
                    this.lpToken = this.mainLP;
                    this.masterSeal = environment.commanContractAddressM;

                  }
                  this.apiWalletService.walletConnectInit();

                  if (id == '0') {
                    // this.approvePopupMsg = 'Add Liquidity';
                    this.urlImage = '../../assets/images/Pair1.png';
                    this.contractInstance = await this.apiWalletService.exportInstance(this.networkName, this.masterSeal, environment.commanABI);
                    this.contractDiffStake1Instance = await this.apiWalletService.exportInstance(this.networkName, this.lpToken.ANTISEALLPToken, environment.tokenABI);
                    let poolId = parseInt(this.id);

                    await this.earnedTokens(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                    await this.balanceOf(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                    await this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apiWalletService)

                    await this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apiWalletService);


                    this.showData.pool = 'TOKEN LIQUIDITY POOLS';
                    this.showData.plantation = 'ETH-ANTISEAL';
                    this.showData.deposit = 'ETH-ANTISEAL UNI-V2 LP';
                    this.showData.staked = 'ETH-ANTISEAL UNI-V2 LP Staked';
                    this.showData.earned = 'xANTI earned';

                  } else if (id == '1') {
                    let poolId = parseInt(this.id);
                    this.urlImage = '../../assets/images/Pair4.png';
                    this.contractInstance = await this.apiWalletService.exportInstance(this.networkName, this.masterSeal, environment.commanABI)
                    this.contractDiffStake1Instance = await this.apiWalletService.exportInstance(this.networkName, this.lpToken.USDTLPToken, environment.tokenABI);
                    await this.earnedTokens(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                    await this.balanceOf(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                    await this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apiWalletService)

                    await this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apiWalletService);

                    this.showData.pool = 'STABLE COIN LIQUIDITY POOLS';
                    this.showData.plantation = 'ETH-USDT';
                    this.showData.deposit = 'ETH-USDT UNI-V2 LP';
                    this.showData.staked = 'ETH-USDT UNI-V2 LP Staked';
                    this.showData.earned = 'xANTI earned';

                  }
                  else if (id == '2') {
                    let poolId = parseInt(this.id);
                    this.urlImage = '../../assets/images/Pair6.png';
                    this.contractInstance = await this.apiWalletService.exportInstance(this.networkName, this.masterSeal, environment.commanABI)
                    this.contractDiffStake1Instance = await this.apiWalletService.exportInstance(this.networkName, this.lpToken.USDCLPToken, environment.tokenABI);
                    await this.earnedTokens(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                    await this.balanceOf(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                    await this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apiWalletService)

                    await this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apiWalletService);

                    this.showData.pool = 'STABLE COIN LIQUIDITY POOLS';
                    this.showData.plantation = 'ETH-USDC';
                    this.showData.deposit = 'ETH-USDC UNI-V2 LP';
                    this.showData.staked = 'ETH-USDC UNI-V2 LP Staked';
                    this.showData.earned = 'xANTI earned';
                  }
                  // for generate fourth Instance DTD
                  else if (id == '3') {
                    let poolId = parseInt(this.id);
                    this.urlImage = '../../assets/images/Pair5.png';

                    this.contractInstance = await this.apiWalletService.exportInstance(this.networkName, this.masterSeal, environment.commanABI)
                    this.contractDiffStake1Instance = await this.apiWalletService.exportInstance(this.networkName, this.lpToken.DAILPToken, environment.tokenABI);
                    await this.earnedTokens(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                    await this.balanceOf(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                    await this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apiWalletService)

                    await this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apiWalletService);

                    this.showData.pool = 'STABLE COIN LIQUIDITY POOLS';;

                    this.showData.plantation = 'ETH-DAI';
                    this.showData.deposit = 'ETH-DAI UNI-V2 LP';
                    this.showData.staked = 'ETH-DAI UNI-V2 LP Staked';
                    this.showData.earned = 'xANTI earned';

                  }
                  else if (id == '4') {
                    let poolId = parseInt(this.id);
                    this.urlImage = '../../assets/images/Pair2.png';

                    this.contractInstance = await this.apiWalletService.exportInstance(this.networkName, this.masterSeal, environment.commanABI)
                    this.contractDiffStake1Instance = await this.apiWalletService.exportInstance(this.networkName, this.lpToken.WBTCLPToken, environment.tokenABI);
                    await this.earnedTokens(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                    await this.balanceOf(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                    await this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apiWalletService)

                    await this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apiWalletService);

                    this.showData.pool = 'TOKEN LIQUIDITY POOLS';

                    this.showData.plantation = 'ETH-WBTC';
                    this.showData.deposit = 'ETH-WBTC UNI-V2 LP';
                    this.showData.staked = 'ETH-WBTC UNI-V2 LP Staked';
                    this.showData.earned = 'xANTI earned';

                  }

                } else {
                  this.router.navigate(['/dashboard/' + walletId]);
                }
              } else {
                this.router.navigate(['/dashboard/' + walletId]);
              }
            })

          }
        }

      }
    } else {
      this.router.navigate['/index']
    }

  }


  // for earned 
  async earnedTokens(walletAddress, contractInstance, service, poolId) {

    service.earned(walletAddress, contractInstance, poolId).then((data: any) => {
      if (data) {
        this.earned = (data).toFixed(6);
      }
    }).catch((er) => {
      this.toaster.error('there is some issue with get earned');
    });
  }

  // for balance GET
  async balanceOf(walletAddress, contractInstance, service, poolId) {
    await service.getBalance(walletAddress, contractInstance, poolId).then(async (data: any) => {
      if (data) {
        this.balance = await (data).toFixed(10)
      }
    }).catch((er) => {
      // err code
    });
  }
  // await this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apis);

  // checkAllowance
  async checkAllowance(contractInstance, walletAddress, contractAddress, service) {
    await service.allowance(contractInstance, walletAddress, contractAddress).then(async (data: any) => {
      if (data && data > 0) {
        this.addForm2.patchValue({ 'amount': data });
        this.show = 'stake';
      }
    }).catch((er) => {
      // err code
    });
  }
  // 

  async checkBalanceOfMain(walletAddress, contractInstance, service) {

    service.balanceOfMain(walletAddress, contractInstance).then(async (data: any) => {
      if (data && data > 0) {
        this.show = 'approve'
      } else {
        this.show = ''
      }
    }).catch((er) => {
      // err code
    });
  }

  // for balance balanceOfMain
  async balanceOfMain(walletAddress, contractInstance, service) {
    service.balanceOfMain(walletAddress, contractInstance).then(async (data: any) => {
      if (data) {
        await this.addForm1.patchValue({ 'amount': (data).toFixed(10) });
      }
    }).catch((er) => {
      // err code
    });
  }


  async clickMax() {

    if (this.userAccount) {
      let instance = this.contractInstance;

      let service: any = '';
      if (this.walletId == '1') {
        service = this.apis;
      } else {
        service = this.apiWalletService;
      }

      if (this.id == '0') {
        instance = this.contractDiffStake1Instance;
      }

      if (this.id == '1') {
        instance = this.contractDiffStake1Instance;
      }


      if (this.id == '2') {
        instance = this.contractDiffStake1Instance;
      }

      if (this.id == '3') {
        instance = this.contractDiffStake1Instance;

      }

      if (this.id == '4') {
        instance = this.contractDiffStake1Instance;
      }
      await this.balanceOfMain(this.userAccount, instance, service);
    }
  }


  // for Approve
  async onClickApprove() {
    this.submitted1 = true;
    if (this.addForm1.invalid) {
      return;
    } else {
      if (this.userAccount) {
        let address = this.userAccount;
        let instance = this.contractInstance;

        let service: any = '';
        if (this.walletId == '1') {
          service = this.apis;
        } else {
          service = this.apiWalletService;
        }

        if (this.id == '0') {
          address = this.masterSeal;
          instance = this.contractDiffStake1Instance;
        }

        if (this.id == '1') {
          address = this.masterSeal;
          instance = this.contractDiffStake1Instance;
        }
        if (this.id == '2') {
          address = this.masterSeal;
          instance = this.contractDiffStake1Instance;
        }

        if (this.id == '3') {
          address = this.masterSeal;
          instance = this.contractDiffStake1Instance;

        }

        if (this.id == '4') {
          address = this.masterSeal;
          instance = this.contractDiffStake1Instance;

        }

        this.showDisabled = 'show';
        // 
        await service.approve(instance, address, this.addForm1.value.amount, this.userAccount, this.chainId).then((receipt) => {

          if (receipt) {
            this.addForm2.patchValue({ 'amount': (this.addForm1.value.amount).toFixed(10) });

            this.addForm1.reset();
            this.show = 'stake';
            this.showDisabled = 'hide';
            this.submitted1 = false;
            $('#custom1').modal('hide');
          }
        }).catch((er) => {
          if (er && er.code) {
            this.showDisabled = 'hide';
            this.toaster.error(er.message);
            this.addForm1.reset();
            this.show = 'approve';
            $('#custom1').modal('hide');
            this.submitted1 = false;
          } else {
            this.showDisabled = 'hide';
            this.toaster.error(er);
            this.addForm1.reset();
            this.show = 'approve';
            $('#custom1').modal('hide');
            this.submitted1 = false;
          }
        })
      }

    }
  }

  // for Stack
  async onClickStack() {

    this.submitted2 = true;
    if (this.addForm2.invalid) {
      return;
    } else {
      let instance = this.contractInstance;

      let service: any = '';
      if (this.walletId == '1') {
        service = this.apis;
      } else {
        service = this.apiWalletService;
      }

      this.showDisabled = 'show';
      let poolId = parseInt(this.id);
      await service.stake(instance, this.addForm2.value.amount, this.userAccount, this.chainId, poolId).then(async (receipt) => {

        if (receipt) {
          this.addForm2.reset();
          this.show = 'approve';
          this.showDisabled = 'hide';
          this.submitted2 = false;
          $('#custom2').modal('hide');
          this.onClickRefresh();
        }
      }).catch((er) => {

        if (er && er.code) {
          this.showDisabled = 'hide';
          this.toaster.error(er.message);
          this.show = 'approve';
          this.addForm2.reset();
          $('#custom2').modal('hide');
          this.submitted2 = false;
        }
      });
    }
  }


  onClickRefresh() {
    window.location.reload();
  }


  // for with draw manualy. 
  async withDraw() {
    this.submitted3 = true;
    if (this.withDrawForm.invalid) {
      return;
    } else {
      this.showDisabled = 'show';

      let instance = this.contractInstance;


      let service: any = '';
      if (this.walletId == '1') {
        service = this.apis;
      } else {
        service = this.apiWalletService;
      }
      let poolId = parseInt(this.id);
      await this.withdrawInside(service, instance, this.withDrawForm.value.amount, this.userAccount, this.chainId, poolId);
    }
  }

  async clickWithdrawMax() {
    if (this.userAccount) {
      let instance = this.contractInstance;
      let poolId = parseInt(this.id);
      let service: any = '';
      if (this.walletId == '1') {
        service = this.apis;
      } else {
        service = this.apiWalletService;
      }
      // let data: any =   await this.earnedTokens(this.userAccount,instance,service, poolId);

      await service.getBalance(this.userAccount, instance, poolId).then(async (data: any) => {
        if (data) {
          await this.withDrawForm.patchValue({ 'amount': (data).toFixed(10) });
        }
      }).catch((er) => {
        // err code
      });

      // let data: any = await this.apis.getBalance(this.userAccount, instance, poolId);
      // if ((data && data != undefined) || data == 0) {

      //   await this.withDrawForm.patchValue({ 'amount': data });
      // }
    }
  }


  async withdrawInside(service, instance, amount, userAccount, chainId, poolId) {
    await service.withdraw(instance, amount, userAccount, chainId, poolId).then((receipt) => {

      if (receipt) {
        this.withDrawForm.reset();

        this.showDisabled = 'hide';
        this.submitted3 = false;
        $('#custom3').modal('hide');
        this.onClickRefresh();
      }
    }).catch((er) => {

      if (er && er.code) {
        this.showDisabled = 'hide';
        this.toaster.error(er.message);
        this.withDrawForm.reset();
        $('#custom3').modal('hide');
        this.submitted3 = false;
      }
    });
  }

  async getReward() {
    if (this.earned && this.earned > 0) {
      if (this.userAccount) {
        let instance = this.contractInstance;

        let service: any = '';
        if (this.walletId == '1') {
          service = this.apis;
        } else {
          service = this.apiWalletService;
        }
        await this.getRewardInside(service, instance, this.userAccount, this.chainId);
      }
    } else {
      this.toaster.info('You dont have any rewards.')
    }
  }

  async getRewardInside(service, instance, userAccount, chainId) {
    service.getReward(instance, userAccount, this.chainId).then((receipt) => {
      if (receipt) {
        this.onClickRefresh();
      }
    }).catch((er) => {
      if (er) {
        this.toaster.error(er.message);
      }
    })
  }

  goBack() {
    this.router.navigate(["/dashboard/" + this.walletId]);
  }

}
