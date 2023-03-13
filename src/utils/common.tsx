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

function numberWithCommas(number:number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const isObjectEmpty = (obj:{}) => Object.keys(obj).length === 0;

export {
    throttle,
    numberWithCommas,
    capitalizeFirstLetter,
    isObjectEmpty
}