var  expr=require('express');
var app=expr();
app.get('/',(req,res)=>{
    var obj={
        'name':'Gurleen',
        'section':'D1720'
    }
    res.send(obj.name+":"+obj.section);
});
app.get('/page1',(req,res)=>{
    res.send("here i am in page1");
});
app.get('/page2',(req,res)=>{
    res.send("here i am in page2");
});
app.listen(3000);