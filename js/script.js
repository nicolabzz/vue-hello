/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/ 
const vm = new Vue ( { //questa e' la VUE ISTANCE (o VUE MODELL per il VMMV)
    el: '#app',
    data: {
        h1Mess : 'Vue js is like MAGIC! Look at here!',
        img : 'img/Digital-art-head.jpg',
        newContainerCall : 'wowLookAtThatBro'
    }
});