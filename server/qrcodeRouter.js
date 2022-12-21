const express = require('express')
const {scanQrcode} = require('./qrcodeController')
const qrRouter = express.Router()


qrRouter.post('/scanQrouter' , scanQrcode)

module.exports = qrRouter 
