// Studiati come funzionano le API di https://v2.jokeapi.dev/.
// Crea una pagina HTML in cui l’utente può decidere quante barzellette visualizzare. Dopo che l’utente ha deciso e dato conferma d’invio (con un bottone), interroga l’API e crea una lista di barzellette che contiene tante barzellette (a tema Programming) quante ne ha richieste l’utente.

window.addEventListener('load', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');
    const container = document.getElementById('container');
    const printJoke = (obj) => {
        const ul = document.createElement('ul');
        if (obj.jokes) {
            obj.jokes.forEach(({ type, setup, delivery, joke }, i) => {
                let jokeText = type === 'single' ? joke : `${setup}
                ${delivery}`;
                ul.innerHTML += `<li><b>Joke${i + 1}</b>
                    <p>${jokeText}</p>
                </li>`
            })
        } else {
            let { type, setup, delivery, joke } = obj;
            let jokeText = type === 'single' ? joke : `${setup}
            ${delivery}`;
            ul.innerHTML += `<li><p>${jokeText}</p>
    </li>`
        }
        container.appendChild(ul);
    }
    button.addEventListener('click', () => {
        fetch(`https://v2.jokeapi.dev/joke/Programming?amount=${Number(input.value)}`)
            .then(response => response.json())
            .then(object => obj = object)
            .catch(error => { console.error(error); })
            .finally(() => { printJoke(obj);
            input.value= '';  });
    })
})

