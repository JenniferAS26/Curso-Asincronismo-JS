/* PROBLEMA QUE ESTAMOS RESOLVIENDO
        1. Hacer una peticion a nuestra API
        2. Obtener cuantos elementos tiene de personajes
        3. Acceder al primer personaje
        4. Obtener la ubicacion en la que se encuentra
        5. Saber en que dimension se encuentra
*/

let XMLHttpRequest =  require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'

/** FUNCION QUE DA VIDA A LAS LLAMADAS DE MI API */
function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest(); // instancia que hicimos, hicimos un shortcut
    // hacer un llamado a una url // abrir una conexion con get
    xhttp.open('GET', url_api, true); // shortcut.open('METODO', url, activar el asincronismo (por defecto esta en true))
    // Vamos a escuchar lo que va a hacer esta conexion, vamos a estar escuchando un elemento shortcut.onreadystatechange
    xhttp.onreadystatechange = function (event) {
        // validacion si el estado en el que se encuentra es satisfactorio
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                // callback(error, resultado)
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error("Error " + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send(); // Se envia la solicitud
}

fetchData(API, function(error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2){
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3){
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})

/*      ESTADOS ->  Tienen 5 estados
                0. Inicializado
                1. Cargando
                2. Ya se ha cargado
                3. Descarga
                4. Completado valor numero 4

        STATUS EN EL CUAL SE ENCUENTRA
                -> Se ha completado la peticion pero no sabemos si es correcta
                    -> 200 Es Correcta, todo esta OK
                    -> 500 La peticion nos regreso el servidor que algo fallo
                    -> 400 No encontro algo
*/