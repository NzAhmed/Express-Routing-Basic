/*
- download and install Node
- install express
    >npm i express
*/

const express = require('express')
const app = express()
/*
Route definition takes the following structure:

app.METHOD(PATH, HANDLER)
Where:
    app is an instance of express.
    METHOD is an HTTP request method, in lowercase.
    PATH is a path on the server.
    HANDLER is the function executed when the route is matched.
*/
// Respond with Hello World! on the homepage:
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// Respond to POST request on the root route (/), the application’s home page:
app.post('/', function (req, res) {
  res.send('Got a POST request')
})

// Respond to a PUT request to the /api/products route:
app.put('/api/products', function (req, res) {
  res.send('Got a PUT request at /api/products')
})

// Respond to a DELETE request to the /api/products route:
app.delete('/api/products', function (req, res) {
  res.send('Got a DELETE request at /api/products')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
