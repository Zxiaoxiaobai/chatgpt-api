import express from 'express'
import 'express-async-errors'
import { send_message } from './send_message.mjs'
import { catch_error } from './catch_error.mjs'

const app = express()
app.use(express.urlencoded({ extended: false }))

app.post('/send_message', send_message)
app.use(catch_error)

app.listen(3000, () => console.log('Listening on http://localhost:3000'))
