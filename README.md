##Netface

Returns a dictionary of your external facing IPv4 addresses

###Usage

```javascript
var netface = require('netface');

var address = netface();
console.log(address);
```

This will output a sample

```javascript
{ en0: '10.10.01.17', vboxnet0: '192.168.00.1' } 
```
