const {sid,authToken,serverNumber} = require('../config')
const client = require('twilio')(sid,authToken)

class MessageService {
    async sendMessage ({number, body}) {
        const message = await client.messages.create({
            to: number,
            from: serverNumber,
            body
        })
        return message.sid
    }
}

module.exports = MessageService