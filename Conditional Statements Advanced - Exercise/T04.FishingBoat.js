function boat(input) {
 
    let budget = Number(input.shift());
    let season = input.shift();
    let fisherCount = Number(input.shift());
 
    let discount = 0;
    let finalPrice = 0;
 
    switch (season) {
 
        case 'Spring': boatPrice = 3000;break;
 
        case 'Summer': boatPrice = 4200;break;
 
        case 'Autumn': boatPrice = 4200;break;
 
        case 'Winter': boatPrice = 2600;break;
 
        default: '';
 
    }
 
    if (fisherCount <= 6) {
 
        discount = 0.10;
 
    } else if (fisherCount <= 11) {
 
        discount = 0.15;
 
    } else {
 
        discount = 0.25;
 
    }
 
    //changed code
    finalPrice = boatPrice - (boatPrice * discount);
 
    if (fisherCount % 2 == 0 && season !== 'Autumn') {
 
        finalPrice *= 0.95;
 
    }
    //changed code
    
    if (budget >= finalPrice) {
 
        console.log(`Yes! You have ${(budget - finalPrice).toFixed(2)} leva left.`)
 
    } else {
 
        console.log(`Not enough money! You need ${Math.abs(budget - finalPrice).toFixed(2)} leva.`)
 
    }
}
boat(["3600",
"Autumn",
"6"])
