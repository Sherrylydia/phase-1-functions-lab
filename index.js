// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
const headquarters=42;
return Math.abs(pickupLocation-headquarters);
}
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(pickupLocation){
    const blocks=distanceFromHqInBlocks(pickupLocation); 
    const feetPerBlock=264;
    return blocks * feetPerBlock;
}
console.log(distanceFromInFeet(50));

function distanceTravelledInFeet(start, destination){
    const feetPerBlock=264;
    const blocksTravelled=Math.abs(start-destination);
    return blocksTravelled * feetPerBlock;
}
console.log(distanceTravelledInFeet(50, 42));

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot for distances between 400 and 2000 feet
    } else if (distance > 2000 && distance < 2500) {
      return 25; // Flat fare of $25 for distances over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Rides over 2500 feet are not allowed
    }
  }
  console.log(calculatesFarePrice(50, 42))