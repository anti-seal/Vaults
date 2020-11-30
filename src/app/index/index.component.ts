import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ApiWalletService } from '../api-wallet.service';

declare const $: any;
declare const window: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  login: Boolean = false;
  userAccount: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private apiWalletService: ApiWalletService,
    private toaster: ToastrService,) {
  }
  async ngOnInit() {
    this.userAccount = await this.apiService.export();
    if (this.userAccount != undefined && this.userAccount && this.userAccount.length) {
      this.login = true;

    } else {
      this.login = false;
    }
  }


  connectToMetaMask() {

    this.apiService.connect().then((data) => {
      this.toaster.success('User Connected Successfully');
      // this.route.snapshot['data'] = { key: 'metamask' }
      $('#UnlockWallet').modal('hide');
      this.router.navigate(["/dashboard/1"]);

    }).catch((er) => {
      $('#UnlockWallet').modal('hide');
      if (er && er.code) {
        this.toaster.error(er.message);
      }
    })
  }

  connectToWalletConnect() {
    console.log(this.route);
    this.apiWalletService.walletConnectInit();

    this.apiWalletService.getOnConnectBehaviorView().subscribe((data) => {
      if (data && data != undefined) {
        if (data['connected']) {
          $('#UnlockWallet').modal('hide');
          this.router.navigate(["/dashboard/2"]);
        } else {
          $('#UnlockWallet').modal('hide');

        }
      }
    })
  }


  async goToSelectfarm() {
    this.userAccount = await this.apiService.export();

    if (this.userAccount != undefined && this.userAccount && (this.userAccount.length)) {
      this.toaster.info('Already wallet Connected');
      this.router.navigate(['/dashboard/1'])
    } else {

      this.apiWalletService.getBehaviorView().subscribe((data) => {
        if (data && data != undefined) {
          if (data['connected']) {
            this.userAccount = data['walletAddress']
            this.router.navigate(['/dashboard/2'])

          } else {
            $('#UnlockWallet').modal({
              backdrop: 'static',
              keyboard: false,
              show: true
            });
          }
        }
        else {
          $('#UnlockWallet').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
          });
        }
      })

    }
  }

  async goToDrain() {
    this.userAccount = await this.apiService.export();

    if (this.userAccount != undefined && this.userAccount && (this.userAccount.length)) {
      this.toaster.info('Already wallet Connected');
      this.router.navigate(['/drainable/1'])
    } else {

      this.apiWalletService.getBehaviorView().subscribe((data) => {
        if (data && data != undefined) {
          if (data['connected']) {
            this.userAccount = data['walletAddress']
            this.router.navigate(['/drainable/2'])

          } else {
            $('#UnlockWallet').modal({
              backdrop: 'static',
              keyboard: false,
              show: true
            });
          }
        }
        else {
          $('#UnlockWallet').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
          });
        }
      })

    }
  }


}
