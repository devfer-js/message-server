require('dotenv').config();

module.exports  ={
    port: process.env.PORT || 3000,
    apiKey: process.env.API_KEY,
    sid:process.env.SID,
    authToken:process.env.AUTH_TOKEN,
    serverNumber:process.env.SERVER_NUMBER,
}