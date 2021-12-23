/* PROBLEMA QUE ESTAMOS RESOLVIENDO
        1. Hacer una peticion a nuestra API
        2. Obtener cuantos elementos tiene de personajes
        3. Acceder al primer personaje
        4. Obtener la ubicacion en la que se encuentra
        5. Saber en que dimension se encuentra
*/

const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(err => console.error(err))