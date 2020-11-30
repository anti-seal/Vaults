(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app/api-wallet.service.ts":
/*!***************************************!*\
  !*** ./src/app/api-wallet.service.ts ***!
  \***************************************/
/*! exports provided: ApiWalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiWalletService", function() { return ApiWalletService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _walletconnect_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @walletconnect/client */ "./node_modules/@walletconnect/client/dist/cjs/index.js");
/* harmony import */ var _walletconnect_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @walletconnect/qrcode-modal */ "./node_modules/@walletconnect/qrcode-modal/dist/cjs/index.js");
/* harmony import */ var _walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/utils */ "./src/app/helpers/utils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @walletconnect/web3-provider */ "./node_modules/@walletconnect/web3-provider/dist/cjs/index.js");
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/api */ "./src/app/helpers/api.ts");
/* harmony import */ var _helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/bignumber */ "./src/app/helpers/bignumber.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");















class ApiWalletService {
    constructor(route, http, toaster, router) {
        this.route = route;
        this.http = http;
        this.toaster = toaster;
        this.router = router;
        this.behave = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.onConnectBehave = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        // -------------------------wallet Connect code
        this.walletConnectInit = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // bridge url
            const bridge = "https://bridge.walletconnect.org";
            // create new connector
            const connector = new _walletconnect_client__WEBPACK_IMPORTED_MODULE_4___default.a({ bridge, qrcodeModal: _walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_5___default.a });
            this.connector = connector;
            // check if already connected
            if (!connector.connected) {
                // create new session
                yield connector.createSession();
            }
            // // subscribe to events
            yield this.subscribeToEvents();
        });
        this.subscribeToEvents = () => {
            if (!this.connector) {
                return;
            }
            this.connector.on("session_update", (error, payload) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(`connector.on("session_update")`, payload);
                if (error) {
                    throw error;
                }
            }));
            this.connector.on("connect", (error, payload) => {
                const activeChain = this.connector.chainId ? Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["getChainData"])(this.connector.chainId).name : null;
                const address = this.connector.accounts[0];
                if (error) {
                    throw error;
                }
                this.setBehaviorView({
                    walletAddress: address,
                    networkName: activeChain,
                    connected: true,
                    chainId: this.connector.chainId
                });
                this.setOnConnectBehaviorView({
                    connected: true
                });
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
                });
            });
            this.connector = this.connector;
        };
        this.killSession = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.connector) {
                this.connector.killSession();
                this.connector = '';
            }
            this.router.navigate(['/index']);
        });
        const that = this;
        const provider = new _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_8___default.a({
            infuraId: "5918063957ef4e8bae0348d54fa14ebb" // Required
        });
        if (provider) {
            if (provider.wc && provider.wc['_connected']) {
                // console.log('-----------conne', provider.wc['_chainId'])
                const activeChain = provider.wc['_chainId'] ? Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["getChainData"])(provider.wc['_chainId']).name : null;
                this.setBehaviorView({
                    walletAddress: provider.wc['_accounts'][0],
                    networkName: activeChain,
                    connected: true,
                    chainId: provider.wc['_chainId']
                });
                provider.on("open", (d) => {
                    console.log("open", d);
                });
            }
            else {
                // console.log('---------not--conne')
                this.setBehaviorView({
                    walletAddress: '',
                    networkName: '',
                    connected: false,
                    chainId: 0
                });
            }
        }
        // console.log('---------------provider--------||', provider);
    }
    setBehaviorView(behave) {
        this.behave.next(behave);
    }
    /** Get Behavior for user registraion */
    getBehaviorView() {
        return this.behave.asObservable();
    }
    setOnConnectBehaviorView(behave) {
        this.onConnectBehave.next(behave);
    }
    /** Get Behavior for user registraion */
    getOnConnectBehaviorView() {
        return this.onConnectBehave.asObservable();
    }
    // exportInstance
    exportInstance(networkName, contractAddress, ABI) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let web3;
            if (networkName == 'Ropsten') {
                web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a("https://ropsten.infura.io/v3/5918063957ef4e8bae0348d54fa14ebb");
            }
            else if (networkName == 'Mainnet') {
                web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a("https://mainnet.infura.io/v3/5918063957ef4e8bae0348d54fa14ebb");
            }
            else if (networkName == 'Görli') {
                web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a("https://goerli.infura.io/v3/5918063957ef4e8bae0348d54fa14ebb");
            }
            return yield new web3.eth.Contract(ABI, contractAddress);
        });
    }
    //balanceOf
    getBalance(userWalletAccount, contractInstance, poolId) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!userWalletAccount) {
                this.toaster.error('Wallet connection failed.');
                return;
            }
            let result = yield contractInstance.methods.userInfo(poolId, userWalletAccount).call({
                from: userWalletAccount
            });
            if (result) {
                resolve(result.amount / src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].divideValue);
            }
            else {
                reject('err');
            }
        }));
    }
    balanceOfMain(userWalletAccount, contractInstance) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!userWalletAccount) {
                console.log('Metamask/Wallet connection failed.');
                this.toaster.error('Metamask/Wallet connection failed.');
                return;
            }
            let result = yield contractInstance.methods.balanceOf(userWalletAccount).call({
                from: userWalletAccount
            });
            if (result) {
                resolve(result / src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].divideValue);
            }
            else {
                reject('err');
            }
        }));
    }
    // earned
    earned(walletAddress, contractInstance, poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let result = yield contractInstance.methods.pendingXAntiSeal(poolId, walletAddress).call({ from: walletAddress });
                if (result) {
                    resolve(result / src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].divideValue);
                }
                else {
                    reject('err');
                }
            }));
        });
    }
    // --dn
    approve(contractInstance, walletAddress, _balance, userAccount, chainId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _balance = yield Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertAmountToRawNumber"])(_balance);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const from = userAccount;
                const to = contractInstance['_address'];
                const _nonce = yield Object(_helpers_api__WEBPACK_IMPORTED_MODULE_9__["apiGetAccountNonce"])(userAccount, chainId);
                const nonce = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_nonce));
                const gasPrices = yield Object(_helpers_api__WEBPACK_IMPORTED_MODULE_9__["apiGetGasPrices"])();
                const _gasPrice = gasPrices.slow.price;
                const gasPrice = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertAmountToRawNumber"])(_gasPrice, 9)));
                const _gasLimit = 30000;
                const gasLimit = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_gasLimit));
                // const _value = 0;
                // const value = sanitizeHex(convertStringToHex(_value));
                // await this.walletConnectInit();
                let uniqueAddress = yield contractInstance.methods.approve(walletAddress, _balance).encodeABI();
                let txnObject = {
                    from: from,
                    to: to,
                    // gasPrice: gasPrice,
                    // gas: gasLimit,
                    // value: "0x0",
                    nonce: nonce,
                    data: yield uniqueAddress
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
                }
                else {
                    console.log('-------------else');
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
            }));
        });
    }
    stake(contractInstance, _balance, walletAddress, chainId, poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // _balance = _balance * 1e18;
            _balance = yield Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertAmountToRawNumber"])(_balance);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const from = walletAddress;
                const to = contractInstance['_address'];
                const _nonce = yield Object(_helpers_api__WEBPACK_IMPORTED_MODULE_9__["apiGetAccountNonce"])(walletAddress, chainId);
                const nonce = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_nonce));
                // const gasPrices = await apiGetGasPrices();
                // const _gasPrice = 100;
                // const gasPrice = sanitizeHex(convertStringToHex(convertAmountToRawNumber(_gasPrice, 9)));
                const _gasLimit = 22000;
                const gasLimit = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_gasLimit));
                let res = yield contractInstance.methods.deposit(poolId, _balance).encodeABI();
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
                }
                else {
                    reject('Please connect with wallet.');
                }
            }));
        });
    }
    //---- dn
    withdraw(contractInstance, _balance, walletAddress, chainId, poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // _balance = _balance * 1e18;
            _balance = yield Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertAmountToRawNumber"])(_balance);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const from = walletAddress;
                const to = contractInstance['_address'];
                const _nonce = yield Object(_helpers_api__WEBPACK_IMPORTED_MODULE_9__["apiGetAccountNonce"])(walletAddress, chainId);
                const nonce = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_nonce));
                // const gasPrices = await apiGetGasPrices();
                // const _gasPrice = 100;
                // const gasPrice = sanitizeHex(convertStringToHex(convertAmountToRawNumber(_gasPrice, 9)));
                const _gasLimit = 22000;
                const gasLimit = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_gasLimit));
                let res = yield contractInstance.methods.withdraw(poolId, _balance).encodeABI();
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
                }
                else {
                    reject('Please connect with wallet.');
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
            }));
        });
    }
    getReward(contractInstance, walletAddress, chainId) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const from = walletAddress;
            const to = contractInstance['_address'];
            const _nonce = yield Object(_helpers_api__WEBPACK_IMPORTED_MODULE_9__["apiGetAccountNonce"])(walletAddress, chainId);
            const nonce = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_nonce));
            // const gasPrices = await apiGetGasPrices();
            // const _gasPrice = 100;
            // const gasPrice = sanitizeHex(convertStringToHex(convertAmountToRawNumber(_gasPrice, 9)));
            // const _gasLimit = 22000;
            // const gasLimit = sanitizeHex(convertStringToHex(_gasLimit));
            let res = yield contractInstance.methods.getReward().encodeABI();
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
            }
            else {
                reject('Please connect with wallet.');
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
        }));
    }
    allowance(contractInstance, walletAddress, contractAddress) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!walletAddress) {
                console.log('Metamask/Wallet connection failed.');
                this.toaster.error('Metamask/Wallet connection failed.');
                return;
            }
            let result = yield contractInstance.methods.allowance(walletAddress, contractAddress).call({
                from: walletAddress
            });
            if (result) {
                let returnValue = (result / src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].divideValue).toFixed(10);
                resolve(returnValue);
            }
            else {
                reject('err');
            }
        }));
    }
}
ApiWalletService.ɵfac = function ApiWalletService_Factory(t) { return new (t || ApiWalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"])); };
ApiWalletService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiWalletService, factory: ApiWalletService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiWalletService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helpers_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/bignumber */ "./src/app/helpers/bignumber.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");









class ApiService {
    // ABI: any = environment.commanABI;
    constructor(route, http, toaster, router) {
        this.route = route;
        this.http = http;
        this.toaster = toaster;
        this.router = router;
        // const that = this;
        if (window.ethereum) {
            window.web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(window.web3.currentProvider);
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
                return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].main;
            }
            if (window.ethereum.chainId == "0x3") {
                return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rops;
            }
            if (window.ethereum.chainId == "0x4") {
                return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rinkeby;
            }
            if (window.ethereum.chainId == "0x5") {
                return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Goerli;
            }
            if (window.ethereum.chainId == "0x2a") {
                return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Kovan;
            }
        }
    }
    connect() {
        if (window.ethereum) {
            // commented for future use
            return new Promise((resolve, reject) => {
                let temp = window.ethereum.enable();
                if (temp) {
                    resolve(temp);
                }
                else {
                    reject('err');
                }
            });
        }
    }
    // --dn
    exportInstance(contractAddress, ABI) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new window.web3.eth.Contract(ABI, contractAddress);
        });
    }
    // --dn
    export() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                        }
                        else {
                            let account = result[0];
                            window.web3.eth.defaultAccount = account;
                            resolve(account);
                        }
                    });
                });
            }
            else {
                // this.toaster.error('No account found! Make sure the Ethereum client is configured properly. ')
            }
        });
    }
    getSelectedAddress() {
        if (window.ethereum && window.ethereum.selectedAddress) {
            return window.ethereum.selectedAddress;
        }
    }
    getBalance(userWalletAccount, contractInstance, poolId) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!userWalletAccount) {
                console.log('Metamask/Wallet connection failed.');
                this.toaster.error('Metamask/Wallet connection failed.');
                return;
            }
            let result = yield contractInstance.methods.userInfo(poolId, userWalletAccount).call({
                from: userWalletAccount
            });
            if (result) {
                resolve(result.amount / src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].divideValue);
            }
            else {
                reject('err');
            }
        }));
    }
    balanceOfMain(userWalletAccount, contractInstance) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!userWalletAccount) {
                console.log('Metamask/Wallet connection failed.');
                this.toaster.error('Metamask/Wallet connection failed.');
                return;
            }
            let result = yield contractInstance.methods.balanceOf(userWalletAccount).call({
                from: userWalletAccount
            });
            if (result) {
                resolve(result / src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].divideValue);
            }
            else {
                reject('err');
            }
        }));
    }
    earned(walletAddress, contractInstance, poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let result = yield contractInstance.methods.pendingXAntiSeal(poolId, walletAddress).call({ from: walletAddress });
                if (result) {
                    resolve(result / src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].divideValue);
                }
                else {
                    reject('err');
                }
            }));
        });
    }
    approve(contractInstance, walletAddress, _balance, userAccount, chainId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _balance = yield Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_4__["convertAmountToRawNumber"])(_balance);
            return new Promise((resolve, reject) => {
                contractInstance.methods.approve(walletAddress, _balance).send({ from: userAccount }).then((data) => {
                    if (data) {
                        resolve(data);
                    }
                }).catch((er) => {
                    if (er) {
                        reject(er);
                    }
                });
            });
        });
    }
    //-----dn
    stake(contractInstance, _balance, walletAddress, chainId, poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // _balance = _balance * 1e18;
            _balance = yield Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_4__["convertAmountToRawNumber"])(_balance);
            return new Promise((resolve, reject) => {
                contractInstance.methods.deposit(poolId, _balance).send({ from: walletAddress }).then((data) => {
                    if (data) {
                        resolve(data);
                    }
                }).catch((er) => {
                    if (er) {
                        reject(er);
                    }
                });
            });
        });
    }
    //---- dn
    withdraw(contractInstance, _balance, walletAddress, chainId, poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // _balance = _balance * 1e18;
            _balance = yield Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_4__["convertAmountToRawNumber"])(_balance);
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
                });
            });
        });
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
            });
        });
    }
    allowance(contractInstance, walletAddress, contractAddress) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!walletAddress) {
                this.toaster.error('Metamask/Wallet connection failed.');
                return;
            }
            try {
                let result = yield contractInstance.methods.allowance(walletAddress, contractAddress).call({
                    from: walletAddress
                });
                if (result) {
                    let returnValue = (result / src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].divideValue).toFixed(10);
                    resolve(returnValue);
                }
            }
            catch (error) {
                reject(0);
            }
        }));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _drainable_drainable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drainable/drainable.component */ "./src/app/drainable/drainable.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");








