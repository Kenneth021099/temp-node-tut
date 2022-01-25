const http = require('http')

const server = http.createServer((req, res)=>{
if (req.url === '/'){
   return res.end('WELCOME TO HOMEPAGE! ^_^')
}
if (req.url === '/about') {
   return res.end('HERE IS THE SHORT HISTORY')
}

res.end(`
<h1>Opps WRONG URL</h1>
<p>We can't find what you looking for</p>
<a href="/">back home></a>
`)
})

server.listen(5000)