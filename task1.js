// Deliver the solution in this format

// ar - array of numbers
// n - length of ar
// k - ar[i]+ar[j] should be devided by this number
function divisibleSumPairs(n, k, ar) {
  var numberOfPairs = 0;

  for (var i = 0; i <= ar.length - 1; i++) {
    for (var j = 0; j <= ar.length - 1; j++) {
      if (i < j && (ar[i] + ar[j]) % k === 0) {
        numberOfPairs++;
      }
    }
  }

  return numberOfPairs;
}

var result = divisibleSumPairs(3, 2, [1,8,5]);
console.log(result);

/*
  1. Deklarisanje funkcije
  2. Pozvali smo funkciju sa argumentima (3, 2, [1,8,5])
  3. U funkciji se desava sledece:
  - Deklarisemo varijablu numberOfPairs i dajemo joj vrednost 0
  - Pokrecemo for petlju (loop) sa sledecim argumentima:
      var i=0 - deklarisemo brojac kao varijablu i dajemo mu pocetnu vrednost 0
        i <= ar.length - 1, u ovom slucaju 0 <= 2 i uslov je zadovoljen pa se izvrsava ono sto je unutar viticastih zagrada for loop-a
    - Pokrece se jos jedan for loop u kome deklarisemo brojac j sa pocetnom vrednoscu j=0 i sa uslovom j<=ar.length-1, tj 0 <= 2
    i posto je uslov 0<=2 zadovoljen desava se ono sto je unutar tog for loopa
    Tj desava se sledece:
        ispitujemo da li su zadovoljena oba uslova:
            1. i<j
            2. (ar[i] + ar[j])%k === 0 tj da li je zbir deljiv sa k
        U nasem slucaju to su vrednosti
            1. 0<0
            2. (1+1)%2 === 0
        Posto oba uslovi nisu zadovoljeni nece se desiti povecavanje varijable numberOfPairs pa ta varijabla i dalje ima vrednost
        numberOfPairs === 0
    - Nakon sto se sve desilo unutar for loopa sa brojacem j, kad je j=0, desava se j++ odnosno j=j+1 odnosno povecava se vrednost 
    varijable j za 1, pa j ima vrednost 1 odnosno j=1;
    Da li je j<=ar.length-1 tj 1<=2? Jeste, i desava se opet for loop
    ar=[1,8,5]
    i=0
    j=1
    numberOfPairs=0
            1. 0<1
            2. (1 + 8)%2 === 0
    numberOfPairs=0
    i=0
    j=2
    Da li je j<=ar.length-1 tj 2<=2? Jeste, i desava se opet for loop
            1. 0<2
            2. (1 + 5)%2 === 0 tj da li je zbir deljiv sa k
    Posto su zadovoljena oba uslova desava se ono unutar uslova if
        odnosno desava se
            numberOfPairs++
    I posto nema vise nista unutar loopa sa indeksom j, desava se j++
    i=0;
    j=3;
    numberOfPairs = 1;
    j<=ar.length-1
    3<=2

    Da li je j<=ar.length-1 tj 3<=2? Nije, i ne desava se opet for loop
    S obzirom da se sve unutar for loopa sa indexom i desilo ===> i++
    - Ispitujemo i<=ar.length-1 odnosno 1<=2
    Opet se desava ovaj for loop sa indeksom j kao i u prethodnom koraku

    Nastavite do kraja
    [1,8,5]
    i=1
    j=0
            1. 1<0
            2. (ar[i] + ar[j])%k === 0 tj da li je zbir deljiv sa k
    j++

    i=1
    j=1
            1. 1<1
            2. (ar[i] + ar[j])%k === 0 tj da li je zbir deljiv sa k
    j++

    i=1
    j=2

            1. 1<2
            2. (8 + 5)%2 === 0 tj da li je zbir deljiv sa k
    j++
    j<=ar.length-1 ? 3<=ar.length-1

    i++
    i=2
    j=0

    i=2
    j=1

    i=2
    j=2

    ///

    i=3
    j=3
    numberOfPairs=1

    return numberOfPairs ==> return 1 u ovom slucaju


        
        ****
        arr.length - broj elemenata niza arr
        arr[0] - vrednost elementa u nizu arr sa indeksom 0
        arr.length - 1 je index poslednjeg elementa u nizu arr
        arr[arr.length - 1] - vrednost poslednjeg elementa u nizu arr
        ****
      */
