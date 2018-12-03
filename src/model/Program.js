import mongoose from 'mongoose';

const Schema = mongoose.Schema

let ProgramSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  degreeTitle: {
    type: String,
    required: true
  },
  programCode: {
    type: String,
    required: true,
    unique: true
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'School'
  }
}, {
  timestamps: { createdAt: 'createdDate', updatedAt: 'timestamp' }
})

export default mongoose.model('Program', ProgramSchema)