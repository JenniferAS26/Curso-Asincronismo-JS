let XMLHttpRequest =  require('xmlhttprequest').XMLHttpRequest;

/** FUNCION QUE DA VIDA A LAS LLAMADAS DE MI API */
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest(); // instancia que hicimos, hicimos un shortcut
        // hacer un llamado a una url // abrir una conexion con get
        xhttp.open('GET', url_api, true); // shortcut.open('METODO', url, activar el asincronismo (por defecto esta en true))
        // Vamos a escuchar lo que va a hacer esta conexion, vamos a estar escuchando un elemento shortcut.onreadystatechange
        xhttp.onreadystatechange =  (() => {
            // validacion si el estado en el que se encuentra es satisfactorio
            if (xhttp.readyState === 4) {
                (xhttp.status === 200) 
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error("Error " + url_api))  
            }
        });
        xhttp.send(); // Se envia la solicitud
    });
}

module.exports = fetchData;