import { ButtonListener } from '../utilites/ButtonListener.js';

document.addEventListener("DOMContentLoaded", function () {
    const buttonListener = new ButtonListener('Gkk1sG', {
        click: () => {

            console.log("Sending message to secure Server as API system")

        },
    });
});
