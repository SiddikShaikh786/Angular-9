const args = process.argv
console.log(args)
if (args[2] === 'add') {
    console.log('sum');

}
else if (args[2] === 'mul') {
    console.log('product');
}
else if (args[2] === 'modulo') {
    console.log('remainder');
}