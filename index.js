// Code your solution in this file!
const returnFirstTwoDrivers = function (randomArray){
    const newArray = randomArray.slice(0, 2);
    return newArray;
}

const returnLastTwoDrivers = function(randomArray){
    const newArray = randomArray.slice(-2);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function fareMultiplier(fare){
        return fare * multiplier;
    };
}

const fareDoubler = function (fare){
    return createFareMultiplier(2)(fare);
}

const fareTripler = function (fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(nameArray, driverFunction){
    return driverFunction(nameArray);
}