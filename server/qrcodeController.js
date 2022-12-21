
var QRCode = require('qrcode')

exports.scanQrcode = (req ,res)=>{

    const url = req.body.url;
    if(url.length === 0){
        res.send('Empty Data')
    }

    QRCode.toDataURL(url , function(err,url){
        console.log(url);
        res.send(url)

    })


}