// export const addFav = (character) => {
//     return {
//         type: 'ADD_FAV',
//         payload: character
//     }
// }
import axios from "axios";

// ACTION | addFav
// export const addFav = (character) => {
//    const endpoint = 'http://localhost:3001/rickandmorty/fav';
//    return (dispatch) => {
//       axios.post(endpoint, character).then(({ data }) => {
//          return dispatch({
//             type: 'ADD_FAV',
//             payload: data,
//          });
//       });
//    };
// };

////// async awayt //////
export const addFav = (character)=>{

   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   
   return async (dispatch) =>{

         try {
            
            const { data } = await axios.post(endpoint, character);
            return dispatch({
               type: 'ADD_FAV',
               payload: data
            })
         } catch (error) {

            console.log(error);
         }
   }
   
   }



// export const removeFav = (id) => {
//     return {
//         type: 'REMOVE_FAV',
//         payload: id
//     }
// }
/////////////////////////////promises//////////////////////
// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: 'REMOVE_FAV',
//              payload: data,
//        });
//        });
//     };
//  };

 ////////////////////////async-await//////////////////////

export const removeFav = (id) =>{
   

   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {

      try{
      const { data } = await axios.delete(endpoint);
       
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data
            })
   }catch(error){
      console.log(error);
   }
 }
}

export const filterCards = (gender) => {
    return {
        type: 'FILTER',
        payload: gender
    }
}


export const orderCards = (order) => {
    return {
        type: 'ORDER',
        payload: order
    }
}