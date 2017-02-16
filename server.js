var express=require("express");

var app=express();

var moment=require("moment");

app.get("/:timestamp",function(req,res){
    
    var time=moment(req.params.timestamp,'MMMM DD, YYYY', true);
    if(!time.isValid())
    {
            time=moment.unix(req.params.timestamp);
    }
    
    if(!time.isValid())
    {
         res.json({
        'humanReadable': null,
        'unix': null
        });
    }
    
     res.json({
    'humanReadable': time.format('MMMM DD, YYYY'),
    'unix': time.format('X')
  });
    
});

app.listen(8080,function(){
    console.log("listening on port 8080");
});