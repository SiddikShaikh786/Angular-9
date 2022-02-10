const url = require('url')
const data = 'http://localhost:4000/path?id=100&name=shaikh&adress=yellapu%20SIrsi#about';
const reqUrl = url.parse(data, true)
//parse method returns an object that containing url properties
console.log("   SEARCH :- ", reqUrl.search)
console.log("Host name :-", reqUrl.host)
console.log('path name :-', reqUrl.pathname)
console.log('port', reqUrl.port);
console.log('protocal', reqUrl.protocol);
console.log('fragement', reqUrl.hash);
console.log('HOSTNAME', reqUrl.hostname);


/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = reqUrl.query;
console.log(qdata.name);
console.log(qdata.id);





