import express from 'express';

import * as school from './controller/SchoolController';
import * as program from './controller/ProgramController';
import * as plan from './controller/StudyPlanController';

export default (app) => {
  let router = express.Router()

  router.get('/actuator/health', (req, res) => {
    res.send({ status: 'UP' })
  })

  router.route('/schools')
    .get(school.list)
    .post(school.save)

  router.route('/programs')
    .get(program.list)
    .post(program.save)

  router.route('/study-plans')
    .get(plan.list)
    .post(plan.save)


  router.get('', (req, res) => {
    let endpoints = []
    router.stack.filter(r => r.route).map(r => (
      endpoints = [...endpoints, { path: r.route.path, methods: Object.keys(r.route.methods) }]
    ))
    res.status(200).send(endpoints)
  })

  app.use('/v1', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  }, router)
}
