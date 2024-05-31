const http = require('http')
const fs = require('fs')
const path = require('path')
const port = '8888'

const indexHtml = fs.readFileSync(path.join(__dirname, 'pages', 'index.html'), 'utf8')
const projectHtml = fs.readFileSync(path.join(__dirname,  'pages', 'project.html'), 'utf8')
const errorHtml = fs.readFileSync(path.join(__dirname, 'pages', '404.html'), 'utf8')
const styleCss = fs.readFileSync(path.join(__dirname, 'public', 'style.css'), 'utf8')
const scriptJs = fs.readFileSync(path.join(__dirname, 'public', 'script.js'), 'utf8')

let visitorCount = 0

const server = http.createServer(function (req, res) {

    const url = (req.url).toLowerCase()

    if (url === '/style.css'){
        res.writeHead(200, {"Content-Type" : "text/css"})
        res.write(styleCss);
        res.end()
    } else if (url === '/script.js'){
        res.writeHead(200, {"Content-Type" : "text/javascript"})
        res.write(scriptJs);
        res.end()
    } else if (url === '/'){
        visitorCount++;
        console.log('visitor count =', visitorCount)
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write(indexHtml);
        res.end()
    } else if (url === '/project'){
        console.log(projectHtml)
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write(projectHtml);
        res.end()
    } else {
        res.writeHead(404, {"Content-Type" : "text/html"})
        res.write(errorHtml);
        res.end()
    }

});

server.listen(port, function(){
    console.log(`website server is listening on port ${port}`)
})