const routes = [{
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"] },
    { path: 'dashboard/:walletId', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'drainable/:walletId', component: _drainable_drainable_component__WEBPACK_IMPORTED_MODULE_4__["DrainableComponent"] },
    { path: 'details/:id/:walletId', component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'Anti-seal';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _drainable_drainable_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drainable/drainable.component */ "./src/app/drainable/drainable.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
                timeOut: 5000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
                enableHtml: true,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _drainable_drainable_component__WEBPACK_IMPORTED_MODULE_13__["DrainableComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                    _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _drainable_drainable_component__WEBPACK_IMPORTED_MODULE_13__["DrainableComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
                        timeOut: 5000,
                        positionClass: 'toast-top-right',
                        preventDuplicates: true,
                        enableHtml: true,
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _api_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-wallet.service */ "./src/app/api-wallet.service.ts");






class DashboardComponent {
    constructor(route, router, apiService, apiWalletService) {
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.apiWalletService = apiWalletService;
        this.checkConnected();
    }
    ngOnInit() {
    }
    checkConnected() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.walletId = this.route.snapshot.params['walletId'];
            if (this.walletId && this.walletId != undefined) {
                let idArray = ['1', '2'];
                if (!idArray.includes(this.walletId)) {
                    this.router.navigate(['/index']);
                }
                else {
                    if (this.walletId == '1') {
                        this.userAccount = yield this.apiService.export();
                        console.log('-------//-------', this.userAccount);
                        if (this.userAccount == undefined || !this.userAccount.length) {
                            this.router.navigate(['/index']);
                        }
                        else {
                            // web3Metamask Connected
                            this.wallet = 'Metamask';
                        }
                    }
                    else {
                        this.apiWalletService.getBehaviorView().subscribe((data) => {
                            if (data && data != undefined) {
                                if (data['connected'] && data['connected'] == true) {
                                    this.wallet = 'WalletConnect';
                                    this.apiWalletService.walletConnectInit();
                                }
                                else {
                                    this.router.navigate(['/index']);
                                }
                            }
                            else {
                                this.router.navigate(['/index']);
                            }
                        });
                    }
                }
            }
        });
    }
    routeToMoversPlant(pool) {
        if (this.wallet == 'Metamask') {
            this.router.navigate(['/details/' + pool + '/1']);
        }
        else if (this.wallet = 'WalletConnect') {
            this.router.navigate(['/details/' + pool + '/2']);
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_wallet_service__WEBPACK_IMPORTED_MODULE_4__["ApiWalletService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 78, vars: 0, consts: [[1, "tlp", "pt-3"], [1, "container"], [1, "f24", "text-shadow"], [1, "row"], [1, "col-6"], [1, "box"], ["src", "../../assets/images/Pair1.png", "alt", ""], [1, "f24", "text-blue"], [1, "f15", "mb-4"], [1, "f16", "text-left", "text-blue"], [1, "f36", "text-left"], ["href", "javascript:;", 1, "btn", "blue", "w-100", 3, "click"], ["src", "../../assets/images/Pair2.png", "alt", ""], [1, "sclp", "pt-3"], ["src", "../../assets/images/Pair4.png", "alt", ""], [1, "f24", "text-green"], [1, "f16", "text-left", "text-green"], ["href", "javascript:;", 1, "btn", "green", "w-100", 3, "click"], ["src", "../../assets/images/Pair5.png", "alt", ""], ["src", "../../assets/images/Pair6.png", "alt", ""]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "TOKEN LIQUIDITY POOLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "ETH-ANTISEAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "ETH-ANTISEAL UNI-V2 LP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "APY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "5000%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_16_listener() { return ctx.routeToMoversPlant("0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "SELECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "ETH-WBTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "ETH-WBTC UNI-V2 LP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "APY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "500%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_29_listener() { return ctx.routeToMoversPlant("4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "SELECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "STABLE COIN LIQUIDITY POOLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "ETH-USDT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "ETH-USDT UNI-V2 LP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "APY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "500%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_47_listener() { return ctx.routeToMoversPlant("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "SELECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "ETH-DAI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "ETH-DAI UNI-V2 LP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "APY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "500%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_60_listener() { return ctx.routeToMoversPlant("3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "SELECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "ETH-USDC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "ETH-USDC UNI-V2 LP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "APY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "500%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_76_listener() { return ctx.routeToMoversPlant("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "SELECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _api_wallet_service__WEBPACK_IMPORTED_MODULE_4__["ApiWalletService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _api_wallet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api-wallet.service */ "./src/app/api-wallet.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function DetailsComponent_button_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " APPROVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetailsComponent_button_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " APPROVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetailsComponent_button_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "STAKE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetailsComponent_button_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetailsComponent_button_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class DetailsComponent {
    constructor(router, _formBuilder, apis, _route, toaster, dtr, apiWalletService) {
        this.router = router;
        this._formBuilder = _formBuilder;
        this.apis = apis;
        this._route = _route;
        this.toaster = toaster;
        this.dtr = dtr;
        this.apiWalletService = apiWalletService;
        this.urlImage = '';
        this.showData = {
            pool: '',
            plantation: '',
            token: '',
            staked: '',
            earned: ''
        };
        this.submitted1 = false;
        this.submitted2 = false;
        this.submitted3 = false;
        this.submitted4 = false;
        this.earned = 0;
        this.balance = 0;
        this.show = 'approve';
        this.showDisabled = '';
        this.approvePopupMsg = 'Add Token';
        this.masterSeal = '';
        this.ropstanLP = {
            ANTISEALLPToken: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ANTISEALLPTokenR,
            USDTLPToken: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USDTLPTokenR,
            USDCLPToken: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USDCLPTokenR,
            DAILPToken: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DAILPTokenR,
            WBTCLPToken: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].WBTCLPTokenR,
        };
        this.mainLP = {
            ANTISEALLPToken: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ANTISEALLPTokenM,
            USDTLPToken: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USDTLPTokenM,
            USDCLPToken: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USDCLPTokenM,
            DAILPToken: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DAILPTokenM,
            WBTCLPToken: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].WBTCLPTokenM,
        };
        //----------------------main
        this.lpToken = {};
    }
    ngOnInit() {
        this.buildAddForm1();
        this.buildAddForm2();
        this.buildWithDrawForm();
        this.id = this._route.snapshot.params['id'];
        this.walletId = this._route.snapshot.params['walletId'];
        this.checkConnected(this.id, this.walletId);
    }
    buildAddForm1() {
        this.addForm1 = this._formBuilder.group({
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    buildAddForm2() {
        this.addForm2 = this._formBuilder.group({
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    buildWithDrawForm() {
        this.withDrawForm = this._formBuilder.group({
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    checkConnected(id, walletId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (id && id != undefined && walletId && walletId != undefined) {
                let walletIdArray = ['1', '2'];
                if (!walletIdArray.includes(walletId)) {
                    this.router.navigate(['/index']);
                }
                else {
                    if (walletId == '1') {
                        let idArray = ['0', '1', '2', '3', '4'];
                        if (!idArray.includes(id)) {
                            this.router.navigate(['/dashboard/' + walletId]);
                        }
                        else {
                            this.userAccount = yield this.apis.export();
                            if (this.userAccount == undefined || !this.userAccount.length) {
                                this.router.navigate(['/index']);
                            }
                            else {
                                this.networkName = yield this.apis.getNetworkName();
                                if (this.networkName == 'Ropsten') {
                                    this.lpToken = this.ropstanLP;
                                    this.masterSeal = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanContractAddressR;
                                }
                                if (this.networkName == 'Mainnet') {
                                    this.lpToken = this.mainLP;
                                    this.masterSeal = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanContractAddressM;
                                }
                                // for generate first Instance ETH_ANTISEAL_LP_TOKEN
                                if (id == '0') {
                                    // this.approvePopupMsg = 'Add Liquidity';
                                    this.urlImage = '../../assets/images/Pair1.png';
                                    this.contractInstance = yield this.apis.exportInstance(this.masterSeal, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanABI);
                                    this.contractDiffStake1Instance = yield this.apis.exportInstance(this.lpToken.ANTISEALLPToken, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenABI);
                                    let poolId = parseInt(this.id);
                                    yield this.earnedTokens(this.userAccount, this.contractInstance, this.apis, poolId);
                                    yield this.balanceOf(this.userAccount, this.contractInstance, this.apis, poolId);
                                    yield this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apis);
                                    yield this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apis);
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
                                    this.contractInstance = yield this.apis.exportInstance(this.masterSeal, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanABI);
                                    this.contractDiffStake1Instance = yield this.apis.exportInstance(this.lpToken.USDTLPToken, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenABI);
                                    yield this.earnedTokens(this.userAccount, this.contractInstance, this.apis, poolId);
                                    yield this.balanceOf(this.userAccount, this.contractInstance, this.apis, poolId);
                                    yield this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apis);
                                    yield this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apis);
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
                                    this.contractInstance = yield this.apis.exportInstance(this.masterSeal, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanABI);
                                    this.contractDiffStake1Instance = yield this.apis.exportInstance(this.lpToken.USDCLPToken, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenABI);
                                    yield this.earnedTokens(this.userAccount, this.contractInstance, this.apis, poolId);
                                    yield this.balanceOf(this.userAccount, this.contractInstance, this.apis, poolId);
                                    yield this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apis);
                                    yield this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apis);
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
                                    this.contractInstance = yield this.apis.exportInstance(this.masterSeal, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanABI);
                                    this.contractDiffStake1Instance = yield this.apis.exportInstance(this.lpToken.DAILPToken, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenABI);
                                    yield this.earnedTokens(this.userAccount, this.contractInstance, this.apis, poolId);
                                    yield this.balanceOf(this.userAccount, this.contractInstance, this.apis, poolId);
                                    yield this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apis);
                                    yield this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apis);
                                    this.showData.pool = 'STABLE COIN LIQUIDITY POOLS';
                                    ;
                                    this.showData.plantation = 'ETH-DAI';
                                    this.showData.deposit = 'ETH-DAI UNI-V2 LP';
                                    this.showData.staked = 'ETH-DAI UNI-V2 LP Staked';
                                    this.showData.earned = 'xANTI earned';
                                }
                                // for generate fifth Instance ETH_WBTC_ETH_TOKEN
                                else if (id == '4') {
                                    let poolId = parseInt(this.id);
                                    this.urlImage = '../../assets/images/Pair2.png';
                                    this.contractInstance = yield this.apis.exportInstance(this.masterSeal, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanABI);
                                    this.contractDiffStake1Instance = yield this.apis.exportInstance(this.lpToken.WBTCLPToken, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenABI);
                                    yield this.earnedTokens(this.userAccount, this.contractInstance, this.apis, poolId);
                                    yield this.balanceOf(this.userAccount, this.contractInstance, this.apis, poolId);
                                    yield this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apis);
                                    yield this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apis);
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
                        }
                        else {
                            this.apiWalletService.getBehaviorView().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                if (data && data != undefined) {
                                    if (data['connected'] && data['connected'] == true) {
                                        this.networkName = data['networkName'];
                                        this.userAccount = data['walletAddress'];
                                        this.chainId = data['chainId'];
                                        if (this.networkName == 'Ropsten') {
                                            this.masterSeal = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanContractAddressR;
                                            this.lpToken = this.ropstanLP;
                                        }
                                        if (this.networkName == 'Mainnet') {
                                            this.lpToken = this.mainLP;
                                            this.masterSeal = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanContractAddressM;
                                        }
                                        this.apiWalletService.walletConnectInit();
                                        if (id == '0') {
                                            // this.approvePopupMsg = 'Add Liquidity';
                                            this.urlImage = '../../assets/images/Pair1.png';
                                            this.contractInstance = yield this.apiWalletService.exportInstance(this.networkName, this.masterSeal, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanABI);
                                            this.contractDiffStake1Instance = yield this.apiWalletService.exportInstance(this.networkName, this.lpToken.ANTISEALLPToken, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenABI);
                                            let poolId = parseInt(this.id);
                                            yield this.earnedTokens(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                                            yield this.balanceOf(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                                            yield this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apiWalletService);
                                            yield this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apiWalletService);
                                            this.showData.pool = 'TOKEN LIQUIDITY POOLS';
                                            this.showData.plantation = 'ETH-ANTISEAL';
                                            this.showData.deposit = 'ETH-ANTISEAL UNI-V2 LP';
                                            this.showData.staked = 'ETH-ANTISEAL UNI-V2 LP Staked';
                                            this.showData.earned = 'xANTI earned';
                                        }
                                        else if (id == '1') {
                                            let poolId = parseInt(this.id);
                                            this.urlImage = '../../assets/images/Pair4.png';
                                            this.contractInstance = yield this.apiWalletService.exportInstance(this.networkName, this.masterSeal, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanABI);
                                            this.contractDiffStake1Instance = yield this.apiWalletService.exportInstance(this.networkName, this.lpToken.USDTLPToken, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenABI);
                                            yield this.earnedTokens(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                                            yield this.balanceOf(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                                            yield this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apiWalletService);
                                            yield this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apiWalletService);
                                            this.showData.pool = 'STABLE COIN LIQUIDITY POOLS';
                                            this.showData.plantation = 'ETH-USDT';
                                            this.showData.deposit = 'ETH-USDT UNI-V2 LP';
                                            this.showData.staked = 'ETH-USDT UNI-V2 LP Staked';
                                            this.showData.earned = 'xANTI earned';
                                        }
                                        else if (id == '2') {
                                            let poolId = parseInt(this.id);
                                            this.urlImage = '../../assets/images/Pair6.png';
                                            this.contractInstance = yield this.apiWalletService.exportInstance(this.networkName, this.masterSeal, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanABI);
                                            this.contractDiffStake1Instance = yield this.apiWalletService.exportInstance(this.networkName, this.lpToken.USDCLPToken, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenABI);
                                            yield this.earnedTokens(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                                            yield this.balanceOf(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                                            yield this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apiWalletService);
                                            yield this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apiWalletService);
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
                                            this.contractInstance = yield this.apiWalletService.exportInstance(this.networkName, this.masterSeal, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanABI);
                                            this.contractDiffStake1Instance = yield this.apiWalletService.exportInstance(this.networkName, this.lpToken.DAILPToken, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenABI);
                                            yield this.earnedTokens(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                                            yield this.balanceOf(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                                            yield this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apiWalletService);
                                            yield this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apiWalletService);
                                            this.showData.pool = 'STABLE COIN LIQUIDITY POOLS';
                                            ;
                                            this.showData.plantation = 'ETH-DAI';
                                            this.showData.deposit = 'ETH-DAI UNI-V2 LP';
                                            this.showData.staked = 'ETH-DAI UNI-V2 LP Staked';
                                            this.showData.earned = 'xANTI earned';
                                        }
                                        else if (id == '4') {
                                            let poolId = parseInt(this.id);
                                            this.urlImage = '../../assets/images/Pair2.png';
                                            this.contractInstance = yield this.apiWalletService.exportInstance(this.networkName, this.masterSeal, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commanABI);
                                            this.contractDiffStake1Instance = yield this.apiWalletService.exportInstance(this.networkName, this.lpToken.WBTCLPToken, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenABI);
                                            yield this.earnedTokens(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                                            yield this.balanceOf(this.userAccount, this.contractInstance, this.apiWalletService, poolId);
                                            yield this.checkBalanceOfMain(this.userAccount, this.contractDiffStake1Instance, this.apiWalletService);
                                            yield this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apiWalletService);
                                            this.showData.pool = 'TOKEN LIQUIDITY POOLS';
                                            this.showData.plantation = 'ETH-WBTC';
                                            this.showData.deposit = 'ETH-WBTC UNI-V2 LP';
                                            this.showData.staked = 'ETH-WBTC UNI-V2 LP Staked';
                                            this.showData.earned = 'xANTI earned';
                                        }
                                    }
                                    else {
                                        this.router.navigate(['/dashboard/' + walletId]);
                                    }
                                }
                                else {
                                    this.router.navigate(['/dashboard/' + walletId]);
                                }
                            }));
                        }
                    }
                }
            }
            else {
                this.router.navigate['/index'];
            }
        });
    }
    // for earned 
    earnedTokens(walletAddress, contractInstance, service, poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            service.earned(walletAddress, contractInstance, poolId).then((data) => {
                if (data) {
                    this.earned = (data).toFixed(6);
                }
            }).catch((er) => {
                this.toaster.error('there is some issue with get earned');
            });
        });
    }
    // for balance GET
    balanceOf(walletAddress, contractInstance, service, poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield service.getBalance(walletAddress, contractInstance, poolId).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data) {
                    this.balance = yield (data).toFixed(10);
                }
            })).catch((er) => {
                // err code
            });
        });
    }
    // await this.checkAllowance(this.contractDiffStake1Instance, this.userAccount, this.masterSeal, this.apis);
    // checkAllowance
    checkAllowance(contractInstance, walletAddress, contractAddress, service) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield service.allowance(contractInstance, walletAddress, contractAddress).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data && data > 0) {
                    this.addForm2.patchValue({ 'amount': data });
                    this.show = 'stake';
                }
            })).catch((er) => {
                // err code
            });
        });
    }
    // 
    checkBalanceOfMain(walletAddress, contractInstance, service) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            service.balanceOfMain(walletAddress, contractInstance).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data && data > 0) {
                    this.show = 'approve';
                }
                else {
                    this.show = '';
                }
            })).catch((er) => {
                // err code
            });
        });
    }
    // for balance balanceOfMain
    balanceOfMain(walletAddress, contractInstance, service) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            service.balanceOfMain(walletAddress, contractInstance).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data) {
                    yield this.addForm1.patchValue({ 'amount': (data).toFixed(10) });
                }
            })).catch((er) => {
                // err code
            });
        });
    }
    clickMax() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.userAccount) {
                let instance = this.contractInstance;
                let service = '';
                if (this.walletId == '1') {
                    service = this.apis;
                }
                else {
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
                yield this.balanceOfMain(this.userAccount, instance, service);
            }
        });
    }
    // for Approve
    onClickApprove() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted1 = true;
            if (this.addForm1.invalid) {
                return;
            }
            else {
                if (this.userAccount) {
                    let address = this.userAccount;
                    let instance = this.contractInstance;
                    let service = '';
                    if (this.walletId == '1') {
                        service = this.apis;
                    }
                    else {
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
                    yield service.approve(instance, address, this.addForm1.value.amount, this.userAccount, this.chainId).then((receipt) => {
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
                        }
                        else {
                            this.showDisabled = 'hide';
                            this.toaster.error(er);
                            this.addForm1.reset();
                            this.show = 'approve';
                            $('#custom1').modal('hide');
                            this.submitted1 = false;
                        }
                    });
                }
            }
        });
    }
    // for Stack
    onClickStack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted2 = true;
            if (this.addForm2.invalid) {
                return;
            }
            else {
                let instance = this.contractInstance;
                let service = '';
                if (this.walletId == '1') {
                    service = this.apis;
                }
                else {
                    service = this.apiWalletService;
                }
                this.showDisabled = 'show';
                let poolId = parseInt(this.id);
                yield service.stake(instance, this.addForm2.value.amount, this.userAccount, this.chainId, poolId).then((receipt) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (receipt) {
                        this.addForm2.reset();
                        this.show = 'approve';
                        this.showDisabled = 'hide';
                        this.submitted2 = false;
                        $('#custom2').modal('hide');
                        this.onClickRefresh();
                    }
                })).catch((er) => {
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
        });
    }
    onClickRefresh() {
        window.location.reload();
    }
    // for with draw manualy. 
    withDraw() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted3 = true;
            if (this.withDrawForm.invalid) {
                return;
            }
            else {
                this.showDisabled = 'show';
                let instance = this.contractInstance;
                let service = '';
                if (this.walletId == '1') {
                    service = this.apis;
                }
                else {
                    service = this.apiWalletService;
                }
                let poolId = parseInt(this.id);
                yield this.withdrawInside(service, instance, this.withDrawForm.value.amount, this.userAccount, this.chainId, poolId);
            }
        });
    }
    clickWithdrawMax() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.userAccount) {
                let instance = this.contractInstance;
                let poolId = parseInt(this.id);
                let service = '';
                if (this.walletId == '1') {
                    service = this.apis;
                }
                else {
                    service = this.apiWalletService;
                }
                // let data: any =   await this.earnedTokens(this.userAccount,instance,service, poolId);
                yield service.getBalance(this.userAccount, instance, poolId).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (data) {
                        yield this.withDrawForm.patchValue({ 'amount': (data).toFixed(10) });
                    }
                })).catch((er) => {
                    // err code
                });
                // let data: any = await this.apis.getBalance(this.userAccount, instance, poolId);
                // if ((data && data != undefined) || data == 0) {
                //   await this.withDrawForm.patchValue({ 'amount': data });
                // }
            }
        });
    }
    withdrawInside(service, instance, amount, userAccount, chainId, poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield service.withdraw(instance, amount, userAccount, chainId, poolId).then((receipt) => {
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
        });
    }
    getReward() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.earned && this.earned > 0) {
                if (this.userAccount) {
                    let instance = this.contractInstance;
                    let service = '';
                    if (this.walletId == '1') {
                        service = this.apis;
                    }
                    else {
                        service = this.apiWalletService;
                    }
                    yield this.getRewardInside(service, instance, this.userAccount, this.chainId);
                }
            }
            else {
                this.toaster.info('You dont have any rewards.');
            }
        });
    }
    getRewardInside(service, instance, userAccount, chainId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            service.getReward(instance, userAccount, this.chainId).then((receipt) => {
                if (receipt) {
                    this.onClickRefresh();
                }
            }).catch((er) => {
                if (er) {
                    this.toaster.error(er.message);
                }
            });
        });
    }
    goBack() {
        this.router.navigate(["/dashboard/" + this.walletId]);
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_wallet_service__WEBPACK_IMPORTED_MODULE_7__["ApiWalletService"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 101, vars: 30, consts: [[1, "pt-5", "pb-3"], [1, "container", "mxw-592"], [1, "f24", "text-shadow"], [1, "d-flex", "justify-content-end", 2, "margin-bottom", "15px"], ["href", "#", "type", "button", 1, "btn", "btn-outline-secondary", 2, "margin-right", "10px", "width", "10%", 3, "click"], ["href", "#", "type", "button", 1, "btn", "btn-outline-secondary", 2, "margin-right", "10px", "width", "15%", 3, "click"], [1, "row"], [1, "col-12"], [1, "box"], [1, "details"], [1, "col-2"], [1, "col-8"], [1, "d-flex", "align-items-center", "text-left"], ["alt", "", 3, "src"], [1, "pl-3"], [1, "f24", "text-blue"], [1, "f15", "mb-2"], [1, "f16", "text-blue"], [1, "f24"], [1, "col-6"], ["src", "../../assets/images/logo.png", "width", "48px", "alt", "", 1, "mb-2"], [1, "f28", "text-blue"], [1, "f16"], ["type", "button", "data-toggle", "modal", "data-target", "#custom3", 1, "btn", "blue", "w-100"], ["width", "85px", "alt", "", 1, "mb-2", 3, "src"], [1, "d-flex"], ["type", "button", "class", "btn blue w-100 mr-2", "data-toggle", "modal", "data-target", "#custom1", 4, "ngIf"], ["type", "button", "class", "btn blue w-100 mr-2", "data-toggle", "modal", "disabled", "true", 4, "ngIf"], ["type", "button", "class", "btn blue w-100 mr-2", "data-toggle", "modal", "data-target", "#custom2", 4, "ngIf"], ["id", "custom1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "custom1", "aria-hidden", "true", "data-backdrop", "static", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "bg-black"], [1, "modal-body"], [1, "modal-header", "m-3"], [1, "modal-title"], ["type", "button", "class", "close text-white", "data-dismiss", "modal", "aria-label", "Close", 4, "ngIf"], ["name", "addForm1", 3, "formGroup"], [1, "row", "padding-45", 2, "margin-bottom", "15px"], [1, "col-sm", "p-0"], [1, "text-center", "d-flex", "px-5"], [1, "btn", "btn-outline-secondary", "cls-b", 3, "click"], ["type", "number", "formControlName", "amount", "placeholder", "Please enter amount", 1, "form-control", 3, "ngClass"], [1, "text-center"], ["type", "button", 1, "btn", "yellow", "mb-3", 2, "width", "30%", 3, "click"], ["id", "custom2", "tabindex", "-1", "role", "dialog", "aria-labelledby", "custom2", "aria-hidden", "true", "data-backdrop", "static", 1, "modal", "fade"], ["name", "addForm2", 3, "formGroup"], ["id", "custom3", "tabindex", "-1", "role", "dialog", "aria-labelledby", "custom3", "aria-hidden", "true", "data-backdrop", "static", 1, "modal", "fade"], ["name", "withDrawForm", 3, "formGroup"], ["type", "number", "formControlName", "amount", "disabled", "true", "placeholder", "Please enter amount", 1, "form-control", 3, "ngClass"], ["type", "button", "data-toggle", "modal", "data-target", "#custom1", 1, "btn", "blue", "w-100", "mr-2"], ["type", "button", "data-toggle", "modal", "disabled", "true", 1, "btn", "blue", "w-100", "mr-2"], ["type", "button", "data-toggle", "modal", "data-target", "#custom2", 1, "btn", "blue", "w-100", "mr-2"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "text-white"], ["aria-hidden", "true"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_5_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_7_listener() { return ctx.onClickRefresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "APY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " -");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "UNSTAKE & CLAIM REWARDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, DetailsComponent_button_44_Template, 2, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, DetailsComponent_button_45_Template, 2, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, DetailsComponent_button_46_Template, 2, 0, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, DetailsComponent_button_54_Template, 3, 0, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "form", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_60_listener() { return ctx.clickMax(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Max");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_64_listener() { return ctx.onClickApprove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Approve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Add Liquidity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "form", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_80_listener() { return ctx.onClickStack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Stake");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Enter Staked Amount :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, DetailsComponent_button_89_Template, 3, 0, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "form", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_95_listener() { return ctx.clickWithdrawMax(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Max");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_99_listener() { return ctx.withDraw(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Withdraw");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showData.pool ? ctx.showData.pool : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.urlImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showData.plantation ? ctx.showData.plantation : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showData.deposit ? ctx.showData.deposit : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.earned);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showData.earned ? ctx.showData.earned : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.urlImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.balance);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showData.staked ? ctx.showData.staked : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show == "approve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show == "stake");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.approvePopupMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDisabled != "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addForm1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c0, ctx.submitted1 && ctx.addForm1.controls.amount.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.showDisabled == "show" ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addForm2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c0, ctx.submitted1 && ctx.addForm2.controls.amount.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.showDisabled == "show" ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDisabled != "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.withDrawForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c0, ctx.submitted1 && ctx.withDrawForm.controls.amount.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.showDisabled == "show" ? true : null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: [".is-invalid[_ngcontent-%COMP%]{\nborder-color: #f4516c;\nbox-shadow: 0 0 0 .2rem rgba(244, 81, 108, .25)\n}\n\n\n\n.font-change[_ngcontent-%COMP%] {\nfont-family: \"Segoe UI\";\nfont-weight: bold;\nfont-size: 15px;\ncolor: #fff;\nletter-spacing: 0.01em;\nborder: 2px solid #1d4a3c;\nmargin-right: 19px;\n}\n\n\n\n.close[_ngcontent-%COMP%]{\nposition: absolute;\ntop:10px;\nright: 14px;\n}\n\n\n\n.cls-b[_ngcontent-%COMP%]{\n    width: 15%;\n    margin-right: 20px;\n    margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7Ozs7QUFJSDtBQUNBLHFCQUFxQjtBQUVyQjtBQUNBOzs7O0FBR0E7QUFDQSx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixXQUFXO0FBQ1gsc0JBQXNCO0FBQ3RCLHlCQUF5QjtBQUN6QixrQkFBa0I7QUFDbEI7Ozs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixRQUFRO0FBQ1IsV0FBVztBQUNYOzs7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYnV0dG9uLmJ0bi5jdXN0b21fYnRuX3BvcHVwIHtcbiAgICBwYWRkaW5nOiAxM3B4IDExNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMTMzMTI3O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZDRhM2M7XG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgcGFkZGluZzogMTRweCA4MHB4O1xuICAgIH1cbn0gKi9cblxuXG5cbi5pcy1pbnZhbGlke1xuYm9yZGVyLWNvbG9yOiAjZjQ1MTZjO1xuLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAuMnJlbSByZ2JhKDI0NCwgODEsIDEwOCwgLjI1KTtcbmJveC1zaGFkb3c6IDAgMCAwIC4ycmVtIHJnYmEoMjQ0LCA4MSwgMTA4LCAuMjUpXG59XG5cblxuLmZvbnQtY2hhbmdlIHtcbmZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XG5mb250LXdlaWdodDogYm9sZDtcbmZvbnQtc2l6ZTogMTVweDtcbmNvbG9yOiAjZmZmO1xubGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbmJvcmRlcjogMnB4IHNvbGlkICMxZDRhM2M7XG5tYXJnaW4tcmlnaHQ6IDE5cHg7XG59XG4uY2xvc2V7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6MTBweDtcbnJpZ2h0OiAxNHB4O1xufVxuXG4uY2xzLWJ7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-details',
                templateUrl: './details.component.html',
                styleUrls: ['./details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _api_wallet_service__WEBPACK_IMPORTED_MODULE_7__["ApiWalletService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/drainable/drainable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/drainable/drainable.component.ts ***!
  \**************************************************/
/*! exports provided: DrainableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrainableComponent", function() { return DrainableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _api_wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-wallet.service */ "./src/app/api-wallet.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");






class DrainableComponent {
    constructor(router, route, apiService, apiWalletService, toaster) {
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.apiWalletService = apiWalletService;
        this.toaster = toaster;
    }
    ngOnInit() {
        this.walletId = this.route.snapshot.params['walletId'];
        if (this.walletId && this.walletId != undefined) {
            let idArray = ['1', '2'];
            if (!idArray.includes(this.walletId)) {
                this.router.navigate(['/index']);
            }
            else {
                if (this.walletId == '1') {
                }
                else {
                }
            }
        }
        else {
            this.router.navigate(['/index']);
        }
    }
    goToDrain() {
    }
}
DrainableComponent.ɵfac = function DrainableComponent_Factory(t) { return new (t || DrainableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_wallet_service__WEBPACK_IMPORTED_MODULE_3__["ApiWalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
DrainableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrainableComponent, selectors: [["app-drainable"]], decls: 46, vars: 0, consts: [[1, "pt-5", "pb-3"], [1, "container", "mxw-592"], [1, "text-center"], ["type", "button", 1, "btn", "blue", "px-3", "mb-4", 3, "click"], [1, "text-center", "pb-3"], [1, "form-check"], ["type", "checkbox"], [1, "f16", "text-gray"], [1, "tableBox"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "form-"], [1, "f16"], [1, "tableBody", "border-top"]], template: function DrainableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrainableComponent_Template_button_click_3_listener() { return ctx.goToDrain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Drain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Uniswap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pool Reward + Victim Reward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ETH-USDT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ETH-USDC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "ETH-DAI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ETH-WBTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyYWluYWJsZS9kcmFpbmFibGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrainableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drainable',
                templateUrl: './drainable.component.html',
                styleUrls: ['./drainable.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _api_wallet_service__WEBPACK_IMPORTED_MODULE_3__["ApiWalletService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 43, vars: 0, consts: [[1, "container"], [1, "d-flex", "py-5"], [1, "pr-3"], [1, "f22", "mb-2", "ftitle"], [1, "list-unstyled", "mb-0"], ["href", "https://t.me/ANTI_SEAL"], ["href", "https://t.me/ANTISEAL_NEWSROOM"], ["href", "https://twitter.com/ANTISEAL1"], ["href", "https://github.com/ANTISEAL"], ["src", "../../assets/images/seal-in-space.png", "alt", "", "width", "108px", 1, "order1"], [1, "pl-3"], ["href", "https://info.uniswap.org/pair/0x51c2b78e423ff673e07b1066f6448b5e91a9ee08"], ["href", "https://v2.unicrypt.network/pair/0xE95e4440493E5b96e79D63E8Dc43AB676Dd44E4C"], ["href", "https://app.uniswap.org/#/add/ETH/0xE95e4440493E5b96e79D63E8Dc43AB676Dd44E4C"], ["href", "https://etherscan.io/address/0xE95e4440493E5b96e79D63E8Dc43AB676Dd44E4C#code"], [1, "text-center", "pb-5", "copy"], [1, "f16", "text-gray"], [1, "f13", "text-gray"], [1, "f13"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SOCIAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Telegram Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Telegram Newsroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "FINANCES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Uniswap Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Liquidity Locked Tx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Provide Liquidity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Verified Contract");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u00A9 2020 ANTISEAL. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Beware of fakes, the only contract is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "0xe95e4440493e5b96e79d63e8dc43ab676dd44e4c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 0, consts: [["data-aos", "fade-in", 1, "header"], [1, "container"], [1, "d-flex", "py-4", "justify-content-center", "align-items-center"], ["href", "index.html"], ["src", "../../assets/images/logo.png", "alt", ""], [1, "pl-4"], [1, "f18", "text-shadow2"], [1, "f36", "text-shadow2"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "AntiSeal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sealed Vaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/helpers/api.ts":
/*!********************************!*\
  !*** ./src/app/helpers/api.ts ***!
  \********************************/
/*! exports provided: apiGetAccountAssets, apiGetAccountNonce, apiGetGasPrices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetAccountAssets", function() { return apiGetAccountAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetAccountNonce", function() { return apiGetAccountNonce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetGasPrices", function() { return apiGetGasPrices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const api = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: "https://ethereum-api.xyz",
    timeout: 30000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
function apiGetAccountAssets(address, chainId) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const response = yield api.get(`/account-assets?address=${address}&chainId=${chainId}`);
        const { result } = response.data;
        return result;
    });
}
const apiGetAccountNonce = (address, chainId) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const response = yield api.get(`/account-nonce?address=${address}&chainId=${chainId}`);
    const { result } = response.data;
    return result;
});
const apiGetGasPrices = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const response = yield api.get(`/gas-prices`);
    const { result } = response.data;
    return result;
});


/***/ }),

/***/ "./src/app/helpers/bignumber.ts":
/*!**************************************!*\
  !*** ./src/app/helpers/bignumber.ts ***!
  \**************************************/
/*! exports provided: convertStringToHex, convertAmountToRawNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertStringToHex", function() { return convertStringToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertAmountToRawNumber", function() { return convertAmountToRawNumber; });
/* harmony import */ var _assets_bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/bignumber.js */ "./src/assets/bignumber.js/bignumber.js");
/* harmony import */ var _assets_bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

function convertStringToHex(value) {
    return new _assets_bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(`${value}`).toString(16);
}
function convertAmountToRawNumber(value, decimals = 18) {
    return new _assets_bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(`${value}`).times(new _assets_bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a("10").pow(decimals)).toString();
}


/***/ }),

/***/ "./src/app/helpers/chains.ts":
/*!***********************************!*\
  !*** ./src/app/helpers/chains.ts ***!
  \***********************************/
/*! exports provided: SUPPORTED_CHAINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORTED_CHAINS", function() { return SUPPORTED_CHAINS; });
const SUPPORTED_CHAINS = [
    {
        name: "Mainnet",
        short_name: "eth",
        chain: "ETH",
        network: "mainnet",
        chain_id: 1,
        network_id: 1,
        rpc_url: "https://mainnet.infura.io/v3/%API_KEY%",
        native_currency: {
            symbol: "ETH",
            name: "Ether",
            decimals: "18",
            contractAddress: "",
            balance: "",
        },
    },
    {
        name: "Ropsten",
        short_name: "rop",
        chain: "ETH",
        network: "ropsten",
        chain_id: 3,
        network_id: 3,
        rpc_url: "https://ropsten.infura.io/v3/%API_KEY%",
        native_currency: {
            symbol: "ETH",
            name: "Ether",
            decimals: "18",
            contractAddress: "",
            balance: "",
        },
    },
    {
        name: "Ethereum Rinkeby",
        short_name: "rin",
        chain: "ETH",
        network: "rinkeby",
        chain_id: 4,
        network_id: 4,
        rpc_url: "https://rinkeby.infura.io/v3/%API_KEY%",
        native_currency: {
            symbol: "ETH",
            name: "Ether",
            decimals: "18",
            contractAddress: "",
            balance: "",
        },
    },
    {
        name: "Görli",
        short_name: "gor",
        chain: "ETH",
        network: "goerli",
        chain_id: 5,
        network_id: 5,
        rpc_url: "https://goerli.infura.io/v3/%API_KEY%",
        native_currency: {
            symbol: "ETH",
            name: "Ether",
            decimals: "18",
            contractAddress: "",
            balance: "",
        },
    },
    {
        name: "RSK Mainnet",
        short_name: "rsk",
        chain: "RSK",
        network: "mainnet",
        chain_id: 30,
        network_id: 30,
        rpc_url: "https://public-node.rsk.co",
        native_currency: {
            symbol: "RSK",
            name: "RSK",
            decimals: "18",
            contractAddress: "",
            balance: "",
        },
    },
    {
        name: "Ethereum Kovan",
        short_name: "kov",
        chain: "ETH",
        network: "kovan",
        chain_id: 42,
        network_id: 42,
        rpc_url: "https://kovan.infura.io/v3/%API_KEY%",
        native_currency: {
            symbol: "ETH",
            name: "Ether",
            decimals: "18",
            contractAddress: "",
            balance: "",
        },
    },
    {
        name: "Ethereum Classic Mainnet",
        short_name: "etc",
        chain: "ETC",
        network: "mainnet",
        chain_id: 61,
        network_id: 1,
        rpc_url: "https://ethereumclassic.network",
        native_currency: {
            symbol: "ETH",
            name: "Ether Classic",
            decimals: "18",
            contractAddress: "",
            balance: "",
        },
    },
    {
        name: "POA Network Sokol",
        short_name: "poa",
        chain: "POA",
        network: "sokol",
        chain_id: 77,
        network_id: 77,
        rpc_url: "https://sokol.poa.network",
        native_currency: {
            symbol: "POA",
            name: "POA",
            decimals: "18",
            contractAddress: "",
            balance: "",
        },
    },
    {
        name: "POA Network Core",
        short_name: "skl",
        chain: "POA",
        network: "core",
        chain_id: 99,
        network_id: 99,
        rpc_url: "https://core.poa.network",
        native_currency: {
            symbol: "POA",
            name: "POA",
            decimals: "18",
            contractAddress: "",
            balance: "",
        },
    },
    {
        name: "xDAI Chain",
        short_name: "xdai",
        chain: "POA",
        network: "dai",
        chain_id: 100,
        network_id: 100,
        rpc_url: "https://dai.poa.network",
        native_currency: {
            symbol: "xDAI",
            name: "xDAI",
            decimals: "18",
            contractAddress: "",
            balance: "",
        },
    },
    {
        name: "Callisto Mainnet",
        short_name: "clo",
        chain: "callisto",
        network: "mainnet",
        chain_id: 820,
        network_id: 1,
        rpc_url: "https://clo-geth.0xinfra.com/",
        native_currency: {
            symbol: "CLO",
            name: "CLO",
            decimals: "18",
            contractAddress: "",
            balance: "",
        },
    },
];


/***/ }),

/***/ "./src/app/helpers/utils.ts":
/*!**********************************!*\
  !*** ./src/app/helpers/utils.ts ***!
  \**********************************/
/*! exports provided: getChainData, sanitizeHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChainData", function() { return getChainData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeHex", function() { return sanitizeHex; });
/* harmony import */ var _chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chains */ "./src/app/helpers/chains.ts");

function getChainData(chainId) {
    const chainData = _chains__WEBPACK_IMPORTED_MODULE_0__["SUPPORTED_CHAINS"].filter((chain) => chain.chain_id === chainId)[0];
    if (!chainData) {
        throw new Error("ChainId missing or not supported");
    }
    const API_KEY = "ANGULAR_APP_INFURA_PROJECT_ID";
    if (chainData.rpc_url.includes("infura.io") &&
        chainData.rpc_url.includes("%API_KEY%") &&
        API_KEY) {
        const rpcUrl = chainData.rpc_url.replace("%API_KEY%", API_KEY);
        return Object.assign(Object.assign({}, chainData), { rpc_url: rpcUrl });
    }
    return chainData;
}
function sanitizeHex(hex) {
    hex = hex.substring(0, 2) === "0x" ? hex.substring(2) : hex;
    if (hex === "") {
        return "";
    }
    hex = hex.length % 2 !== 0 ? "0" + hex : hex;
    return "0x" + hex;
}


/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _api_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-wallet.service */ "./src/app/api-wallet.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");







