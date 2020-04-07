const express=require('express');
const app=express();
const port =3000;

app.set('views', './views')
app.set('view engine', 'pug');

var users=[
    {id:0,name:'Truong'},
    {id:1,name:'Nhung'}
]

app.get('/',(req,res)=>{
    res.render('index',{title:'Truong DZ'});
});

app.get('/user',(req,res)=>{
    res.render('user/index',{users:users});
});

app.get('/user/search',(req,res)=>{
    let q=req.query.q;
    let userMatch=users.filter((user)=>{
        return user.name.toLowerCase().indexOf(q.toLowerCase())!== -1;
    });
    res.render('user/index',{users:userMatch,query:q});
});



app.listen(port,()=>{
    console.log('server is runing');
});