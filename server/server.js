const http = require("http");
let fs = require("fs");

http.createServer((req,res)=>{
    console.log(`server running on 8080`);
    if (req.url == "/"){
        fs.readFile('./server/index.html', (err,data) =>{
            res.writeHead(200,{'content-type':'text/html'});
            // const path=req.url;
            console.log(`request coming from ${req.url}`);
            res.write(data);
            res.end();
        });
    
    }
    else if(req.url=='/aboutus'){
        res.writeHead(200,{'content-type':'text/html'});
        // const path=req.url;
        console.log(`request coming from ${req.url}`);
        res.write("this is aboutus page");
        res.end();
    }
    else if(req.url=='/contact'){
        res.writeHead(200,{'content-type':'text/html'});
        // const path=req.url;
        console.log(`request coming from ${req.url}`);
        res.write("this is this is contact page");
        res.end();
    }
    else{
        res.writeHead(200,{'content-type':'text/html'});
            // const path=req.url;
            console.log(`request coming from ${req.url}`);
            res.write(`
                
                <h1>This is not your home!!!goo home</h1>
                <a href='/'>home</a>
                `);
            res.end();
    }

    }).listen(8080);