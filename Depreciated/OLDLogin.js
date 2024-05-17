import { Utilites } from '../frontend/net.hetmastertje/Utilites/Utilites.js'

document.addEventListener("DOMContentLoaded", function () {
    const textBox = document.getElementById("Information");

    const logging_in = async (data_href) => {
        document.querySelector('.login-box').style.display = 'none';

        await Utilites.wait(2310);
        window.location.href = data_href; // Redirect the user
    };



    document.getElementById("loginForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent form submission if default

        // Logging Part
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        try {
            const requestBody = {
                Username: username,
                Password: password
            };

            if (username === '' || password === '') {
                return;
            }

            const response = await fetch('api/auth', {
                method: 'POST',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                const data = await response.json();
                const data_href = data.href;

                logging_in(data_href);
            } else {
                console.log("Invalid Credentials")
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    });

});


// Turn code into OOP