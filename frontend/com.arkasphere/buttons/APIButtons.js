import { ButtonListener } from '../utilites/ButtonListener.js';

document.addEventListener("DOMContentLoaded", function () {
    const buttonListener = new ButtonListener('Gkk1sG', {
        click: (event) => {
            event.preventDefault();

            const APIRequest = new APIRequest
        },
    });
});


//  Usage
// document.addEventListener("DOMContentLoaded", function () {
//     const buttonListener = new ButtonListener('Gkk1sG', {
//         click: () => {
//             alert('Button clicked!');
//         },
//         mouseover: () => {
//             console.log('Mouse over button');
//         },
//         mouseout: () => {
//             console.log('Mouse out of button');
//         }
//     });
// });
