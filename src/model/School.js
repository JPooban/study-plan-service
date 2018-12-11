import mongoose from 'mongoose';

const Schema = mongoose.Schema

let SchoolSchema = new Schema({
  schoolCode: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  programs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Program'
    }
  ]
}, {
  timestamps: { createdAt: 'createdDate', updatedAt: 'timestamp' }
})

export default mongoose.model('School', SchoolSchema)
