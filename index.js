const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ['Asad', 'Moni', 'Sabed', 'Oishee', 'Jannat', 'sumaya']


app.get('/', (req, res) =>{
    const fruit = {
        product: 'ada',
        price: 220
    }
    res.send(fruit)
})

app.get('/users/:id',(req,res) =>{
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
})


// post
app.post('/addUser', (req, res) => {
    // save to dataBase
    const user = req.body;
    user.id = 20;
    res.send(user);
})


app.listen(3000, () => console.log('Listenting to portt 3000'));