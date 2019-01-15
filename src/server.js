import {json, urlencoded} from 'body-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import config from './config'
import itemRoues from './resources/item/item.router'
import listRoutes from './resources/list/list.router'
import userRoutes from './resources/user/user.router'
import {connect} from './utils/db'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/item', itemRoues)
app.use('/api/list', listRoutes)
app.use('/api/user', userRoutes)

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
