
// Promise

const displayMessage = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Hello World");
        },3000)
    })
}

const getMyName = async () => {
    return "Lakith Muthugala"
}

const myMessage = () => {
    displayMessage().then(result => {
        console.log("Result",result)
    }).catch(error => {
        console.log(error);
    })

    // async function returs a promise.
    getMyName().then(result => {
        console.log("name",result);
    }).catch(error => {
        console.log(error);
    })

    console.log("I Will be executed before displayMessage call");
}

myMessage();

/**
 * OUTPUT:
 * 
 * I Will be executed before displayMessage call
 * name Lakith Muthugala
 * Result Hello World
 * 
 */