const express = require('express')
const app = express()
const port = process.env.PORT || 80
app.get('/', (req, res) => {
    res.type('html')
    res.sendFile(__dirname+'/public/index.html');
})
app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('Server Expresso ☕ About')
})
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 Not found ☕_☕')
})
app.listen(port,
    () => console.log(`Expresso ☕ is on Port ${port} Ctrl + C to Stop `))