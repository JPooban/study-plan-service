import mongoose from 'mongoose';

const School = mongoose.model('School')

const list = () => (
  new Promise((resolve, reject) => {
    School.find({}).populate({ path: 'programs' }).exec((err, schools) => {
      if (err) reject(err)
      resolve(schools)
    }) 
  })
)

const save = (data) => (
  new Promise((resolve, reject) => {
    let school = new School(data)

    school.save((err, school) => {
      if (err) reject(err)
      School.find({}, (err, schools) => {
        resolve(schools)
      })
    })
  })
)

export {
  list, save
}
