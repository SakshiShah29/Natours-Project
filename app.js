const express=require('express');

const app=express();

app.get('/',(req,res)=>{

})

const port =4000;
app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
});

