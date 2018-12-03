import mongoose from 'mongoose';

const Subject = mongoose.model('Subject')

const list = () => (
  new Promise((resolve, reject) => {
    Subject.find({}).populate({
      path: 'Program'
    }).exec((err, subjects) => {
      if (err) reject(err)
      resolve(subjects)
    })
  })
)

export {
  list
}