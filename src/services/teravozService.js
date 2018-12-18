const Teravoz = require('../db/model/teravozModel')
var request = require('request')

const respondeStandyBy = function (callId, destination) {
  const urlTeraVoz = 'https://api.teravoz.com.br/actions'
  console.log(urlTeraVoz)
  const acesso = Buffer.from('felipe:123456').toString('base64')
  console.log(acesso)
  const teravozPost = new Teravoz()
  teravozPost.type = 'delegate'
  teravozPost.callId = callId
  teravozPost.destination = destination

  console.log(teravozPost)

  request.post({
    url: urlTeraVoz,
    headers: {
      'Authorization': 'Basic ' + acesso
    },
    body: teravozPost,
    json: true
  }, function (err, res, body) {
    if (err) {
      console.log(err)
    }
  })
}

exports.recebeDelegate = function (req, res) {
  const teravozReq = new Teravoz(req.body)

  teravozReq.save(function (err, teravoz) {
    if (err) {
      res.send(err)
    }
    res.send(teravoz)
  })

  if (teravozReq.type === 'call.standby' && teravozReq.their_number) {
    console.log('passou aqui')
    respondeStandyBy(teravozReq.callId, '023')
  }
}
