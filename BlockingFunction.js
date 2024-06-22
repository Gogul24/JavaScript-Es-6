function task(message){
    let n =1000000000;
    while(n>0){
        n--;
    }
    console.log(message);
}
console.log('Start script');
setTimeout(()=>{
    task('Downloading File')
},0)
// task('Downloading a file');
console.log('Done');