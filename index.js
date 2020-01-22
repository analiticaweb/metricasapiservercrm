const express = require('express');
const bodyParser = require('body-parser');
var createsend = require('createsend-node');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// var auth = { apiKey: 'Lum/xCtzlsE/TskMv12rBLRN78Lo998VUwEl0nZsKvUv+lF2deMMU7xKeur0XYlMiGElj4KGaw3z1/O8jndJ+Ol3mA9g9+//Adzc5zQJJAwzWSy4lGmqCpfF17zZ5dTKKYJo8C2OEyfqEbZG1Bfqeg==' };
// var api = new createsend(auth);
// var listId = '418a0ee16a6d70e132cd99f7f509db74' // The ID of the list


var auth = { apiKey: 'idoUWtsrU/zgeegoO4GA5BGqfK+EViSYpKVqfUkI8hv1/H//0qDUZOjEQGwQUna2Qjfvxaan9rqDltN6JHLZ2UMVNJliw5vjfK70nJp+COTv92uVB9v6qDYJ5/uSi0lm6IWGtk/wdz/0AWqE+lvN5A==' };
var api = new createsend(auth);
var listId = '7f101d5c8761891d851e826c52b27e06' // The ID of the list

app.get("/", (req, res) => {
    // let query = JSON.parse(Buffer.from(req.query.query, 'base64').toString());
    var user = {
        EmailAddress: req.query.email,
        CustomFields: [
            { Key: req.query.campaign, Value: '1' }
        ]
    };
    // console.log({req})
    api.subscribers.updateSubscriber(listId, user.EmailAddress, user, (err, response) => {
        if (err) {
            res.send('err')
        } else {
            res.redirect(req.query.destiny)
        }
    });
})



app.listen(port, () => {
    console.log("Servidor inicilizado en ", port)
});