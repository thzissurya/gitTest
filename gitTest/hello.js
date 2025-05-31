function multiplier(factor){
    return function(number){
    return number*factor
};
}

function mapArray(array, transform){
    const num= [];
    for(let i=0; i< array.length; i++){
        num.push(transform(array[i]));
    }
    return num;
}

const doublt= multiplier(2);
const triplr = multiplier(3);

const number= [1, 2, 3, 4, 5 ];
const doublenumber= mapArray(number, doublt);
const tripledNumber= mapArray(number, triplr);

console.log(doublenumber);
console.log(tripledNumber);