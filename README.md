# nodejs2nem
A Simple javascript (nodejs) class to access NEM (NIS &amp; NCC) api

NEM.js is a simple javascript class that can be used
to send api calls to NIS (Nem Infrastructure Server)
and NCC (Nem Community Client) from nodejs

## How to use

```javascript
// include the required class
const Nem = require('nodejs2nem');

// create an instance
const nem = new Nem('http://san.nem.ninja:7890/');
```


### making requests to NIS (Nem Infrastructure Server)

get request sample:
```javascript
const params = { address: "NATCDEF5S5VH6R2X4NJ5ZXQZ2YTMHCPQHNXU5MBW" };
nem.get('account/get', params)
  .then(function(res){
    // response handler function
    // output the  resposne here
    console.log(res);
    // or call other user defined code  
    ...
  })
  .catch(function(err){
    // error handler function
    // output error here
    console.log(err)
    // or call other functions 
    ...
  });

```
Or
```javascript
(async function(){
  const params = { address: "NATCDEF5S5VH6R2X4NJ5ZXQZ2YTMHCPQHNXU5MBW" };
  try{
    const res = await nem.get('account/get', params);
    console.log(res);
  }catch(err){
    // error handling
    // output error here
    console.log(err);
  }
})()
```

the returned output is a javascript object:
```
{
  meta: {
    cosignatories: [],
    cosignatoryOf: [],
    status: 'LOCKED',
    remoteStatus: 'REMOTE'
  },
  account: {
    address: 'NATCDEF5S5VH6R2X4NJ5ZXQZ2YTMHCPQHNXU5MBW',
    harvestedBlocks: 0,
    balance: 0,
    importance: 0,
    vestedBalance: 0,
    publicKey: '702c1f79589fa2042b6223458105a4b2d62d83601d6002fafe4b0b966be5397e',
    label: null
  }
}
```

post request sample:
```javascript
// sample using javascript object
const params = { height: 10000 };
nem.post('block/at/public',params)
  .then(function(res){
    // response handler function
    // output the  resposne here
    console.log(res);
    // or call other user defined code  
    ...
  })
  .catch(function(err){
    // error handler function
    // output error here
    console.log(err)
    // or call other functions 
    ...
  });

```


the returned output is a javascript object:
```
{
  timeStamp: 708668,
  signature: "4cdef7f7e9ced87d8e76e11fe38d37c6626cdb230b2221bb4c084f6bf71f4d187e4d9b353ecbd99937dee6d5f2333866141eed4cd96cdad6d720b382c1f6f502",
  prevBlockHash: {
    data: "88c241cfa57263ced09206e2ccf21bec2c5c9e7f161f2fb0d144dd7da52a927a"
  },
  type: 1,
  transactions: [
    {
      timeStamp: 708650,
      amount: 10000000,
      signature: "8a3a7acd2c8f6d12cc0ec16211ca3bbca7550c443676f35be9ff6bd59eaccabf96af6dfaa7b9c0f0f6f088dcdbd986b4ba6490f5d034cca192593f4e0138cb03",
      fee: 10000000,
      recipient: "NALICELGU3IVY4DPJKHYLSSVYFFWYS5QPLYEZDJJ",
      type: 257,
      deadline: 709250,
      message: {
        payload: "416c69636520697320646f6e6174696e67203130206e656d206576657279206d696e75746520746f20706f6f7220686172766573746572732e,
        type: 1
      },
      version: 1744830465,
      signer: "599af9dbc9c36d0cf7d44e4356097d67892aa11e13c7669019f6b42d144a975b"
    }
  ],
  version: 1744830465,
  signer: "d712788c5d16f7c72dda00c25a7e18f02b992d26d26fc196227b6a72fbb20c9c",
  height: 10000
}
```
a user defined handler function has to be used in all the methods to handle the response from NIS or NCC

### making requests to NCC (Nem Community Client)

get request sample:
```javascript
nem.get('node/info')
  .then(function(res){
    // response handler function
    // output the  resposne here
    console.log(res);
    // or call other user defined code  
    ...
  })
  .catch(function(err){
    // error handler function
    // output error here
    console.log(err)
    // or call other functions 
    ...
  });

```

the returned output is a javascript object:
```
{
  metaData: {
    currentTime: 2913152,
    application: "NEM Deploy",
    startTime: 2912577,
    version: "0.6.28-BETA",
    signer: null
  },
  remoteServer: "http://go.nem.ninja:7890/",
  language: "en"
}
```

post request sample:
```javascript
const params = {
  data: [{
    protocol: "http",
    host: "bob.nem.ninja",
    port: 7890
  }]
};

nem.post('network', params);
```
the returned output is a javascript object:
```
{
  meta: {
    meta: [
      {
        endpoint: {
          protocol: "http",
          port: 7890,
          host: "107.179.25.32"
        },
        address: "NALICEROONSJCPHC63F52V6FY3SDMSVAEWH3QUJF",
        active: 1,
        version: "0.6.28-BETA",
        platform: "Oracle Corporation (1.8.0_40) on Linux"
      },
      {
        endpoint: {
          protocol: "http",
          port: 7890,
          host: "37.187.70.29"
        },
        address: "ND75VR7ZKB4G45Q4HJPPSEHQKIYYKQXQ7VW4JORS",
        active: 1,
        version: "0.6.28-BETA",
        platform: "Oracle Corporation (1.8.0_40) on Linux"
      }
    ]
  },
  graph: {
    nodes: [
      {
        id: "NALICEROONSJCPHC63F52V6FY3SDMSVAEWH3QUJF",
        label: "Hi, I am MedAlice2"
      },
      {
        id: "ND75VR7ZKB4G45Q4HJPPSEHQKIYYKQXQ7VW4JORS",
        label: "bob.nem.ninja"
      }
    ],
    edges: [
      {
        id: "ND75VR7ZKB4G45Q4HJPPSEHQKIYYKQXQ7VW4JORS-NALICEROONSJCPHC63F52V6FY3SDMSVAEWH3QUJF",
        source: "ND75VR7ZKB4G45Q4HJPPSEHQKIYYKQXQ7VW4JORS",
        target: "NALICEROONSJCPHC63F52V6FY3SDMSVAEWH3QUJF"
      }
    ]
  }
}

```

## Documentation

for more detailed information about the NIS and NCC api please visit the following links:

* [NIS API documentation](http://bob.nem.ninja/docs/)
* [NCC API documentation](https://github.com/NewEconomyMovement/NemCommunityClient/blob/master/docs/api.md)
