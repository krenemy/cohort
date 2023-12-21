// promisified fumction call 

function promisifiedTimeout(duration){
    return new Promise((resolve)=>{
        setTimeout(resolve,duration);
    })
}
promisifiedTimeout(2000).then(()=>{
    console.log("helo");
})