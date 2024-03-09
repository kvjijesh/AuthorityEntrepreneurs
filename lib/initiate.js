const config = require('../config.json');

async function initiateAuth(req, res) {
    const options = {
        requestType: "code",
        redirectUri: "http://127.0.0.1:3000/oauth/callback",
        clientId: config.clientId,
        scopes: [

            "contacts.readonly",
            "contacts.write"
        ]
    };

    return res.redirect(`${config.baseUrl}/oauth/chooselocation?response_type=${options.requestType}&redirect_uri=${options.redirectUri}&client_id=${options.clientId}&scope=contacts.readonly contacts.write locations/customFields.write locations/customFields.readonly`);
}

module.exports = initiateAuth;
