const http = require('http');
const port = "8080";

// const server = http.createServer (function (req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<h1 style="color:blue" >Hello, world!</h1>');
//     res.end();
// })

const server = http.createServer (function (req, res) {
    const Url = req.url.toLowerCase();
    console.log(req.url);

    if (Url === "/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1 style="color:blue" >this is homepage!</h1>');
    } else if (Url === "/about"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1 style="color:blue" >this is about page!</h1>');
    }  else if (Url === "/youtube"){
        res.writeHead(301, { location: 'https://www.youtube.com'})

    }else if (Url ==="/data"){

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({
            name: "Aiman",
            age: 27,
            city: "Alor Setar"
    }))} else {
        res.writeHead(404, {'Content-type': 'text:html'});
        res.write('Eror 404! page not found')
    }
    
    res.end();
})

server.listen(port);

console.log('Starting')