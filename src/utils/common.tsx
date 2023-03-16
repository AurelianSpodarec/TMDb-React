import { configAdvertisement } from "@/config/advertisement";

function throttle (callbackFn:any, limit:number) {
    let wait = false;                  
    return function () {       
        if (!wait) {                  
            callbackFn.call();           
            wait = true;               
            setTimeout(function () {   
                wait = false;          
            }, limit);
        }
    }
}

// TODO: numbers.withCommas - a class?
function numberWithCommas(number:number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// TODO: text.capitalizeFirstLetter - maybe a class?
function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const isObjectEmpty = (obj:{}) => Object.keys(obj).length === 0;

function injectAdvertisement(originalResponse:any, results:any) {
    const randomIndex = Math.floor(Math.random() * results.length);
    const randomADIndex = Math.floor(Math.random() * configAdvertisement.length);
    const newResults = [
      ...results.slice(0, randomIndex),
      configAdvertisement[randomADIndex],
      ...results.slice(randomIndex)
    ];

    return { ...originalResponse, results: newResults }
}

export {
    throttle,
    numberWithCommas,
    capitalizeFirstLetter,
    isObjectEmpty,
    injectAdvertisement
}