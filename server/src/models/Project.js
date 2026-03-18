import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  coverImage: { type: String },
  tags: [String],
  liveUrl: String,
  githubUrl: String,
  order: { type: Number, default: 0 },
  published: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Project', projectSchema);
