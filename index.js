require('./dist/wyrz')

// const http = require('http')
// const express = require('express')
//
// let app = express()
// let httpd = http.Server(other)
//
// httpd.on('request', function (request, response) {
//   if (!response.finished) {
//     app.call(httpd, request, response)
//   }
// })
//
// app.use('/', (req, res) => {
//   res.end('express')
// })
//
// httpd.listen(8080)
//
// function other (request, response) {
//   console.log(request.url)
//   if (request.url.indexOf('/other') !== -1){
//     response.end('other')
//   }
// }
