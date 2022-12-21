const express = require('express')
const app = express()
const cors = require('cors')
const qrRouter = require('./qrcodeRouter')
const PORT = 8080

app.use(express.json()) // to pass the json data
app.use(cors()); // it aviod cros policy error
app.use('/api' , qrRouter)




app.listen(PORT , console.log(`this port is running on ${PORT}`))