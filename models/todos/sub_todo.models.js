import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  complete: {
    type: String,
    default: true
  },
  createBy: {
    type: mongoose.Schema.Types.objectId,
    ref: 'User'
  }
}, {timestamps: true});

export const subTodo = mongoose.model("subTodo", subTodoSchema);