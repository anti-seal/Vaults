import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiWalletService } from '../api-wallet.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-drainable',
  templateUrl: './drainable.component.html',
  styleUrls: ['./drainable.component.css']
})
export class DrainableComponent implements OnInit {

  userAccount: any;
  walletId: any;
  wallet: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private apiWalletService: ApiWalletService,
    private toaster: ToastrService,) { }

  ngOnInit() {

    this.walletId = this.route.snapshot.params['walletId'];


    if (this.walletId && this.walletId != undefined) {
      let idArray = ['1', '2'];

      if (!idArray.includes(this.walletId)) {
        this.router.navigate(['/index']);
      } else {

        if (this.walletId == '1') {
          
        } else {

        }

      }
    } else {
      this.router.navigate(['/index']);
    }
  }



  goToDrain() {

  }

}
