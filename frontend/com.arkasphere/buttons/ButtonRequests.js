class API {
    async request(UUID, InstanceToken, SessionToken, SessionID) {
        try {

            const requestBody = {
                UUID: UUID,
                instanceToken: InstanceToken,
                sessionToken: SessionToken,
                sessionID: SessionID

            }

            if (UUID === '' || InstanceToken === '' || sessionToken === '' || sessionID === '') {
                // Kick the player of the page and remove all of his data if any of these are not true
                // UUID and Instance token are going to be send to the API as the headers  and then a response will come back if they dont match they get kicked out
                // this is a very aggressive system

                return;
            };

            const response = await fetch('api/')


        } catch (error) {
            throw new Error('Error while logging in: ' + error.message);
        }
    }
}