const os = require('os')
console.log('Programm started');
//OS Architecture
console.log("Arcitechture", os.arch());
// os platform
console.log("platform", os.platform());
//free memory
console.log('free memory', os.freemem());
//total memory
var total_memory = os.totalmem();
var total_mem_in_kb = total_memory / 1024;
var total_mem_in_mb = total_mem_in_kb / 1024;
var total_mem_in_gb = total_mem_in_mb / 1024;

console.log("Total memory: " + total_mem_in_gb + " GB\n "
    + total_mem_in_mb + " MB\n " + total_mem_in_kb
    + " KB\n and " + total_memory + " Bytes");

//CPU
console.log('CPU', os.cpus())

//OS
console.log('OS release', os.release());//10.0
//type
console.log('type', os.type()); //WindowNT
//version
console.log('version', os.version());
//home directrory
console.log('directory', os.homedir());
//uptime
console.log(String(os.uptime()) + " Seconds");
