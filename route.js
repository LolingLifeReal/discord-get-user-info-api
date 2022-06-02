const express = require('express')
const route = express.Router();
const { Client, Intents } = require('discord.js');
const config = require('./config.json');

route.post('/getuser/:id', (req, res) => {
    const { id } = req.params;
    const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
    console.log(client)
    client.users.fetch(id).then((user) => {
        res.send(user)
        client.destroy()
    }).catch(console.error);
    client.login(config.token)
});

route.post('/', (req, res) => {
    res.send('Hello World!')
})


module.exports = route;