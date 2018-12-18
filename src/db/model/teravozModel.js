const mongoose = require('../config')
const Schema = mongoose.Schema

const TeravozSchema = new Schema({
  type: {
    type: String,
    required: 'O tipo do delegate é obrigatorio'
  },
  call_id: {
    type: String,
    required: 'O ID da chamada é obrigatorio'
  },
  code: {
    type: String,
    required: 'O código é obrigatorio'
  },
  direction: {
    type: String
  },
  our_number: {
    type: String
  },
  their_number: {
    type: String
  },
  their_number_type: {
    type: String
  },
  timestamp: {
    type: String
  },
  actor: {
    type: String
  },
  number: {
    type: String
  },
  destination: {
    type: String
  }
})

module.exports = mongoose.model('Teravoz', TeravozSchema)
