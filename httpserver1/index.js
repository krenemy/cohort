const express = require("express")
const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser.json())
const port = 3001
app.use(express.json())

// function sumN(n){
//     let ans = 0;
//     for(let i =0;i<n;i++){
//         ans+=i;
//     }return ans;
// }
// function sum(a,b){
//     return a+b;
// }
// app.get('/',(req,res)=>{
//     const n = req.query.n;
//     const ans = sumN(n);
//     res.send(ans.toString())
//     res.send('helooo')
// })
// app.get('/a',(req,res)=>{
//     const a = req.query.a;
//     const b = req.query.b;
//     const ans = sum(a,b);
//     res.send(ans.toString())
//     res.send('helooo')
// })

const users = [{
    name:"john",
    kidneys:[
        {
            id:1,
            healthy:false
        },
        {
            id:2,
            healthy:true
        }
    ]
}]
app.get('/kidneys',(req,res)=>{
    const kidney={
        healthy:0,
        unhealthy:0
    };
    const kidneys = users[0].kidneys
    kidneys.forEach((item)=>{
        if(item.healthy){
            kidney.healthy++;
        }else{
            kidney.unhealthy++;
        }
    })
    res.json(kidney)
})
app.post("/kidneys",(req,res)=>{
    const kidney = req.body
   users[0].kidneys.push(kidney)
    res.json({
        msg: "Done!"
    })
})
app.put("/kidneys",(req,res)=>{
    users[0].kidneys.forEach((item)=>{
        if(item.healthy==false){
            item.healthy=true
        }
    })
    res.json({})
})
app.listen(port,()=>{
    console.log(`lostening on port ${port}`)
})