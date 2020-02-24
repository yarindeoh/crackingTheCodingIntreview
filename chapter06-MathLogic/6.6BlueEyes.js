/**
 *  A bunch of people are living on an island, when a visitor comes with a strange
order: all blue-eyed people must leave the island as soon as possible. There will be a flight out at
8:00pm every evening. Each person can see everyone else's eye color, but they do not know their
own (nor is anyone allowed to tell them). Additionally, they do not know how many people have
blue eyes, although they do know that at least one person does. How many days will it take the
blue-eyed people to leave? 

Solution: 
Best case - one man:
if he sees that no one has blue eyes he will go on the same night ! - takes one night 

2 mans:
If someone sees 1 with blue eyes he assumes that the island has one or 2 blue eyes
the other man assume the same also
if after one night no one leaves - the island has 2 persons and they will go on the second day

more than 2:
same patten - will go on n nights
 */

function getOptimalError(numOfIngredients, numOfInputs, distances) {
    let currentErr;
    let distancesArr = distances.split("");
    let middleIndex = Math.floor(distancesArr / 2);
    // until mid arr should be sorted
    // from mid arr should be reversed sorted
    let firstArr = distancesArr.splice(0, middleIndex);
    firstArr.sort();
    distancesArr.sort().reverse();
    let optimalArr = firstArr.concat(distancesArr);
    
    // calc min error
     for(let i = 0; i < numOfInputs; i ++) {
            let midDistance = i < middleInput ? i : (numInput - i - 1);
            let optimalDistance = optimalArr[i] - midDistance;
            currentErr += Math.sqrt(optimalArr[i] - optimalDistance);
     }
    return currentErr;
}
