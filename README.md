L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

soluzione

1.aggiungo al html un elemento con classe grid x
2.dichiaro una funzione x
3.dichiaro una variabile dentro la funzione a cui assegno la creazione di un elemento "div" che conterra il quadrato x
4.assegno la classe square all'elemento precedentemente creato x
5.restituisco il quadrato contenuto nella variabile creata precedentemente x
6.creo un bottone nell html x
7.recupero il bottone dal dom x
6.recupero l'elemento aggiundo poc'anzi che conterra la griglia x
9.assegno un evento click al bottone x
7.eseguo un ciclo for di 100 iterazioni per creare una griglia 10x10 x
8.dichiaro una variabile "currentsquare" a cui assegno la funzione x
9.aggiungo un evento click al quadrato x
10. aggiungo la classe clicked a cui aggiungo 2 metodi: "this" e "toggle" x
11.assegno a "currentsquare" un incremento + 1 x
12.appendo il quadrato creato dentro la griglia x
