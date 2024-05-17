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
                const data_status = data.status;
                const data_href = data.href;
                const data_token = data.token;
                const data_instance = data.instanceToken;
                const data_UUID = data.UUID;

                const sessionToken = data.sessionToken
                const sessionID = data.sessionID

                sessionStorage.setItem('SessionToken', sessionToken);
                sessionStorage.setItem('SessionID', sessionID);

                // expire cookies in 30 days
                let date = new Date();
                date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
                let expires = date.toUTCString();

                document.cookie = `UUID=${data_UUID}; expires=${expires};`
                document.cookie = `InstanceToken=${data_instance}; expires=${expires};`;
                // IMPORTANT!!!!!!!!!!! change this to use Secure cookie

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