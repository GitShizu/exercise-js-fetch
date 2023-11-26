// Studiati come funzionano le API di https://jsonplaceholder.typicode.com/.
// Crea una pagina HTML in cui, dopo aver richiesto dei post all’API, vengono create delle card nel documento: per ogni card mostra titolo e contenuto.



window.addEventListener('load', () => {
    const container = document.getElementById('container');
    const printFigures = (objects) => {
        objects.forEach((obj) => {
            container.innerHTML += `
            <figure>
                <h3>${obj.title}</h3>
                <p>${obj.body}</p>
            </figure>`;
        })
    }

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((objArray) => objects = objArray)
        .catch(error => { console.error(error) })
        .finally(()=>{printFigures(objects)})
})

