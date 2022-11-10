// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// creo prima i numeri da 1 a 100

const contenitore = document.querySelector(".container");



for ( let i = 1; i <= 100; i++ ) {
    

    const element = `<div class="box box--${i}">${i}</div>`;
    contenitore.innerHTML += element;


    // divisibili 3
    if ( i % 3 === 0) {
        

    // divisibili 5
    }   else if ( i % 5 === 0 ) {
        

    }


};


// 