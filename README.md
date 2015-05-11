# nodejs2nem
A Simple javascript (nodejs) class to access NEM (NIS &amp; NCC) api

NEM.js is a simple javascript class that can be used
to send api calls to NIS (Nem Infrastructure Server)
and NCC (Nem Community Client) from nodejs

## How to use

```javascript
// include the required class
NEM		= require('./NEM.js');

/*
define the initial configuration parameters
if not defined the defaults will be used
*/
var conf = { 'nis_address': 'go.nem.ninja'};

// create an instance using a user defined configuration options
var nem = new NEM(conf);
```

you can also create the nem object with the default options by passing null
parameter in the constructor call

```javascript

var nem = new NEM(null);

```

you can then set the options at later stage in your code if needed with the setOptions method:

```javascript
nem.setOptions(conf);
```

to list all the options or a single option value use the getOptions method:
```javascript
var opt = nem.getOptions();
console.log(opt);
```
the output should look like this:

```
{
    nis_address: 'go.nem.ninja',
    nis_port: 7890,
    nis_context: '/',
    ncc_address: '127.0.0.1',
    ncc_port: 8989,
    ncc_context: '/ncc/api/'
}
```

or if called with a key parameter
```javascript
var opt = nem.getOptions('nis_port');
console.log(opt);
```
it returns a single scalar value of the requested option in this case:

```
7890
```

### making requests to NIS (Nem Infrastructure Server)

get request sample:
```javascript

nem.nisGet('/account/get?address=NATCDEF5S5VH6R2X4NJ5ZXQZ2YTMHCPQHNXU5MBW',null
	,function(err) {
		// error handler function
		
		// output error here
		console.log(err);
		// or call other functions 
		...
		
	}
	,function(res) {
		
		//response handler function
		// output the  resposne here
		console.log(res);
		// or call other user defined code  
		...
	
	});

```

the returned output is a javascript object:
```
{ meta: 
   { cosignatories: [],
     cosignatoryOf: [],
     status: 'LOCKED',
     remoteStatus: 'REMOTE' },
  account: 
   { address: 'NATCDEF5S5VH6R2X4NJ5ZXQZ2YTMHCPQHNXU5MBW',
     harvestedBlocks: 0,
     balance: 0,
     importance: 0,
     vestedBalance: 0,
     publicKey: '702c1f79589fa2042b6223458105a4b2d62d83601d6002fafe4b0b966be5397e',
     label: null } }

```

in case of a get request the parameters can be send in the separate javascript object as well 
instead of the query string. the example above will look like this:

```javascript

/*
NOTE: Using the data variable instead of null
will truncate any query string out of the url
*/


var data = {address: "NATCDEF5S5VH6R2X4NJ5ZXQZ2YTMHCPQHNXU5MBW"};

nem.nisGet('/account/get',data
	,function(err) {
		// error handler function
		
		// output error here
		console.log(err);
		// or call other functions 
		...
		
	}
	,function(res) {
		
		//response handler function
		// output the  resposne here
		console.log(res);
		// or call other user defined code  
		...
	
	});

```


post request sample:
```javascript
// sample using javascript object

var data = new Object();
data['height'] = 10000;

nem.nisPost('/block/at/public',data
	,function(err) {
		// error handler function
		
		// output error here
		console.log(err);
		// or call other functions 
		...
		
	}
	,function(res) {
		
		//response handler function
		// output the  resposne here
		console.log(err);
		// or call other user defined code  
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

a simple example handler function:
```javascript
// the function will output javascript object as JSON text 
var toJsonText = function(data) {
	var d = JSON.stringify(data);
	console.log(d);	
};


nem.nisPost('/block/at/public',data
	,function(err) {
		// error handling function
		console.log(err);
	}
	,toJsonText);

```

### making requests to NCC (Nem Community Client)

get request sample:
```javascript

nem.nccGet('/node/info',null
	,function(err) {
		// error handler function
		
		// output error here
		console.log(err);
		// or call other functions 
		...
		
	}
	,function(res) {
		
		//response handler function
		// output the  resposne here
		console.log(err);
		// or call other user defined code  
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
var data = {
    data: [{
        protocol: "http",
        host: "bob.nem.ninja",
        port: 7890
    }]
};

nem.nccPost('/network',data

);
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

here as well a user defined custom handler function can be used.
For example a handler function to create a pretty JSON ouput:

```javascript
#output a pretty formated JSON text
var toPrettyJson = function(data) {
	var d = JSON.stringify(data,null,4);
	console.log(d);
};


nem.nccPost('/network',data
	,function(err) {
		console.log(err);
		
	}
	,toPrettyJson
);
```

the output should now look like this:

```
{
    "meta": {
        "meta": [
            {
                "endpoint": {
                    "protocol": "http",
                    "port": 7890,
                    "host": "107.179.25.32"
                },
                "address": "NALICEROONSJCPHC63F52V6FY3SDMSVAEWH3QUJF",
                "active": 1,
                "version": "0.6.28-BETA",
                "platform": "Oracle Corporation (1.8.0_40) on Linux"
            },
            {
                "endpoint": {
                    "protocol": "http",
                    "port": 7890,
                    "host": "37.187.70.29"
                },
                "address": "ND75VR7ZKB4G45Q4HJPPSEHQKIYYKQXQ7VW4JORS",
                "active": 1,
                "version": "0.6.28-BETA",
                "platform": "Oracle Corporation (1.8.0_40) on Linux"
            }
        ]
    },
    "graph": {
        "nodes": [
            {
                "id": "NALICEROONSJCPHC63F52V6FY3SDMSVAEWH3QUJF",
                "label": "Hi, I am MedAlice2"
            },
            {
                "id": "ND75VR7ZKB4G45Q4HJPPSEHQKIYYKQXQ7VW4JORS",
                "label": "bob.nem.ninja"
            }
        ],
        "edges": [
            {
                "id": "ND75VR7ZKB4G45Q4HJPPSEHQKIYYKQXQ7VW4JORS-NALICEROONSJCPHC63F52V6FY3SDMSVAEWH3QUJF",
                "source": "ND75VR7ZKB4G45Q4HJPPSEHQKIYYKQXQ7VW4JORS",
                "target": "NALICEROONSJCPHC63F52V6FY3SDMSVAEWH3QUJF"
            }
        ]
    }
}
```

## Documentation

for more detailed information about the NIS and NCC api please visit the following links:

* [NIS API documentation](http://bob.nem.ninja/docs/)
* [NCC API documentation](https://github.com/NewEconomyMovement/NemCommunityClient/blob/master/docs/api.md)
