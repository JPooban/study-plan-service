import mongoose from 'mongoose';

const Schema = mongoose.Schema

let SubjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subjectCode: {
    type: String,
    required: true,
    unique: true
  },
  program: {
    type: Schema.Types.ObjectId,
    ref: 'Program'
  }
}, {
  timestamps: { createdAt: 'createdDate', updatedAt: 'timestamp' }
})

export default mongoose.model('Subject', SubjectSchema)