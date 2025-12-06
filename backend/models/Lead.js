const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: false },
  service: { type: String, required: false },
  location: { type: String, required: false },
  serviceDate: { type: String, required: false },
  product: { type: mongoose.Schema.Types.Mixed },
  quantity: { type: Number },
  status: { 
    type: String, 
    enum: ['pending', 'contacted', 'in_progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt field before saving
leadSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Lead', leadSchema); 