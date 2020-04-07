const express=require('express');
const app=express();
const port =3000;

app.set('views', './views')
app.set('view engine', 'pug');

app.get('/',(req,res)=>{
    res.render('index',{title:'Truong DZ'});
});

app.listen(port,()=>{
    console.log('server is runing');
});