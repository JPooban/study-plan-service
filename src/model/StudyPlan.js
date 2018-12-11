import mongoose from 'mongoose';

const Schema = mongoose.Schema

let StudyPlanSchema = new Schema({
  school: {
    type: String,
  },
  program: {
    type: String
  },
  degree: {
    type: String
  },
  semester: {
    type: String
  },
  academicYear: {
    type: String
  },
  schedules: [
    {
      subjectTitle: {
        type: String
      },
      courseCode: {
        type: String
      },
      section: {
        type: String
      },
      time: {
        from: {
          type: Date
        },
        to: {
          type: Date
        }
      },
      room: {
        type: String
      }
    }
  ]
}, {
  timestamps: { createdAt: 'createdDate', updatedAt: 'timestamp' }
})

export default mongoose.model('StudyPlan', StudyPlanSchema)