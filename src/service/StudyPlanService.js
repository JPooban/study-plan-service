import mongoose from 'mongoose';

const StudyPlan = mongoose.model('StudyPlan')

const list = () => (
  new Promise((resolve, reject) => {
    StudyPlan.find({} , (err, plan) => {
      if (err) reject(err)
      resolve(plan)
    })
  })
)

const save = (data) => (
  new Promise((resolve, reject) => {
    let plan = new StudyPlan(data)

    plan.save((err, plan) => {
      if (err) reject(err)
      StudyPlan.find({}, (err, plans) => {
        if (err) reject(err)
        resolve(plans)
      })
    })
  })
)

export {
  list,
  save
}