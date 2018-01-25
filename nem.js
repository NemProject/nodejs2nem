'use strict';

const { URL } = require('url');
const path = require('path');
const fetch = require('node-fetch');

module.exports = class Nem {

  /**
   * @param {String} endpoint 
   */
  constructor(endpoint = 'http://127.0.0.1:7890') {
    this.endpoint = endpoint;
  }

  /**
   * Send request to NIC or NCC
   * @param {String} path    - Path
   * @param {Object} params  - Request params
   * @param {Object} options - node-fetch options for requests
   * @returns {Object}
   */
  async request(method, params, options = {}) {
    const uri = new URL(this.endpoint);
    uri.pathname = path.join(uri.pathname, method);

    const rOpts = Object.assign({
      headers: {
        'Content-Type': 'application/json'
      }
    }, options);

    if (options.method === 'GET') {
      for (let key in params) {
        uri.searchParams.append(key, params[key]);
      }
    } else {
      rOpts.body = JSON.stringify(params);
    }

    const data = await fetch(uri.toString(), rOpts);
    return data.json();
  }

  get(method, params = {}, options = {}){
    const opts = Object.assign({}, options, { method: 'GET' });
    return this.request(method, params, opts);
  }

  post(method, params = {}, options = {}) {
    const opts = Object.assign({}, options, { method: 'POST' });
    return this.request(method, params, opts);
  }

}