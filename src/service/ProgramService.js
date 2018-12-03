import mongoose from 'mongoose';

const Program = mongoose.model('Program')

const list = () => (
  new Promise((resolve, reject) => {
    Program.find({}).populate({
      path: 'school'
    }).exec((err, programs) => {
      if (err) reject(err)
      resolve(programs)
    })
  })
)

const save = body => (
  new Promise((resolve, reject) => {
    let program = new Program(body)

    rental.save((err, program) => {
      if (err) reject(err)
      resolve(program)
    })
  })
)

export {
  list, save
}