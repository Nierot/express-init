import express from 'express'
import { port, route } from './settings.json'
import bodyParser from 'body-parser'
import cors from 'cors'
import hello from './src/routes/hello'
const morgan = require('morgan')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

app.get(`${route}`, hello)

app.listen(port, () => console.log('Listening on http://localhost:' + port))
