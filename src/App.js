import express from 'express';
import bodyParser from 'body-parser';
import ip from 'ip';
import http from 'http';

import mongoose from 'mongoose';
import './model';

import router from './Router';
import { MONGODB_URI as mongodbUrl } from './config/constant';

const app = express()
const port = process.env.PORT || 3000

const dbUrl = `${mongodbUrl}/student_plan_service`
const dbConfig = { useNewUrlParser: true, useCreateIndex: true, }

mongoose.Promise = global.Promise
mongoose.connect(dbUrl, dbConfig) /* connect to mongodb */

app.use(bodyParser.json()) /* middleware to parse body request */

router(app) /* router register */

const server = http.createServer(app)
server.listen(port, () => {
  console.log(`Starting node.js with express server on ${ip.address()}:${port}`)
  console.log(`connected to mongodb on ${dbUrl}`)
})
