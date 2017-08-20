import express from 'express'

import config from 'src/config'
import router from './middleware/router'

const port = config.get('APP_PORT')
const app = express()

app.use(express.static('build'))
app.get((req, res, next) => {
  console.log(req.path)
  next()
})

app.use('/', router)

// move to middleware
app.use((req, res, next) => {
  const err = new Error(`Not Found ${req.url}`)
  console.log(err)
  next(err)
})

app.use((err, req, res, next) => {
  console.log('error', err)
  res.status(500).send(err)
})

app.listen(port, () => console.log(`Server running on port: ${port}`))
