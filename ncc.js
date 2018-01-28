'use strict'

const Nem = require('./nem');


class Info {

  /**
   * @param {Nem} nem 
   */
  constructor(nem) {
    this.nem = nem;
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#nisinfoviewmodel
   * @returns {Promise} 
   */
  ncc() {
    return this.nem.get('info/ncc');
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#nisinfoviewmodel
   * @returns {Promise}
   */
  nis() {
    return this.nem.get('info/nis');
  }

  /**
   * 0 - NIS server is not running
   * 1 - NIS server is running (but may not be booted)
   * @returns {Promise}
   */
  nisCheck() {
    return this.nem.get('info/nis/check');
  }

}

class Configuration {

  /**
   * @param {Nem} nem 
   */
  constructor(nem){
    this.nem = nem;
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#configurationviewmodel
   * @returns {Promise}
   */
  get(){
    return this.nem.get('configuration/get');
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#configurationviewmodel
   * @param {*} cfg 
   * @returns {Promise}
   */
  update(cfg){
    return this.nem.post('configuration/update', cfg);
  }

}

class Addressbook {

  /**
   * @param {Nem} nem 
   */
  constructor(nem){
    this.nem = nem;
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbooknamepasswordpair
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbookviewmodel
   * @param {*} addressBookNamePasswordPair
   * @returns {Promise}
   */
  create(addressBookNamePasswordPair){
    return this.nem.post('addressbook/create', addressBookNamePasswordPair);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbooknamepasswordpair
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbookviewmodel
   * @param {*} addressBookNamePasswordPair 
   * @returns {Promise}
   */
  open(addressBookNamePasswordPair){
    return this.nem.post('addressbook/open', addressBookNamePasswordPair)
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbookname
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbookviewmodel
   * @param {*} addressBookNamePasswordPair 
   * @returns {Promise}
   */
  info(addressBookName){
    return this.nem.post('addressbook/info', addressBookName);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbookname
   * @param {*} addressBookNamePasswordPair 
   * @returns {Promise}
   */
  info(addressBookName){
    return this.nem.post('addressbook/close', addressBookName);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbooknamepasswordbag
   * @param {*} addressBookNamePasswordBag
   * @returns {Promise}
   */
  passwordChange(addressBookNamePasswordBag){
    return this.nem.post('addressbook/password/change', addressBookNamePasswordBag);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbooknamepasswordbag
   * @param {*} addressBookNamePasswordBag
   * @returns {Promise}
   */
  nameChange(addressBookNamePasswordBag){
    return this.nem.post('addressbook/name/change', addressBookNamePasswordBag);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbooknamepasswordbag
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbookviewmodel
   * @param {*} addressBookNamePasswordBag
   * @returns {Promise}
   */
  accountlabelRemove(addressBookNamePasswordBag){
    return this.nem.post('addressbook/accountlabel/remove', addressBookNamePasswordBag);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbooknamepasswordbag
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accountlabel
   * @param {*} addressBookNamePasswordBag
   * @returns {Promise}
   */
  accountlabelAdd(addressBookNamePasswordBag){
    return this.nem.post('addressbook/accountlabel/add', addressBookNamePasswordBag);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbooknamepasswordbag
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accountlabel
   * @param {*} addressBookNamePasswordBag
   * @returns {Promise}
   */
  accountlabelChange(addressBookNamePasswordBag){
    return this.nem.post('addressbook/accountlabel/change', addressBookNamePasswordBag);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#addressbooknamepasswordbag
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accountlabel
   * @param {*} addressBookNamePasswordBag
   * @returns {Promise}
   */
  accountlabelFind(addressBookNamePasswordBag){
    return this.nem.post('addressbook/accountlabel/find', addressBookNamePasswordBag);
  }

}

class Wallet {

  /**
   * @param {Nem} nem 
   */
  constructor(nem){
    this.nem = nem;
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#listofwalletdescriptorviewmodel
   * @returns {Promise}
   */
  list(){
    return this.nem.get('wallet/list');
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletnamepasswordpair
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletviewmodel
   * @param {*} walletNamePasswordPair
   * @returns {Promise}
   */
  create(walletNamePasswordPair){
    return this.nem.post('wallet/create', walletNamePasswordPair);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletnamepasswordpair
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletviewmodel
   * @param {*} walletNamePasswordPair
   * @returns {Promise}
   */
  open(walletNamePasswordPair){
    return this.nem.post('wallet/open', walletNamePasswordPair);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletname
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletviewmodel
   * @param {*} walletName
   * @returns {Promise}
   */
  info(walletName){
    return this.nem.post('wallet/info', walletName);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletname
   * @param {*} walletName
   * @returns {Promise}
   */
  close(walletName){
    return this.nem.post('wallet/close', walletName);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletnamepasswordbag
   * @param {*} walletNamePasswordBag
   * @returns {Promise}
   */
  passwordChange(walletNamePasswordBag){
    return this.nem.post('wallet/password/change', walletNamePasswordBag);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletnamepasswordbag
   * @param {*} walletNamePasswordBag
   * @returns {Promise}
   */
  nameChange(walletNamePasswordBag){
    return this.nem.post('wallet/name/change', walletNamePasswordBag);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletnamepasswordbag
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accountviewmodel
   * @param {*} walletNamePasswordBag
   * @returns {Promise}
   */
  accountNew(walletNamePasswordBag){
    return this.nem.post('wallet/account/new', walletNamePasswordBag);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletnamepasswordbag
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletviewmodel
   * @param {*} walletNamePasswordBag
   * @returns {Promise}
   */
  accountPrimary(walletNamePasswordBag){
    return this.nem.post('wallet/account/primary', walletNamePasswordBag);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletnamepasswordbag
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletviewmodel
   * @param {*} walletNamePasswordBag
   * @returns {Promise}
   */
  accountRemove(walletNamePasswordBag){
    return this.nem.post('wallet/account/remove', walletNamePasswordBag);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#walletnamepasswordbag
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accountviewmodel
   * @param {*} walletNamePasswordBag
   * @returns {Promise}
   */
  accountLabel(walletNamePasswordBag){
    return this.nem.post('wallet/account/label', walletNamePasswordBag);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#transfersendrequest
   * @param {*} transferSendRequest
   * @returns {Promise}
   */
  accountTransactionSend(transferSendRequest){
    return this.nem.post('wallet/account/transaction/send', transferSendRequest);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#partialtransferinformationrequest
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#partialtransferinformationviewmodel
   * @param {*} partialTransferInformationRequest
   * @returns {Promise}
   */
  accountTransactionValidate(partialTransferInformationRequest){
    return this.nem.post('wallet/account/transaction/validate', partialTransferInformationRequest);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accountwalletrequest
   * @param {*} accountWalletRequest
   * @returns {Promise}
   */
  accountUnlock(accountWalletRequest){
    return this.nem.post('wallet/account/unlock', accountWalletRequest);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accountwalletrequest
   * @param {*} accountWalletRequest
   * @returns {Promise}
   */
  accountLock(accountWalletRequest){
    return this.nem.post('wallet/account/lock', accountWalletRequest);
  }

}

class Account {

  /**
   * @param {Nem} nem 
   */
  constructor(nem){
    this.nem = nem;
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accountidrequest
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accountviewmodel
   * @param {*} accountIdRequest
   * @returns {Promise}
   */
  find(accountIdRequest){
    return this.nem.post('account/find', accountIdRequest);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accounthashrequest
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accounttransactionspair
   * @param {*} accountHashRequest 
   * @returns {Promise}
   */
  transactionsUnconfirmed(accountHashRequest){
    return this.nem.post('account/transactions/unconfirmed', accountHashRequest);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accounttransactionidrequest
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accounttransactionspair
   * @param {*} accountTransactionIdRequest 
   * @returns {Promise}
   */
  transactionsConfirmed(accountTransactionIdRequest){
    return this.nem.post('account/transactions/unconfirmed', accountTransactionIdRequest);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accounttransactionidrequest
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accounttransactionspair
   * @param {*} accountTransactionIdRequest 
   * @returns {Promise}
   */
  transactionsIncoming(accountTransactionIdRequest){
    return this.nem.post('account/transactions/incoming', accountTransactionIdRequest);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accounttransactionidrequest
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accounttransactionspair
   * @param {*} accountTransactionIdRequest 
   * @returns {Promise}
   */
  transactionsOutgoing(accountTransactionIdRequest){
    return this.nem.post('account/transactions/outgoing', accountTransactionIdRequest);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accounttransactionidrequest
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#transferviewmodel
   * @param {*} accountTransactionIdRequest 
   * @returns {Promise}
   */
  transactionsAll(accountTransactionIdRequest){
    return this.nem.post('account/transactions/outgoing', accountTransactionIdRequest);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#accounthashrequest
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#harvestinfoviewmodellist
   * @param {*} accountHashRequest
   * @returns {Promise}
   */
  harvests(accountHashRequest){
    return this.nem.post('account/harvests', accountHashRequest);
  }

}

class Node {

  /**
   * @param {Nem} nem 
   */
  constructor(nem){
    this.nem = nem;
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#bootnoderequest
   * @param {*} bootNodeRequest
   * @returns {Promise}
   */
  boot(bootNodeRequest){
    return this.nem.post('node/boot', bootNodeRequest);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#nemrequestresult
   * @returns {Promise}
   */
  status(){
    return this.nem.get('node/status');
  }

}

class Network {

  /**
   * @param {Nem} nem 
   */
  constructor(nem){
    this.nem = nem;
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#nodeendpointlist
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#graphviewmodel
   * @param {*} nodeEndpointList
   * @returns {Promise}
   */
  get(nodeEndpointList){
    return this.nem.post('network', nodeEndpointList);
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#graphviewmodel
   * @returns {Promise}
   */
  local(){
    return this.nem.get('network/local');
  }

}

module.exports = class Ncc extends Nem {

  constructor(endpoint = 'http://127.0.0.1:7890') {
    super(endpoint);
    this.info = new Info(this);
    this.configuration = new Configuration(this);
    this.addressbook = new Addressbook(this);
    this.wallet = new Wallet(this);
    this.account = new Account(this);
    this.node = new Node(this);
    this.network = new Network(this);
  }

  /**
   * @returns {Promise}
   */
  shutdown(){
    return this.get('shutdown');
  }

  /**
   * https://github.com/NemProject/NemCommunityClient/blob/master/docs/viewModel.md#nemrequestresult
   * @returns {Promise}
   */
  status(){
    return this.get('status')
  }

}