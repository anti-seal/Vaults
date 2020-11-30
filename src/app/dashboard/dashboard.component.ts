import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiWalletService } from '../api-wallet.service';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userAccount: any;
  walletId: any;
  wallet: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private apiWalletService: ApiWalletService,) {
      this.checkConnected()

     }

  ngOnInit() {
  }

  async checkConnected() {
    this.walletId = this.route.snapshot.params['walletId'];

    if (this.walletId && this.walletId != undefined) {
      let idArray = ['1', '2'];

      if (!idArray.includes(this.walletId)) {
        this.router.navigate(['/index']);
      } else {
        if (this.walletId == '1') {
          this.userAccount = await this.apiService.export();
          console.log('-------//-------', this.userAccount);
          if (this.userAccount == undefined || !this.userAccount.length) {
            this.router.navigate(['/index']);
          } else {
            // web3Metamask Connected
            this.wallet = 'Metamask';
          }
        } else {
          this.apiWalletService.getBehaviorView().subscribe((data) => {
            if (data && data != undefined) {
              if (data['connected'] && data['connected'] == true) {
                this.wallet = 'WalletConnect';
                this.apiWalletService.walletConnectInit();
              } else {
                this.router.navigate(['/index']);
              }

            } else {
              this.router.navigate(['/index']);
            }
          })
        }

      }
    }

  }

  routeToMoversPlant(pool) {
    if (this.wallet == 'Metamask') {
      this.router.navigate(['/details/'+pool+'/1'])
    } else if (this.wallet = 'WalletConnect') {
      this.router.navigate(['/details/'+pool+'/2'])
    }
  }

}
