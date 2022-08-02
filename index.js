const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello developers. Welcome to my world. I am using nodemon for auto restart')
});

const users = [
    { id: 1, name: 'sabuj', email: 'sasabuj321@gmail.com' },
    { id: 2, name: 'shithe', email: 'shithe321@gmail.com' },
    { id: 3, name: 'punno', email: 'punno321@gmail.com' },
    { id: 4, name: 'apso', email: 'apso@gmail.com' },
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }

    console.log('query', req.query)

})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id);
    res.send(user)
})


app.post('/user', (req, res) => {
    console.log('request disi', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('i can run node', port)
})