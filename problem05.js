// step 10
let temperature = 25;
let isRaining = false;
let isSunny = true;

if ( temperature < 0 ){
    console.log ('heavy jacket')
}

else if ( temperature <=20 & isRaining === true ){
    console.log('raincoat and sweater')
}

else if (temperature > 20 & isSunny === true){
    console.log( 'T-shirt and sunglasses')
}
else {
    console.log('Regular Clothes')
}