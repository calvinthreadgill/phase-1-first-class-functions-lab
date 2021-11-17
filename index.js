// Code your solution in this file!
//arguments:


function returnFirstTwoDrivers(drivers) { 
    const firstTwo = drivers.slice(0,2);
    return firstTwo;

}

function returnLastTwoDrivers(drivers) {
    const lastTwo = drivers.slice(-2);
    return lastTwo;
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(){
        return integer*integer
    }
}
let fareDoubler = fare => fare*2;
let fareTripler = fare => fare*3;

function selectDifferentDrivers(drivers, func) {
   return func(drivers);
}
