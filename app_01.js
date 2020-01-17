//luodaan serveri
const http = require("http");

//createserver ottaa kuuntelijan parametrina
//req = pyyntö, res = paluuarvo
const server = http.createServer( (req, res)=>{
    console.log(req);
});

//annetaan portinnumero
server.listen(8080);