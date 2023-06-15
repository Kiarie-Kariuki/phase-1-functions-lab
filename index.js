
var hq;
var feet
var location = 43; 50; 34; 

function distanceFromHqInBlocks(location,hq){
   hq = 42

    return Math.abs(location - hq);
};
console.log (distanceFromHqInBlocks);

function distanceFromHqInFeet(blocks){ 

  return Math.abs(blocks - 42) * 264;

};

console.log (distanceFromHqInFeet(43));
console.log (distanceFromHqInFeet(50));
console.log (distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, end){
    return Math.abs(end - start) * 264;

}
console.log (distanceTravelledInFeet(43,48));
console.log (distanceTravelledInFeet(50,60));
console.log (distanceTravelledInFeet(34,28));

function calculatesFarePrice(start, destination){
    let fare;

    let dist = Math.abs(destination - start) * 264;
        

    if(dist <= 400){
        return fare = 0;
    }else 
    if(dist > 400 && dist <= 2000){
        return fare = (dist - 400) * 0.02;
    }else 
    if(dist > 2000 && dist <= 2500){
        return fare = 25;
    }
    else{
        return fare =  "cannot travel that far";    
    }
    
}
fare;

console.log (calculatesFarePrice(43,48));
console.log (calculatesFarePrice(34,32));
console.log (calculatesFarePrice(50,58));
console.log (calculatesFarePrice(34,24));