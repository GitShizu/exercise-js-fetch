// Studiati come funzionano le API di https://restcountries.com/.
// Crea una pagina HTML in cui l’utente può inserire del testo ed effettuare una ricerca di paesi a partire dalla lingua. Dopo che l’utente ha scritto del testo e dato conferma d’invio (con un bottone), interroga l’API e crea una lista di cards, di cui ciascuna card è un risultato della ricerca. Ogni card rappresenta un paese cercato a partire dalla stringa inserita dall’utente (una lingua parlata nel paese).

window.addEventListener('load', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');
    const container = document.getElementById('container');
    button.addEventListener('click', ()=>{
        fetch(`https://restcountries.com/v3.1/lang/${input.value}`)
            .then(response=>console.log(response))
    })
})