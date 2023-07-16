// const http = require('http');
// const PORT = 3001;
// // const characters = require("./utils/data");
// const getCharById = require('./controllers/getCharById');

// http.createServer((req, res)=>{

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // if(req.url.includes("/rickandmorty/character")){

//     //     console.log(req.url.split('/').at(-1));
//     //     let id = req.url.split("/").at(-1);

//     //    // let characterFilter = characters.filter(elem => elem.id === Number(id))  /retorna un array

//     //    let characterFilter = characters.find(char => char.id === Number(id))

//     //    res.writeHead(200, {"Content-type": "application/json"}).end(JSON.stringify(characterFilter))
//         const {url} = req;

//         if(url.includes('/rickandmorty/character')){

//             let id = url.split("/").pop();
//             getCharById(res, id)

//         }
          
//     // }

// }).listen(PORT, "localhost")

/////////////////////////////////////////////////////////////////

const express = require('express');
const server = express();
const router = require('./routes/index');
const morgan = require('morgan');
const PORT = 3001;

server.use(express.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use('/rickandmorty', router);

server.listen(PORT, ()=>{
    console.log("Server raised un port: " + PORT);
});













