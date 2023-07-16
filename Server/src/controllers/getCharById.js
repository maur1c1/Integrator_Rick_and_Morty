// const axios = require('axios');

// const getCharById = (res, id)=>{

//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data=>{
//         let obj = {
//             id : data.id,
//             name: data.name,
//             species: data.species,
//             origin: data.origin.name,
//             image: data.image,
//             status: data.status
//         }

//         res.writeHead(200, {"Content-type": "application/json"}).end(JSON.stringify(obj))
//     }).catch( err => res.writeHead(500, {"Content-type": "text/plain"}).end(`El pesonaje con id: ${id} no fue encontrado`))
// }

// module.exports = getCharById;

/////////////////////////**promises and axios**/////////////////////////////

// const URL = 'https://rickandmortyapi.com/api/character/';
// const axios = require('axios');

// const getCharById = (req, res)=>{

//     const { id } = req.params;
        
//         axios(`${URL}/${id}`)
//         .then(response => response.data)
//         .then(({status, name, species, origin, image, gender}) => {                  //Se puede hacer un destructuring de data

//             if(name){ //id siempre va a estar dentro de data, pero para identificar correctamente usamos name

//                 const character = {
//                     id, 
//                     name,
//                     species, 
//                     origin, 
//                     image,
//                     gender, 
//                     status
//                 }
                
//                 return res.status(200).json(character)
//             }

//             return res.status(404).send("Not found");
//         })
//         .catch(error => res.status(500).send(error.message))
// }

/////////////////////////async-await///////////////////////////////


const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');

const getCharById = async (req, res)=>{

        try {
                const {id} = req.params;
                const {name, species, origin, image, gender, status} = (await axios(`${URL}/${id}`)).data;
                const character = { id, name, gender, species, origin, image, status}

                return character.name ?
                res.status(200).json(character) :
                res.status(404).send('Not Found')
        } catch (error) {
                res.status(500).send(error.message)            
        }
}

module.exports ={
    getCharById
} ;