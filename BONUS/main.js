// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// creo prima i numeri da 1 a 100

// prendo come riferimento il contenitore
const contenitore = document.querySelector(".container");


// determino i numeri
for ( let i = 1; i <= 100; i++ ) {
    
    // disibili 15
    if (( i % 3 === 0) && ( i % 5 === 0 )) {

        contenitore.innerHTML += `<div class="box fizzbuzz">FizzBuzz</div>`

    } else if ( i % 3 === 0 ) { //divisibili per 3

        contenitore.innerHTML += `<div class="box fizz">Fizz</div>`

    } else if ( i % 5 === 0 ) { //divisibili per 5

        contenitore.innerHTML += `<div class="box buzz">Buzz</div>`

    } else { //numeri normali

        contenitore.innerHTML += `<div class="box">${i}</div>`

    }


};


// 