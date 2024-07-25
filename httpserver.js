const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('This is a server page');
    }
    if(req.url === '/about'){
        res.end("This is a about page");
    }
    res.end(`
        <h1>Oops!!!</h1>
        <p>The requested page doesn't exist</p>  `)
        
    
})

server.listen(5000)