class IndexComponent {
    constructor(router, route, apiService, apiWalletService, toaster) {
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.apiWalletService = apiWalletService;
        this.toaster = toaster;
        this.login = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userAccount = yield this.apiService.export();
            if (this.userAccount != undefined && this.userAccount && this.userAccount.length) {
                this.login = true;
            }
            else {
                this.login = false;
            }
        });
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
        });
    }
    connectToWalletConnect() {
        console.log(this.route);
        this.apiWalletService.walletConnectInit();
        this.apiWalletService.getOnConnectBehaviorView().subscribe((data) => {
            if (data && data != undefined) {
                if (data['connected']) {
                    $('#UnlockWallet').modal('hide');
                    this.router.navigate(["/dashboard/2"]);
                }
                else {
                    $('#UnlockWallet').modal('hide');
                }
            }
        });
    }
    goToSelectfarm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userAccount = yield this.apiService.export();
            if (this.userAccount != undefined && this.userAccount && (this.userAccount.length)) {
                this.toaster.info('Already wallet Connected');
                this.router.navigate(['/dashboard/1']);
            }
            else {
                this.apiWalletService.getBehaviorView().subscribe((data) => {
                    if (data && data != undefined) {
                        if (data['connected']) {
                            this.userAccount = data['walletAddress'];
                            this.router.navigate(['/dashboard/2']);
                        }
                        else {
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
                });
            }
        });
    }
    goToDrain() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userAccount = yield this.apiService.export();
            if (this.userAccount != undefined && this.userAccount && (this.userAccount.length)) {
                this.toaster.info('Already wallet Connected');
                this.router.navigate(['/drainable/1']);
            }
            else {
                this.apiWalletService.getBehaviorView().subscribe((data) => {
                    if (data && data != undefined) {
                        if (data['connected']) {
                            this.userAccount = data['walletAddress'];
                            this.router.navigate(['/drainable/2']);
                        }
                        else {
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
                });
            }
        });
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_wallet_service__WEBPACK_IMPORTED_MODULE_4__["ApiWalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 43, vars: 0, consts: [[1, "pt-5", "pb-3"], [1, "container", "mxw-592"], [1, "text-center"], ["type", "button", "data-toggle", "modal", "data-target", "#UnlockWallet", 1, "btn", "blue", "px-3", "mb-4"], ["type", "button", 1, "btn", "blue", "px-3", "mb-4", 3, "click"], ["src", "https://pbs.twimg.com/profile_banners/1318262164029952001/1603364857/600x200"], ["id", "UnlockWallet", "tabindex", "-1", "role", "dialog", "aria-labelledby", "UnlockWallet", "aria-hidden", "true", "data-backdrop", "static", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "bg-black"], [1, "modal-body"], [1, "modal-title", "text-center"], [1, "row", "align-items-end"], [1, "col-md-6"], ["src", "../../assets/images/metamask.svg", "width", "100px", "alt", "place_holder", 1, "place_holder", "mt-4"], [1, "contain"], [1, "f28", "my-4"], ["type", "button", 1, "btn", "yellow", "w-100", "mb-3", 3, "click"], ["src", "../../assets/images/wallet-connect.svg", "width", "100px", "alt", "place_holder", 1, "place_holder", "mt-4"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-secondary", "w-50", "m-auto"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\uD83D\uDD13 UNLOCK WALLET");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_6_listener() { return ctx.goToSelectfarm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Deposit LP tokens into a Sealed Vault to receive xANTI.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " You can obtain liquidity pool tokens for ANTISEAL-ETH here:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " https://app.uniswap.org/#/add/ETH/0xE95e4440493E5b96e79D63E8Dc43AB676Dd44E4C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Select a wallet provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Metamask");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_30_listener() { return ctx.connectToMetaMask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Wallet Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_38_listener() { return ctx.connectToWalletConnect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _api_wallet_service__WEBPACK_IMPORTED_MODULE_4__["ApiWalletService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/bignumber.js/bignumber.js":
/*!**********************************************!*\
  !*** ./src/assets/bignumber.js/bignumber.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function (globalObject) {
  'use strict';

/*
 *      bignumber.js v9.0.1
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */


  var BigNumber,
    isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    mathceil = Math.ceil,
    mathfloor = Math.floor,

    bignumberError = '[BigNumber Error] ',
    tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

    BASE = 1e14,
    LOG_BASE = 14,
    MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
    // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
    SQRT_BASE = 1e7,

    // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1E9;                                   // 0 to MAX_INT32


  /*
   * Create and return a BigNumber constructor.
   */
  function clone(configObject) {
    var div, convertBase, parseNumeric,
      P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
      ONE = new BigNumber(1),


      //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


      // The default values below must be integers within the inclusive ranges stated.
      // The values can also be changed at run-time using BigNumber.set.

      // The maximum number of decimal places for operations involving division.
      DECIMAL_PLACES = 20,                     // 0 to MAX

      // The rounding mode used when rounding to the above decimal places, and when using
      // toExponential, toFixed, toFormat and toPrecision, and round (default value).
      // UP         0 Away from zero.
      // DOWN       1 Towards zero.
      // CEIL       2 Towards +Infinity.
      // FLOOR      3 Towards -Infinity.
      // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      ROUNDING_MODE = 4,                       // 0 to 8

      // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

      // The exponent value at and beneath which toString returns exponential notation.
      // Number type: -7
      TO_EXP_NEG = -7,                         // 0 to -MAX

      // The exponent value at and above which toString returns exponential notation.
      // Number type: 21
      TO_EXP_POS = 21,                         // 0 to MAX

      // RANGE : [MIN_EXP, MAX_EXP]

      // The minimum exponent value, beneath which underflow to zero occurs.
      // Number type: -324  (5e-324)
      MIN_EXP = -1e7,                          // -1 to -MAX

      // The maximum exponent value, above which overflow to Infinity occurs.
      // Number type:  308  (1.7976931348623157e+308)
      // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
      MAX_EXP = 1e7,                           // 1 to MAX

      // Whether to use cryptographically-secure random number generation, if available.
      CRYPTO = false,                          // true or false

      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP        0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN      1 The remainder has the same sign as the dividend.
      //             This modulo mode is commonly known as 'truncated division' and is
      //             equivalent to (a % n) in JavaScript.
      // FLOOR     3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
      // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
      //             The remainder is always positive.
      //
      // The truncated division, floored division, Euclidian division and IEEE 754 remainder
      // modes are commonly used for the modulus operation.
      // Although the other rounding modes can also be used, they may not give useful results.
      MODULO_MODE = 1,                         // 0 to 9

      // The maximum number of significant digits of the result of the exponentiatedBy operation.
      // If POW_PRECISION is 0, there will be unlimited significant digits.
      POW_PRECISION = 0,                    // 0 to MAX

      // The format specification used by the BigNumber.prototype.toFormat method.
      FORMAT = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',      // non-breaking space
        suffix: ''
      },

      // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
      // '-', '.', whitespace, or repeated character.
      // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
      ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';


    //------------------------------------------------------------------------------------------


    // CONSTRUCTOR


    /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */
    function BigNumber(v, b) {
      var alphabet, c, caseChanged, e, i, isNum, len, str,
        x = this;

      // Enable constructor call without `new`.
      if (!(x instanceof BigNumber)) return new BigNumber(v, b);

      if (b == null) {

        if (v && v._isBigNumber === true) {
          x.s = v.s;

          if (!v.c || v.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (v.e < MIN_EXP) {
            x.c = [x.e = 0];
          } else {
            x.e = v.e;
            x.c = v.c.slice();
          }

          return;
        }

        if ((isNum = typeof v == 'number') && v * 0 == 0) {

          // Use `1 / n` to handle minus zero also.
          x.s = 1 / v < 0 ? (v = -v, -1) : 1;

          // Fast path for integers, where n < 2147483648 (2**31).
          if (v === ~~v) {
            for (e = 0, i = v; i >= 10; i /= 10, e++);

            if (e > MAX_EXP) {
              x.c = x.e = null;
            } else {
              x.e = e;
              x.c = [v];
            }

            return;
          }

          str = String(v);
        } else {

          if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

          x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
        }

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

        // Exponential form?
        if ((i = str.search(/e/i)) > 0) {

          // Determine exponent.
          if (e < 0) e = i;
          e += +str.slice(i + 1);
          str = str.substring(0, i);
        } else if (e < 0) {

          // Integer.
          e = str.length;
        }

      } else {

        // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
        intCheck(b, 2, ALPHABET.length, 'Base');

        // Allow exponential notation to be used with base 10 argument, while
        // also rounding to DECIMAL_PLACES as with other bases.
        if (b == 10) {
          x = new BigNumber(v);
          return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
        }

        str = String(v);

        if (isNum = typeof v == 'number') {

          // Avoid potential interpretation of Infinity and NaN as base 44+ values.
          if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

          x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

          // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
          if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
            throw Error
             (tooManyDigits + v);
          }
        } else {
          x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
        }

        alphabet = ALPHABET.slice(0, b);
        e = i = 0;

        // Check that str is a valid base b number.
        // Don't use RegExp, so alphabet can contain special characters.
        for (len = str.length; i < len; i++) {
          if (alphabet.indexOf(c = str.charAt(i)) < 0) {
            if (c == '.') {

              // If '.' is not the first character and it has not be found before.
              if (i > e) {
                e = len;
                continue;
              }
            } else if (!caseChanged) {

              // Allow e.g. hexadecimal 'FF' as well as 'ff'.
              if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                  str == str.toLowerCase() && (str = str.toUpperCase())) {
                caseChanged = true;
                i = -1;
                e = 0;
                continue;
              }
            }

            return parseNumeric(x, String(v), isNum, b);
          }
        }

        // Prevent later check for length on converted number.
        isNum = false;
        str = convertBase(str, b, 10, x.s);

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
        else e = str.length;
      }

      // Determine leading zeros.
      for (i = 0; str.charCodeAt(i) === 48; i++);

      // Determine trailing zeros.
      for (len = str.length; str.charCodeAt(--len) === 48;);

      if (str = str.slice(i, ++len)) {
        len -= i;

        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
        if (isNum && BigNumber.DEBUG &&
          len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
            throw Error
             (tooManyDigits + (x.s * v));
        }

         // Overflow?
        if ((e = e - i - 1) > MAX_EXP) {

          // Infinity.
          x.c = x.e = null;

        // Underflow?
        } else if (e < MIN_EXP) {

          // Zero.
          x.c = [x.e = 0];
        } else {
          x.e = e;
          x.c = [];

          // Transform base

          // e is the base 10 exponent.
          // i is where to slice str to get the first element of the coefficient array.
          i = (e + 1) % LOG_BASE;
          if (e < 0) i += LOG_BASE;  // i < 1

          if (i < len) {
            if (i) x.c.push(+str.slice(0, i));

            for (len -= LOG_BASE; i < len;) {
              x.c.push(+str.slice(i, i += LOG_BASE));
            }

            i = LOG_BASE - (str = str.slice(i)).length;
          } else {
            i -= len;
          }

          for (; i--; str += '0');
          x.c.push(+str);
        }
      } else {

        // Zero.
        x.c = [x.e = 0];
      }
    }


    // CONSTRUCTOR PROPERTIES


    BigNumber.clone = clone;

    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.EUCLID = 9;


    /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */
    BigNumber.config = BigNumber.set = function (obj) {
      var p, v;

      if (obj != null) {

        if (typeof obj == 'object') {

          // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            DECIMAL_PLACES = v;
          }

          // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
          // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
            v = obj[p];
            intCheck(v, 0, 8, p);
            ROUNDING_MODE = v;
          }

          // EXPONENTIAL_AT {number|number[]}
          // Integer, -MAX to MAX inclusive or
          // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
          // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, 0, p);
              intCheck(v[1], 0, MAX, p);
              TO_EXP_NEG = v[0];
              TO_EXP_POS = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
            }
          }

          // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
          // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
          // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
          if (obj.hasOwnProperty(p = 'RANGE')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, -1, p);
              intCheck(v[1], 1, MAX, p);
              MIN_EXP = v[0];
              MAX_EXP = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              if (v) {
                MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
              } else {
                throw Error
                 (bignumberError + p + ' cannot be zero: ' + v);
              }
            }
          }

          // CRYPTO {boolean} true or false.
          // '[BigNumber Error] CRYPTO not true or false: {v}'
          // '[BigNumber Error] crypto unavailable'
          if (obj.hasOwnProperty(p = 'CRYPTO')) {
            v = obj[p];
            if (v === !!v) {
              if (v) {
                if (typeof crypto != 'undefined' && crypto &&
                 (crypto.getRandomValues || crypto.randomBytes)) {
                  CRYPTO = v;
                } else {
                  CRYPTO = !v;
                  throw Error
                   (bignumberError + 'crypto unavailable');
                }
              } else {
                CRYPTO = v;
              }
            } else {
              throw Error
               (bignumberError + p + ' not true or false: ' + v);
            }
          }

          // MODULO_MODE {number} Integer, 0 to 9 inclusive.
          // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
            v = obj[p];
            intCheck(v, 0, 9, p);
            MODULO_MODE = v;
          }

          // POW_PRECISION {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            POW_PRECISION = v;
          }

          // FORMAT {object}
          // '[BigNumber Error] FORMAT not an object: {v}'
          if (obj.hasOwnProperty(p = 'FORMAT')) {
            v = obj[p];
            if (typeof v == 'object') FORMAT = v;
            else throw Error
             (bignumberError + p + ' not an object: ' + v);
          }

          // ALPHABET {string}
          // '[BigNumber Error] ALPHABET invalid: {v}'
          if (obj.hasOwnProperty(p = 'ALPHABET')) {
            v = obj[p];

            // Disallow if less than two characters,
            // or if it contains '+', '-', '.', whitespace, or a repeated character.
            if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
              ALPHABET = v;
            } else {
              throw Error
               (bignumberError + p + ' invalid: ' + v);
            }
          }

        } else {

          // '[BigNumber Error] Object expected: {v}'
          throw Error
           (bignumberError + 'Object expected: ' + obj);
        }
      }

      return {
        DECIMAL_PLACES: DECIMAL_PLACES,
        ROUNDING_MODE: ROUNDING_MODE,
        EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
        RANGE: [MIN_EXP, MAX_EXP],
        CRYPTO: CRYPTO,
        MODULO_MODE: MODULO_MODE,
        POW_PRECISION: POW_PRECISION,
        FORMAT: FORMAT,
        ALPHABET: ALPHABET
      };
    };


    /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */
    BigNumber.isBigNumber = function (v) {
      if (!v || v._isBigNumber !== true) return false;
      if (!BigNumber.DEBUG) return true;

      var i, n,
        c = v.c,
        e = v.e,
        s = v.s;

      out: if ({}.toString.call(c) == '[object Array]') {

        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

          // If the first element is zero, the BigNumber value must be zero.
          if (c[0] === 0) {
            if (e === 0 && c.length === 1) return true;
            break out;
          }

          // Calculate number of digits that c[0] should have, based on the exponent.
          i = (e + 1) % LOG_BASE;
          if (i < 1) i += LOG_BASE;

          // Calculate number of digits of c[0].
          //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
          if (String(c[0]).length == i) {

            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
            }

            // Last element cannot be zero, unless it is the only element.
            if (n !== 0) return true;
          }
        }

      // Infinity/NaN
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }

      throw Error
        (bignumberError + 'Invalid BigNumber: ' + v);
    };


    /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.maximum = BigNumber.max = function () {
      return maxOrMin(arguments, P.lt);
    };


    /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.minimum = BigNumber.min = function () {
      return maxOrMin(arguments, P.gt);
    };


    /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */
    BigNumber.random = (function () {
      var pow2_53 = 0x20000000000000;

      // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
      // Check if Math.random() produces more than 32 bits of randomness.
      // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
      // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
      var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
       ? function () { return mathfloor(Math.random() * pow2_53); }
       : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
         (Math.random() * 0x800000 | 0); };

      return function (dp) {
        var a, b, e, k, v,
          i = 0,
          c = [],
          rand = new BigNumber(ONE);

        if (dp == null) dp = DECIMAL_PLACES;
        else intCheck(dp, 0, MAX);

        k = mathceil(dp / LOG_BASE);

        if (CRYPTO) {

          // Browsers supporting crypto.getRandomValues.
          if (crypto.getRandomValues) {

            a = crypto.getRandomValues(new Uint32Array(k *= 2));

            for (; i < k;) {

              // 53 bits:
              // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
              // 11111 11111111 11111111 11111111 11100000 00000000 00000000
              // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
              //                                     11111 11111111 11111111
              // 0x20000 is 2^21.
              v = a[i] * 0x20000 + (a[i + 1] >>> 11);

              // Rejection sampling:
              // 0 <= v < 9007199254740992
              // Probability that v >= 9e15, is
              // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
              if (v >= 9e15) {
                b = crypto.getRandomValues(new Uint32Array(2));
                a[i] = b[0];
                a[i + 1] = b[1];
              } else {

                // 0 <= v <= 8999999999999999
                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 2;
              }
            }
            i = k / 2;

          // Node.js supporting crypto.randomBytes.
          } else if (crypto.randomBytes) {

            // buffer
            a = crypto.randomBytes(k *= 7);

            for (; i < k;) {

              // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
              // 0x100000000 is 2^32, 0x1000000 is 2^24
              // 11111 11111111 11111111 11111111 11111111 11111111 11111111
              // 0 <= v < 9007199254740992
              v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                 (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                 (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

              if (v >= 9e15) {
                crypto.randomBytes(7).copy(a, i);
              } else {

                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 7;
              }
            }
            i = k / 7;
          } else {
            CRYPTO = false;
            throw Error
             (bignumberError + 'crypto unavailable');
          }
        }

        // Use Math.random.
        if (!CRYPTO) {

          for (; i < k;) {
            v = random53bitInt();
            if (v < 9e15) c[i++] = v % 1e14;
          }
        }

        k = c[--i];
        dp %= LOG_BASE;

        // Convert trailing digits to zeros according to dp.
        if (k && dp) {
          v = POWS_TEN[LOG_BASE - dp];
          c[i] = mathfloor(k / v) * v;
        }

        // Remove trailing elements which are zero.
        for (; c[i] === 0; c.pop(), i--);

        // Zero?
        if (i < 0) {
          c = [e = 0];
        } else {

          // Remove leading elements which are zero and adjust exponent accordingly.
          for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

          // Count the digits of the first element of c to determine leading zeros, and...
          for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

          // adjust the exponent accordingly.
          if (i < LOG_BASE) e -= LOG_BASE - i;
        }

        rand.e = e;
        rand.c = c;
        return rand;
      };
    })();


    /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.sum = function () {
      var i = 1,
        args = arguments,
        sum = new BigNumber(args[0]);
      for (; i < args.length;) sum = sum.plus(args[i++]);
      return sum;
    };


    // PRIVATE FUNCTIONS


    // Called by BigNumber and BigNumber.prototype.toString.
    convertBase = (function () {
      var decimal = '0123456789';

      /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */
      function toBaseOut(str, baseIn, baseOut, alphabet) {
        var j,
          arr = [0],
          arrL,
          i = 0,
          len = str.length;

        for (; i < len;) {
          for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

          arr[0] += alphabet.indexOf(str.charAt(i++));

          for (j = 0; j < arr.length; j++) {

            if (arr[j] > baseOut - 1) {
              if (arr[j + 1] == null) arr[j + 1] = 0;
              arr[j + 1] += arr[j] / baseOut | 0;
              arr[j] %= baseOut;
            }
          }
        }

        return arr.reverse();
      }

      // Convert a numeric string of baseIn to a numeric string of baseOut.
      // If the caller is toString, we are converting from base 10 to baseOut.
      // If the caller is BigNumber, we are converting from baseIn to base 10.
      return function (str, baseIn, baseOut, sign, callerIsToString) {
        var alphabet, d, e, k, r, x, xc, y,
          i = str.indexOf('.'),
          dp = DECIMAL_PLACES,
          rm = ROUNDING_MODE;

        // Non-integer.
        if (i >= 0) {
          k = POW_PRECISION;

          // Unlimited precision.
          POW_PRECISION = 0;
          str = str.replace('.', '');
          y = new BigNumber(baseIn);
          x = y.pow(str.length - i);
          POW_PRECISION = k;

          // Convert str as if an integer, then restore the fraction part by dividing the
          // result by its base raised to a power.

          y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
           10, baseOut, decimal);
          y.e = y.c.length;
        }

        // Convert the number as integer.

        xc = toBaseOut(str, baseIn, baseOut, callerIsToString
         ? (alphabet = ALPHABET, decimal)
         : (alphabet = decimal, ALPHABET));

        // xc now represents str as an integer and converted to baseOut. e is the exponent.
        e = k = xc.length;

        // Remove trailing zeros.
        for (; xc[--k] == 0; xc.pop());

        // Zero?
        if (!xc[0]) return alphabet.charAt(0);

        // Does str represent an integer? If so, no need for the division.
        if (i < 0) {
          --e;
        } else {
          x.c = xc;
          x.e = e;

          // The sign is needed for correct rounding.
          x.s = sign;
          x = div(x, y, dp, rm, baseOut);
          xc = x.c;
          r = x.r;
          e = x.e;
        }

        // xc now represents str converted to baseOut.

        // THe index of the rounding digit.
        d = e + dp + 1;

        // The rounding digit: the digit to the right of the digit that may be rounded up.
        i = xc[d];

        // Look at the rounding digits and mode to determine whether to round up.

        k = baseOut / 2;
        r = r || d < 0 || xc[d + 1] != null;

        r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
              : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
               rm == (x.s < 0 ? 8 : 7));

        // If the index of the rounding digit is not greater than zero, or xc represents
        // zero, then the result of the base conversion is zero or, if rounding up, a value
        // such as 0.00001.
        if (d < 1 || !xc[0]) {

          // 1^-dp or 0
          str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
        } else {

          // Truncate xc to the required number of decimal places.
          xc.length = d;

          // Round up?
          if (r) {

            // Rounding up may mean the previous digit has to be rounded up and so on.
            for (--baseOut; ++xc[--d] > baseOut;) {
              xc[d] = 0;

              if (!d) {
                ++e;
                xc = [1].concat(xc);
              }
            }
          }

          // Determine trailing zeros.
          for (k = xc.length; !xc[--k];);

          // E.g. [4, 11, 15] becomes 4bf.
          for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

          // Add leading zeros, decimal point and trailing zeros as required.
          str = toFixedPoint(str, e, alphabet.charAt(0));
        }

        // The caller will add the sign.
        return str;
      };
    })();


    // Perform division in the specified base. Called by div and convertBase.
    div = (function () {

      // Assume non-zero x and k.
      function multiply(x, k, base) {
        var m, temp, xlo, xhi,
          carry = 0,
          i = x.length,
          klo = k % SQRT_BASE,
          khi = k / SQRT_BASE | 0;

        for (x = x.slice(); i--;) {
          xlo = x[i] % SQRT_BASE;
          xhi = x[i] / SQRT_BASE | 0;
          m = khi * xlo + xhi * klo;
          temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
          carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
          x[i] = temp % base;
        }

        if (carry) x = [carry].concat(x);

        return x;
      }

      function compare(a, b, aL, bL) {
        var i, cmp;

        if (aL != bL) {
          cmp = aL > bL ? 1 : -1;
        } else {

          for (i = cmp = 0; i < aL; i++) {

            if (a[i] != b[i]) {
              cmp = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }

        return cmp;
      }

      function subtract(a, b, aL, base) {
        var i = 0;

        // Subtract b from a.
        for (; aL--;) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        }

        // Remove leading zeros.
        for (; !a[0] && a.length > 1; a.splice(0, 1));
      }

      // x: dividend, y: divisor.
      return function (x, y, dp, rm, base) {
        var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
          yL, yz,
          s = x.s == y.s ? 1 : -1,
          xc = x.c,
          yc = y.c;

        // Either NaN, Infinity or 0?
        if (!xc || !xc[0] || !yc || !yc[0]) {

          return new BigNumber(

           // Return NaN if either NaN, or both Infinity or 0.
           !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
         );
        }

        q = new BigNumber(s);
        qc = q.c = [];
        e = x.e - y.e;
        s = dp + e + 1;

        if (!base) {
          base = BASE;
          e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
          s = s / LOG_BASE | 0;
        }

        // Result exponent may be one less then the current value of e.
        // The coefficients of the BigNumbers from convertBase may have trailing zeros.
        for (i = 0; yc[i] == (xc[i] || 0); i++);

        if (yc[i] > (xc[i] || 0)) e--;

        if (s < 0) {
          qc.push(1);
          more = true;
        } else {
          xL = xc.length;
          yL = yc.length;
          i = 0;
          s += 2;

          // Normalise xc and yc so highest order digit of yc is >= base / 2.

          n = mathfloor(base / (yc[0] + 1));

          // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
          // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
          if (n > 1) {
            yc = multiply(yc, n, base);
            xc = multiply(xc, n, base);
            yL = yc.length;
            xL = xc.length;
          }

          xi = yL;
          rem = xc.slice(0, yL);
          remL = rem.length;

          // Add zeros to make remainder as long as divisor.
          for (; remL < yL; rem[remL++] = 0);
          yz = yc.slice();
          yz = [0].concat(yz);
          yc0 = yc[0];
          if (yc[1] >= base / 2) yc0++;
          // Not necessary, but to prevent trial digit n > base, when using base 3.
          // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

          do {
            n = 0;

            // Compare divisor and remainder.
            cmp = compare(yc, rem, yL, remL);

            // If divisor < remainder.
            if (cmp < 0) {

              // Calculate trial digit, n.

              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              // n is how many times the divisor goes into the current remainder.
              n = mathfloor(rem0 / yc0);

              //  Algorithm:
              //  product = divisor multiplied by trial digit (n).
              //  Compare product and remainder.
              //  If product is greater than remainder:
              //    Subtract divisor from product, decrement trial digit.
              //  Subtract product from remainder.
              //  If product was less than remainder at the last compare:
              //    Compare new remainder and divisor.
              //    If remainder is greater than divisor:
              //      Subtract divisor from remainder, increment trial digit.

              if (n > 1) {

                // n may be > base only when base is 3.
                if (n >= base) n = base - 1;

                // product = divisor * trial digit.
                prod = multiply(yc, n, base);
                prodL = prod.length;
                remL = rem.length;

                // Compare product and remainder.
                // If product > remainder then trial digit n too high.
                // n is 1 too high about 5% of the time, and is not known to have
                // ever been more than 1 too high.
                while (compare(prod, rem, prodL, remL) == 1) {
                  n--;

                  // Subtract divisor from product.
                  subtract(prod, yL < prodL ? yz : yc, prodL, base);
                  prodL = prod.length;
                  cmp = 1;
                }
              } else {

                // n is 0 or 1, cmp is -1.
                // If n is 0, there is no need to compare yc and rem again below,
                // so change cmp to 1 to avoid it.
                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                if (n == 0) {

                  // divisor < remainder, so n must be at least 1.
                  cmp = n = 1;
                }

                // product = divisor
                prod = yc.slice();
                prodL = prod.length;
              }

              if (prodL < remL) prod = [0].concat(prod);

              // Subtract product from remainder.
              subtract(rem, prod, remL, base);
              remL = rem.length;

               // If product was < remainder.
              if (cmp == -1) {

                // Compare divisor and new remainder.
                // If divisor < new remainder, subtract divisor from remainder.
                // Trial digit n too low.
                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                while (compare(yc, rem, yL, remL) < 1) {
                  n++;

                  // Subtract divisor from remainder.
                  subtract(rem, yL < remL ? yz : yc, remL, base);
                  remL = rem.length;
                }
              }
            } else if (cmp === 0) {
              n++;
              rem = [0];
            } // else cmp === 1 and n will be 0

            // Add the next digit, n, to the result array.
            qc[i++] = n;

            // Update the remainder.
            if (rem[0]) {
              rem[remL++] = xc[xi] || 0;
            } else {
              rem = [xc[xi]];
              remL = 1;
            }
          } while ((xi++ < xL || rem[0] != null) && s--);

          more = rem[0] != null;

          // Leading zero?
          if (!qc[0]) qc.splice(0, 1);
        }

        if (base == BASE) {

          // To calculate q.e, first get the number of digits of qc[0].
          for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

          round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

        // Caller is convertBase.
        } else {
          q.e = e;
          q.r = +more;
        }

        return q;
      };
    })();


    /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */
    function format(n, i, rm, id) {
      var c0, e, ne, len, str;

      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      if (!n.c) return n.toString();

      c0 = n.c[0];
      ne = n.e;

      if (i == null) {
        str = coeffToString(n.c);
        str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
         ? toExponential(str, ne)
         : toFixedPoint(str, ne, '0');
      } else {
        n = round(new BigNumber(n), i, rm);

        // n.e may have changed if the value was rounded up.
        e = n.e;

        str = coeffToString(n.c);
        len = str.length;

        // toPrecision returns exponential notation if the number of significant digits
        // specified is less than the number of digits necessary to represent the integer
        // part of the value in fixed-point notation.

        // Exponential notation.
        if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

          // Append zeros?
          for (; len < i; str += '0', len++);
          str = toExponential(str, e);

        // Fixed-point notation.
        } else {
          i -= ne;
          str = toFixedPoint(str, e, '0');

          // Append zeros?
          if (e + 1 > len) {
            if (--i > 0) for (str += '.'; i--; str += '0');
          } else {
            i += e - len;
            if (i > 0) {
              if (e + 1 == len) str += '.';
              for (; i--; str += '0');
            }
          }
        }
      }

      return n.s < 0 && c0 ? '-' + str : str;
    }


    // Handle BigNumber.max and BigNumber.min.
    function maxOrMin(args, method) {
      var n,
        i = 1,
        m = new BigNumber(args[0]);

      for (; i < args.length; i++) {
        n = new BigNumber(args[i]);

        // If any number is NaN, return NaN.
        if (!n.s) {
          m = n;
          break;
        } else if (method.call(m, n)) {
          m = n;
        }
      }

      return m;
    }


    /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */
    function normalise(n, c, e) {
      var i = 1,
        j = c.length;

       // Remove trailing zeros.
      for (; !c[--j]; c.pop());

      // Calculate the base 10 exponent. First get the number of digits of c[0].
      for (j = c[0]; j >= 10; j /= 10, i++);

      // Overflow?
      if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

        // Infinity.
        n.c = n.e = null;

      // Underflow?
      } else if (e < MIN_EXP) {

        // Zero.
        n.c = [n.e = 0];
      } else {
        n.e = e;
        n.c = c;
      }

      return n;
    }


    // Handle values that fail the validity test in BigNumber.
    parseNumeric = (function () {
      var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        dotAfter = /^([^.]+)\.$/,
        dotBefore = /^\.([^.]+)$/,
        isInfinityOrNaN = /^-?(Infinity|NaN)$/,
        whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

      return function (x, str, isNum, b) {
        var base,
          s = isNum ? str : str.replace(whitespaceOrPlus, '');

        // No exception on ±Infinity or NaN.
        if (isInfinityOrNaN.test(s)) {
          x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
        } else {
          if (!isNum) {

            // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
            s = s.replace(basePrefix, function (m, p1, p2) {
              base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
              return !b || b == base ? p1 : m;
            });

            if (b) {
              base = b;

              // E.g. '1.' to '1', '.1' to '0.1'
              s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
            }

            if (str != s) return new BigNumber(s, base);
          }

          // '[BigNumber Error] Not a number: {n}'
          // '[BigNumber Error] Not a base {b} number: {n}'
          if (BigNumber.DEBUG) {
            throw Error
              (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
          }

          // NaN
          x.s = null;
        }

        x.c = x.e = null;
      }
    })();


    /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */
    function round(x, sd, rm, r) {
      var d, i, j, k, n, ni, rd,
        xc = x.c,
        pows10 = POWS_TEN;

      // if x is not Infinity or NaN...
      if (xc) {

        // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
        // n is a base 1e14 number, the value of the element of array x.c containing rd.
        // ni is the index of n within x.c.
        // d is the number of digits of n.
        // i is the index of rd within n including leading zeros.
        // j is the actual index of rd within n (if < 0, rd is a leading zero).
        out: {

          // Get the number of digits of the first element of xc.
          for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
          i = sd - d;

          // If the rounding digit is in the first element of xc...
          if (i < 0) {
            i += LOG_BASE;
            j = sd;
            n = xc[ni = 0];

            // Get the rounding digit at index j of n.
            rd = n / pows10[d - j - 1] % 10 | 0;
          } else {
            ni = mathceil((i + 1) / LOG_BASE);

            if (ni >= xc.length) {

              if (r) {

                // Needed by sqrt.
                for (; xc.length <= ni; xc.push(0));
                n = rd = 0;
                d = 1;
                i %= LOG_BASE;
                j = i - LOG_BASE + 1;
              } else {
                break out;
              }
            } else {
              n = k = xc[ni];

              // Get the number of digits of n.
              for (d = 1; k >= 10; k /= 10, d++);

              // Get the index of rd within n.
              i %= LOG_BASE;

              // Get the index of rd within n, adjusted for leading zeros.
              // The number of leading zeros of n is given by LOG_BASE - d.
              j = i - LOG_BASE + d;

              // Get the rounding digit at index j of n.
              rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
            }
          }

          r = r || sd < 0 ||

          // Are there any non-zero digits after the rounding digit?
          // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
          // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
           xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

          r = rm < 4
           ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
           : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

            // Check whether the digit to the left of the rounding digit is odd.
            ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
             rm == (x.s < 0 ? 8 : 7));

          if (sd < 1 || !xc[0]) {
            xc.length = 0;

            if (r) {

              // Convert sd to decimal places.
              sd -= x.e + 1;

              // 1, 0.1, 0.01, 0.001, 0.0001 etc.
              xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
              x.e = -sd || 0;
            } else {

              // Zero.
              xc[0] = x.e = 0;
            }

            return x;
          }

          // Remove excess digits.
          if (i == 0) {
            xc.length = ni;
            k = 1;
            ni--;
          } else {
            xc.length = ni + 1;
            k = pows10[LOG_BASE - i];

            // E.g. 56700 becomes 56000 if 7 is the rounding digit.
            // j > 0 means i > number of leading zeros of n.
            xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
          }

          // Round up?
          if (r) {

            for (; ;) {

              // If the digit to be rounded up is in the first element of xc...
              if (ni == 0) {

                // i will be the length of xc[0] before k is added.
                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                j = xc[0] += k;
                for (k = 1; j >= 10; j /= 10, k++);

                // if i != k the length has increased.
                if (i != k) {
                  x.e++;
                  if (xc[0] == BASE) xc[0] = 1;
                }

                break;
              } else {
                xc[ni] += k;
                if (xc[ni] != BASE) break;
                xc[ni--] = 0;
                k = 1;
              }
            }
          }

          // Remove trailing zeros.
          for (i = xc.length; xc[--i] === 0; xc.pop());
        }

        // Overflow? Infinity.
        if (x.e > MAX_EXP) {
          x.c = x.e = null;

        // Underflow? Zero.
        } else if (x.e < MIN_EXP) {
          x.c = [x.e = 0];
        }
      }

      return x;
    }


    function valueOf(n) {
      var str,
        e = n.e;

      if (e === null) return n.toString();

      str = coeffToString(n.c);

      str = e <= TO_EXP_NEG || e >= TO_EXP_POS
        ? toExponential(str, e)
        : toFixedPoint(str, e, '0');

      return n.s < 0 ? '-' + str : str;
    }


    // PROTOTYPE/INSTANCE METHODS


    /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */
    P.absoluteValue = P.abs = function () {
      var x = new BigNumber(this);
      if (x.s < 0) x.s = 1;
      return x;
    };


    /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */
    P.comparedTo = function (y, b) {
      return compare(this, new BigNumber(y, b));
    };


    /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.decimalPlaces = P.dp = function (dp, rm) {
      var c, n, v,
        x = this;

      if (dp != null) {
        intCheck(dp, 0, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), dp + x.e + 1, rm);
      }

      if (!(c = x.c)) return null;
      n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

      // Subtract the number of trailing zeros of the last number.
      if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
      if (n < 0) n = 0;

      return n;
    };


    /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.dividedBy = P.div = function (y, b) {
      return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
    };


    /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */
    P.dividedToIntegerBy = P.idiv = function (y, b) {
      return div(this, new BigNumber(y, b), 0, 1);
    };


    /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */
    P.exponentiatedBy = P.pow = function (n, m) {
      var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
        x = this;

      n = new BigNumber(n);

      // Allow NaN and ±Infinity, but not other non-integers.
      if (n.c && !n.isInteger()) {
        throw Error
          (bignumberError + 'Exponent not an integer: ' + valueOf(n));
      }

      if (m != null) m = new BigNumber(m);

      // Exponent of MAX_SAFE_INTEGER is 15.
      nIsBig = n.e > 14;

      // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
      if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

        // The sign of the result of pow when x is negative depends on the evenness of n.
        // If +n overflows to ±Infinity, the evenness of n would be not be known.
        y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
        return m ? y.mod(m) : y;
      }

      nIsNeg = n.s < 0;

      if (m) {

        // x % m returns NaN if abs(m) is zero, or m is NaN.
        if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

        isModExp = !nIsNeg && x.isInteger() && m.isInteger();

        if (isModExp) x = x.mod(m);

      // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
      // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
      } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
        // [1, 240000000]
        ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
        // [80000000000000]  [99999750000000]
        : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

        // If x is negative and n is odd, k = -0, else k = 0.
        k = x.s < 0 && isOdd(n) ? -0 : 0;

        // If x >= 1, k = ±Infinity.
        if (x.e > -1) k = 1 / k;

        // If n is negative return ±0, else return ±Infinity.
        return new BigNumber(nIsNeg ? 1 / k : k);

      } else if (POW_PRECISION) {

        // Truncating each coefficient array to a length of k after each multiplication
        // equates to truncating significant digits to POW_PRECISION + [28, 41],
        // i.e. there will be a minimum of 28 guard digits retained.
        k = mathceil(POW_PRECISION / LOG_BASE + 2);
      }

      if (nIsBig) {
        half = new BigNumber(0.5);
        if (nIsNeg) n.s = 1;
        nIsOdd = isOdd(n);
      } else {
        i = Math.abs(+valueOf(n));
        nIsOdd = i % 2;
      }

      y = new BigNumber(ONE);

      // Performs 54 loop iterations for n of 9007199254740991.
      for (; ;) {

        if (nIsOdd) {
          y = y.times(x);
          if (!y.c) break;

          if (k) {
            if (y.c.length > k) y.c.length = k;
          } else if (isModExp) {
            y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
          }
        }

        if (i) {
          i = mathfloor(i / 2);
          if (i === 0) break;
          nIsOdd = i % 2;
        } else {
          n = n.times(half);
          round(n, n.e + 1, 1);

          if (n.e > 14) {
            nIsOdd = isOdd(n);
          } else {
            i = +valueOf(n);
            if (i === 0) break;
            nIsOdd = i % 2;
          }
        }

        x = x.times(x);

        if (k) {
          if (x.c && x.c.length > k) x.c.length = k;
        } else if (isModExp) {
          x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
        }
      }

      if (isModExp) return y;
      if (nIsNeg) y = ONE.div(y);

      return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */
    P.integerValue = function (rm) {
      var n = new BigNumber(this);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(n, n.e + 1, rm);
    };


    /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isEqualTo = P.eq = function (y, b) {
      return compare(this, new BigNumber(y, b)) === 0;
    };


    /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */
    P.isFinite = function () {
      return !!this.c;
    };


    /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isGreaterThan = P.gt = function (y, b) {
      return compare(this, new BigNumber(y, b)) > 0;
    };


    /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

    };


    /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */
    P.isInteger = function () {
      return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
    };


    /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isLessThan = P.lt = function (y, b) {
      return compare(this, new BigNumber(y, b)) < 0;
    };


    /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isLessThanOrEqualTo = P.lte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
    };


    /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */
    P.isNaN = function () {
      return !this.s;
    };


    /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */
    P.isNegative = function () {
      return this.s < 0;
    };


    /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */
    P.isPositive = function () {
      return this.s > 0;
    };


    /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */
    P.isZero = function () {
      return !!this.c && this.c[0] == 0;
    };


    /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */
    P.minus = function (y, b) {
      var i, j, t, xLTy,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
      if (a != b) {
        y.s = -b;
        return x.plus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Either Infinity?
        if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

        // Either zero?
        if (!xc[0] || !yc[0]) {

          // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
          return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

           // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
           ROUNDING_MODE == 3 ? -0 : 0);
        }
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Determine which is the bigger number.
      if (a = xe - ye) {

        if (xLTy = a < 0) {
          a = -a;
          t = xc;
        } else {
          ye = xe;
          t = yc;
        }

        t.reverse();

        // Prepend zeros to equalise exponents.
        for (b = a; b--; t.push(0));
        t.reverse();
      } else {

        // Exponents equal. Check digit by digit.
        j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

        for (a = b = 0; b < j; b++) {

          if (xc[b] != yc[b]) {
            xLTy = xc[b] < yc[b];
            break;
          }
        }
      }

      // x < y? Point xc to the array of the bigger number.
      if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

      b = (j = yc.length) - (i = xc.length);

      // Append zeros to xc if shorter.
      // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
      if (b > 0) for (; b--; xc[i++] = 0);
      b = BASE - 1;

      // Subtract yc from xc.
      for (; j > a;) {

        if (xc[--j] < yc[j]) {
          for (i = j; i && !xc[--i]; xc[i] = b);
          --xc[i];
          xc[j] += BASE;
        }

        xc[j] -= yc[j];
      }

      // Remove leading zeros and adjust exponent accordingly.
      for (; xc[0] == 0; xc.splice(0, 1), --ye);

      // Zero?
      if (!xc[0]) {

        // Following IEEE 754 (2008) 6.3,
        // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
        y.s = ROUNDING_MODE == 3 ? -1 : 1;
        y.c = [y.e = 0];
        return y;
      }

      // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
      // for finite x and y.
      return normalise(y, xc, ye);
    };


    /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */
    P.modulo = P.mod = function (y, b) {
      var q, s,
        x = this;

      y = new BigNumber(y, b);

      // Return NaN if x is Infinity or NaN, or y is NaN or zero.
      if (!x.c || !y.s || y.c && !y.c[0]) {
        return new BigNumber(NaN);

      // Return x if y is Infinity or x is zero.
      } else if (!y.c || x.c && !x.c[0]) {
        return new BigNumber(x);
      }

      if (MODULO_MODE == 9) {

        // Euclidian division: q = sign(y) * floor(x / abs(y))
        // r = x - qy    where  0 <= r < abs(y)
        s = y.s;
        y.s = 1;
        q = div(x, y, 0, 3);
        y.s = s;
        q.s *= s;
      } else {
        q = div(x, y, 0, MODULO_MODE);
      }

      y = x.minus(q.times(y));

      // To match JavaScript %, ensure sign of zero is sign of dividend.
      if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

      return y;
    };


    /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */
    P.multipliedBy = P.times = function (y, b) {
      var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
        base, sqrtBase,
        x = this,
        xc = x.c,
        yc = (y = new BigNumber(y, b)).c;

      // Either NaN, ±Infinity or ±0?
      if (!xc || !yc || !xc[0] || !yc[0]) {

        // Return NaN if either is NaN, or one is 0 and the other is Infinity.
        if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
          y.c = y.e = y.s = null;
        } else {
          y.s *= x.s;

          // Return ±Infinity if either is ±Infinity.
          if (!xc || !yc) {
            y.c = y.e = null;

          // Return ±0 if either is ±0.
          } else {
            y.c = [0];
            y.e = 0;
          }
        }

        return y;
      }

      e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
      y.s *= x.s;
      xcL = xc.length;
      ycL = yc.length;

      // Ensure xc points to longer array and xcL to its length.
      if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

      // Initialise the result array with zeros.
      for (i = xcL + ycL, zc = []; i--; zc.push(0));

      base = BASE;
      sqrtBase = SQRT_BASE;

      for (i = ycL; --i >= 0;) {
        c = 0;
        ylo = yc[i] % sqrtBase;
        yhi = yc[i] / sqrtBase | 0;

        for (k = xcL, j = i + k; j > i;) {
          xlo = xc[--k] % sqrtBase;
          xhi = xc[k] / sqrtBase | 0;
          m = yhi * xlo + xhi * ylo;
          xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
          c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
          zc[j--] = xlo % base;
        }

        zc[j] = c;
      }

      if (c) {
        ++e;
      } else {
        zc.splice(0, 1);
      }

      return normalise(y, zc, e);
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */
    P.negated = function () {
      var x = new BigNumber(this);
      x.s = -x.s || null;
      return x;
    };


    /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */
    P.plus = function (y, b) {
      var t,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
       if (a != b) {
        y.s = -b;
        return x.minus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Return ±Infinity if either ±Infinity.
        if (!xc || !yc) return new BigNumber(a / 0);

        // Either zero?
        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
      if (a = xe - ye) {
        if (a > 0) {
          ye = xe;
          t = yc;
        } else {
          a = -a;
          t = xc;
        }

        t.reverse();
        for (; a--; t.push(0));
        t.reverse();
      }

      a = xc.length;
      b = yc.length;

      // Point xc to the longer array, and b to the shorter length.
      if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

      // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
      for (a = 0; b;) {
        a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
      }

      if (a) {
        xc = [a].concat(xc);
        ++ye;
      }

      // No need to check for zero, as +x + +y != 0 && -x + -y != 0
      // ye = MAX_EXP + 1 possible
      return normalise(y, xc, ye);
    };


    /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.precision = P.sd = function (sd, rm) {
      var c, n, v,
        x = this;

      if (sd != null && sd !== !!sd) {
        intCheck(sd, 1, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), sd, rm);
      }

      if (!(c = x.c)) return null;
      v = c.length - 1;
      n = v * LOG_BASE + 1;

      if (v = c[v]) {

        // Subtract the number of trailing zeros of the last element.
        for (; v % 10 == 0; v /= 10, n--);

        // Add the number of digits of the first element.
        for (v = c[0]; v >= 10; v /= 10, n++);
      }

      if (sd && x.e + 1 > n) n = x.e + 1;

      return n;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */
    P.shiftedBy = function (k) {
      intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
      return this.times('1e' + k);
    };


    /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.squareRoot = P.sqrt = function () {
      var m, n, r, rep, t,
        x = this,
        c = x.c,
        s = x.s,
        e = x.e,
        dp = DECIMAL_PLACES + 4,
        half = new BigNumber('0.5');

      // Negative/NaN/Infinity/zero?
      if (s !== 1 || !c || !c[0]) {
        return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
      }

      // Initial estimate.
      s = Math.sqrt(+valueOf(x));

      // Math.sqrt underflow/overflow?
      // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
      if (s == 0 || s == 1 / 0) {
        n = coeffToString(c);
        if ((n.length + e) % 2 == 0) n += '0';
        s = Math.sqrt(+n);
        e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

        if (s == 1 / 0) {
          n = '5e' + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf('e') + 1) + e;
        }

        r = new BigNumber(n);
      } else {
        r = new BigNumber(s + '');
      }

      // Check for zero.
      // r could be zero if MIN_EXP is changed after the this value was created.
      // This would cause a division by zero (x/t) and hence Infinity below, which would cause
      // coeffToString to throw.
      if (r.c[0]) {
        e = r.e;
        s = e + dp;
        if (s < 3) s = 0;

        // Newton-Raphson iteration.
        for (; ;) {
          t = r;
          r = half.times(t.plus(div(x, t, dp, 1)));

          if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

            // The exponent of r may here be one less than the final result exponent,
            // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
            // are indexed correctly.
            if (r.e < e) --s;
            n = n.slice(s - 3, s + 1);

            // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
            // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
            // iteration.
            if (n == '9999' || !rep && n == '4999') {

              // On the first iteration only, check to see if rounding up gives the
              // exact result as the nines may infinitely repeat.
              if (!rep) {
                round(t, t.e + DECIMAL_PLACES + 2, 0);

                if (t.times(t).eq(x)) {
                  r = t;
                  break;
                }
              }

              dp += 4;
              s += 4;
              rep = 1;
            } else {

              // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
              // result. If not, then there are further digits and m will be truthy.
              if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                // Truncate to the first rounding digit.
                round(r, r.e + DECIMAL_PLACES + 2, 1);
                m = !r.times(r).eq(x);
              }

              break;
            }
          }
        }
      }

      return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
    };


    /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toExponential = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp++;
      }
      return format(this, dp, rm, 1);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toFixed = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp = dp + this.e + 1;
      }
      return format(this, dp, rm);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */
    P.toFormat = function (dp, rm, format) {
      var str,
        x = this;

      if (format == null) {
        if (dp != null && rm && typeof rm == 'object') {
          format = rm;
          rm = null;
        } else if (dp && typeof dp == 'object') {
          format = dp;
          dp = rm = null;
        } else {
          format = FORMAT;
        }
      } else if (typeof format != 'object') {
        throw Error
          (bignumberError + 'Argument not an object: ' + format);
      }

      str = x.toFixed(dp, rm);

      if (x.c) {
        var i,
          arr = str.split('.'),
          g1 = +format.groupSize,
          g2 = +format.secondaryGroupSize,
          groupSeparator = format.groupSeparator || '',
          intPart = arr[0],
          fractionPart = arr[1],
          isNeg = x.s < 0,
          intDigits = isNeg ? intPart.slice(1) : intPart,
          len = intDigits.length;

        if (g2) i = g1, g1 = g2, g2 = i, len -= i;

        if (g1 > 0 && len > 0) {
          i = len % g1 || g1;
          intPart = intDigits.substr(0, i);
          for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
          if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
          if (isNeg) intPart = '-' + intPart;
        }

        str = fractionPart
         ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
          ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
           '$&' + (format.fractionGroupSeparator || ''))
          : fractionPart)
         : intPart;
      }

      return (format.prefix || '') + str + (format.suffix || '');
    };


    /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */
    P.toFraction = function (md) {
      var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
        x = this,
        xc = x.c;

      if (md != null) {
        n = new BigNumber(md);

        // Throw if md is less than one or is not an integer, unless it is Infinity.
        if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
          throw Error
            (bignumberError + 'Argument ' +
              (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
        }
      }

      if (!xc) return new BigNumber(x);

      d = new BigNumber(ONE);
      n1 = d0 = new BigNumber(ONE);
      d1 = n0 = new BigNumber(ONE);
      s = coeffToString(xc);

      // Determine initial denominator.
      // d is a power of 10 and the minimum max denominator that specifies the value exactly.
      e = d.e = s.length - x.e - 1;
      d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
      md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

      exp = MAX_EXP;
      MAX_EXP = 1 / 0;
      n = new BigNumber(s);

      // n0 = d1 = 0
      n0.c[0] = 0;

      for (; ;)  {
        q = div(n, d, 0, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.comparedTo(md) == 1) break;
        d0 = d1;
        d1 = d2;
        n1 = n0.plus(q.times(d2 = n1));
        n0 = d2;
        d = n.minus(q.times(d2 = d));
        n = d2;
      }

      d2 = div(md.minus(d0), d1, 0, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      e = e * 2;

      // Determine which fraction is closer to x, n0/d0 or n1/d1
      r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
          div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

      MAX_EXP = exp;

      return r;
    };


    /*
     * Return the value of this BigNumber converted to a number primitive.
     */
    P.toNumber = function () {
      return +valueOf(this);
    };


    /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.toPrecision = function (sd, rm) {
      if (sd != null) intCheck(sd, 1, MAX);
      return format(this, sd, rm, 2);
    };


    /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */
    P.toString = function (b) {
      var str,
        n = this,
        s = n.s,
        e = n.e;

      // Infinity or NaN?
      if (e === null) {
        if (s) {
          str = 'Infinity';
          if (s < 0) str = '-' + str;
        } else {
          str = 'NaN';
        }
      } else {
        if (b == null) {
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
           ? toExponential(coeffToString(n.c), e)
           : toFixedPoint(coeffToString(n.c), e, '0');
        } else if (b === 10) {
          n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
          str = toFixedPoint(coeffToString(n.c), n.e, '0');
        } else {
          intCheck(b, 2, ALPHABET.length, 'Base');
          str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
        }

        if (s < 0 && n.c[0]) str = '-' + str;
      }

      return str;
    };


    /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */
    P.valueOf = P.toJSON = function () {
      return valueOf(this);
    };


    P._isBigNumber = true;

    if (configObject != null) BigNumber.set(configObject);

    return BigNumber;
  }


  // PRIVATE HELPER FUNCTIONS

  // These functions don't need access to variables,
  // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


  function bitFloor(n) {
    var i = n | 0;
    return n > 0 || n === i ? i : i - 1;
  }


  // Return a coefficient array as a string of base 10 digits.
  function coeffToString(a) {
    var s, z,
      i = 1,
      j = a.length,
      r = a[0] + '';

    for (; i < j;) {
      s = a[i++] + '';
      z = LOG_BASE - s.length;
      for (; z--; s = '0' + s);
      r += s;
    }

    // Determine trailing zeros.
    for (j = r.length; r.charCodeAt(--j) === 48;);

    return r.slice(0, j + 1 || 1);
  }


  // Compare the value of BigNumbers x and y.
  function compare(x, y) {
    var a, b,
      xc = x.c,
      yc = y.c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    // Either NaN?
    if (!i || !j) return null;

    a = xc && !xc[0];
    b = yc && !yc[0];

    // Either zero?
    if (a || b) return a ? b ? 0 : -j : i;

    // Signs differ?
    if (i != j) return i;

    a = i < 0;
    b = k == l;

    // Either Infinity?
    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

    // Compare exponents.
    if (!b) return k > l ^ a ? 1 : -1;

    j = (k = xc.length) < (l = yc.length) ? k : l;

    // Compare digit by digit.
    for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

    // Compare lengths.
    return k == l ? 0 : k > l ^ a ? 1 : -1;
  }


  /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */
  function intCheck(n, min, max, name) {
    if (n < min || n > max || n !== mathfloor(n)) {
      throw Error
       (bignumberError + (name || 'Argument') + (typeof n == 'number'
         ? n < min || n > max ? ' out of range: ' : ' not an integer: '
         : ' not a primitive number: ') + String(n));
    }
  }


  // Assumes finite n.
  function isOdd(n) {
    var k = n.c.length - 1;
    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
  }


  function toExponential(str, e) {
    return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
     (e < 0 ? 'e' : 'e+') + e;
  }


  function toFixedPoint(str, e, z) {
    var len, zs;

    // Negative exponent?
    if (e < 0) {

      // Prepend zeros.
      for (zs = z + '.'; ++e; zs += z);
      str = zs + str;

    // Positive exponent
    } else {
      len = str.length;

      // Append zeros.
      if (++e > len) {
        for (zs = z, e -= len; --e; zs += z);
        str += zs;
      } else if (e < len) {
        str = str.slice(0, e) + '.' + str.slice(e);
      }
    }

    return str;
  }


  // EXPORT


  BigNumber = clone();
  BigNumber['default'] = BigNumber.BigNumber = BigNumber;

  // AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return BigNumber; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node.js and other environments that support module.exports.
  } else {}
})(this);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    main: 'Mainnet',
    rops: 'Ropsten',
    rinkeby: 'Rinkeby',
    Goerli: 'Goerli',
    Kovan: 'Kovan',
    divideValue: 1000000000000000000,
    commanContractAddressM: '0x0eca569e1698fdde4f47d9a55a77c7eb93d2f6f3',
    commanContractAddressR: '0xbA4FfCadD7615C1Beb595Bd6724CF71590Dc2933',
    // lp for mainnet
    ANTISEALLPTokenM: '0x51c2b78e423ff673e07b1066f6448b5e91a9ee08',
    USDTLPTokenM: '0x6C3e4cb2E96B01F4b866965A91ed4437839A121a',
    USDCLPTokenM: '0x7FBa4B8Dc5E7616e59622806932DBea72537A56b',
    DAILPTokenM: '0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711',
    WBTCLPTokenM: '0xCA35e32e7926b96A9988f61d510E038108d8068e',
    // lp for ropstan
    ANTISEALLPTokenR: '0x94cD9c6b3BF3f964DBe63e2a13284BF3203A8d3c',
    USDTLPTokenR: '0x9d6ba3010860e935b221D4641A457dEE38B7e1a4',
    USDCLPTokenR: '0x0000000000000000000000000000000000000000',
    DAILPTokenR: '0x0000000000000000000000000000000000000000',
    WBTCLPTokenR: '0x0000000000000000000000000000000000000000',
    commanABI: [{ "inputs": [{ "internalType": "contract xANTI", "name": "_antiSeal", "type": "address" }, { "internalType": "address", "name": "_drainAddress", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "txHash", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "target", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "signature", "type": "string" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "uint256", "name": "eta", "type": "uint256" }], "name": "CancelTransaction", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "txHash", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "target", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "signature", "type": "string" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "uint256", "name": "eta", "type": "uint256" }], "name": "ExecuteTransaction", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "NewAdmin", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "newDelay", "type": "uint256" }], "name": "NewDelay", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newPendingAdmin", "type": "address" }], "name": "NewPendingAdmin", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "txHash", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "target", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "signature", "type": "string" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "uint256", "name": "eta", "type": "uint256" }], "name": "QueueTransaction", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [], "name": "BURN_TOKEN_IN_PERCENTAGE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DEV_FEE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "GRACE_PERIOD", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAXIMUM_DELAY", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MINIMUM_DELAY", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "REWARD_START_BLOCK", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "acceptAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract Seal", "name": "_victim", "type": "address" }, { "internalType": "uint256", "name": "_victimPoolId", "type": "uint256" }, { "internalType": "uint256", "name": "_rewardPerBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_rewardDrainModifier", "type": "uint256" }, { "internalType": "uint256", "name": "_wethDrainModifier", "type": "uint256" }], "name": "add", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "admin_initialized", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "antiSeal", "outputs": [{ "internalType": "contract xANTI", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "string", "name": "signature", "type": "string" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "uint256", "name": "eta", "type": "uint256" }], "name": "cancelTransaction", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "delay", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "devAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "drain", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "drainAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }, { "internalType": "string", "name": "signature", "type": "string" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "uint256", "name": "eta", "type": "uint256" }], "name": "executeTransaction", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "massUpdatePools", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pendingAdmin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingXAntiSeal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolInfo", "outputs": [{ "internalType": "contract Seal", "name": "seal", "type": "address" }, { "internalType": "uint256", "name": "victimPoolId", "type": "uint256" }, { "internalType": "uint256", "name": "rewardPerBlock", "type": "uint256" }, { "internalType": "uint256", "name": "lastRewardBlock", "type": "uint256" }, { "internalType": "uint256", "name": "accAntiSealPerShare", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDrainModifier", "type": "uint256" }, { "internalType": "uint256", "name": "wethDrainModifier", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolRewardUpdater", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "string", "name": "signature", "type": "string" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "uint256", "name": "eta", "type": "uint256" }], "name": "queueTransaction", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "queuedTransactions", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "delay_", "type": "uint256" }], "name": "setDelay", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "pendingAdmin_", "type": "address" }], "name": "setPendingAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_devAddress", "type": "address" }], "name": "updateDevAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_drainAddress", "type": "address" }], "name": "updateDrainAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "updatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_rewardDrainModifier", "type": "uint256" }, { "internalType": "uint256", "name": "_wethDrainModifier", "type": "uint256" }], "name": "updatePoolDrain", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolRewardLimiter", "type": "uint256" }], "name": "updatePoolRewardLimiter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_rewardPerBlock", "type": "uint256" }], "name": "updateRewardPerBlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "pids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "rewards", "type": "uint256[]" }], "name": "updateRewardPerBlockMassive", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_poolRewardUpdater", "type": "address" }], "name": "updateRewardUpdaterAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "address", "name": "_victim", "type": "address" }, { "internalType": "uint256", "name": "_victimPoolId", "type": "uint256" }], "name": "updateVictimInfo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }],
    tokenABI: [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Swap", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint112", "name": "reserve0", "type": "uint112" }, { "indexed": false, "internalType": "uint112", "name": "reserve1", "type": "uint112" }], "name": "Sync", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MINIMUM_LIQUIDITY", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "burn", "outputs": [{ "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "internalType": "uint256", "name": "amount1", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getReserves", "outputs": [{ "internalType": "uint112", "name": "_reserve0", "type": "uint112" }, { "internalType": "uint112", "name": "_reserve1", "type": "uint112" }, { "internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_token0", "type": "address" }, { "internalType": "address", "name": "_token1", "type": "address" }], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "kLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "mint", "outputs": [{ "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "price0CumulativeLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "price1CumulativeLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "skim", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "swap", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "sync", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "token0", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "token1", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/codezeros/Extra Task/Project/LiveProject/ASEALVaults/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 16:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 17:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 18:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 19:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 20:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 21:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 22:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 23:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 24:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 25:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map