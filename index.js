const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express();
app.use(cors());

app.use(bodyParser.json());
// const rootCall(req, res) => res.send('Thank you very much');

const users = ["Asad","Moin", 'Sabed', 'Susmita', 'Sohana','Sabana'];
app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price:220
    }
    res.send(fruit);
});
// app.get('/fruits/banana', (req, res) => {
//     res.send({fruit: 'banana', quantity:1000, price:10000});
// })

app.get('/users/:id', (req, res) => {
    const id = (req.params.id);
    console.log(req.query.sort);
    const name = users[id];
    res.send({id, name});

})
//post 

app.post('/addUser', (req, res) => {
    // console.log('data received'), req.body;
    //save to database
    const user = req.body;
    user.id = 55
    res.send(user);
})

app.listen(4000, () => console.log('listening to port 4000'));


