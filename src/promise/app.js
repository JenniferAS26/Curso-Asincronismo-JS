/* ESTRUCTURA DE LA PROMESA -> ES6
    const algoVaAPasar usamos arrow functions {
        me va a retornar una nueva promesa, me permite pasarle dos argumentos (si se resuelve, si se rechaza) arrow function {
            validacion (si esto es verdadero) {
                si se resuelve mandamos algo que nos diga hey todo OK
            } si no se resuelve {
                mandamos un mensaje de rechazo 
            }
        }
    }
    ejecutamos: algoVaAPasar()
        .then(mostramos la respuesta en este caso en consola)
        .catch(capturamos el error)

// creamos nuestro script en nuestro package para correr este programa
*/

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoooops!')
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 3000)
        } else {
            const error = new Error('Whoooops!'); // muy importante para debuggear
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

// para correr varias promesas al tiempo
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.error(err)
    })