import express from 'express'
import morgan from 'morgan'
import errorhandler from 'errorhandler'

import config from 'src/config'
import router from './middleware/router'

const port = config.get('APP_PORT')
const app = express()

app.use(express.static('build'))
app.get((req, res, next) => {
  console.log(req.path)
  next()
})

app.use(morgan('combined')) // Logger

app.use('/', router)

// move to middleware
app.use((req, res, next) => {
  const err = new Error(`Not Found ${req.url}`)
  console.log(err)
  next(err)
})

// only for development
if (!process.env.NODE_ENV === 'production') {
  app.use(errorhandler())
}

app.listen(port, () => console.log(`Server running on port: ${port}`))
