const {Router} = require('express');
const {apiKey: token} = require('../config');
const MessageService =require('../services/messageService');

function messageApi (app) {
    const router = Router()
    app.use(router)
    const messageService = new MessageService();

    router.post('/api/test', (req,res) => {
        if(!req.query.apiKey || req.query.apiKey !== token ) {
            res.json({
                error:true,
                message: "invalid Api Key"
            })
        }else if(!req.body) {
            res.json({
                error:true,
                message: "please, send a message and number"
            })
        } else {
            const { message, number} = req.body;
            res.status(200).json({
                message: 'Message sended',
                id: 'SMe61a04576a244694993d344ad763cc91',
            })
        }
    })

    router.post('/api/message',async (req,res) => {
        if(!req.query.apiKey || req.query.apiKey !== token ) {
            res.json({
                error:true,
                message: "invalid Api Key"
            })
        }else if(!req.body) {
            res.json({
                error:true,
                message: "please, send a message and number"
            })
        } else {
            const { message, number} = req.body;
            const sendedMessage = await messageService.sendMessage({number,body: message})
            
            res.status(200).json({
                message: 'Message sended',
                id: sendedMessage,
            })
        }
    })
}

module.exports = messageApi