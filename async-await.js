

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

const myMessage = async () => {
    try{
        let result = await displayMessage();
        console.log("Result",result);
        console.log("I Will be executed after displayMessage call because I am inside of async await");
        let myName = await getMyName();
        console.log("name",myName);
    } catch(error){
        console.log(error);
    }
}

myMessage();

/**
 * OUTPUT:
 * 
 * Result Hello World
 * I Will be executed after displayMessage call because I am inside of async await
 * name Lakith Muthugala
 * 
 */