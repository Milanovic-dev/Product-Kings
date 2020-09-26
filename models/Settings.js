const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingsSchema = new mongoose.Schema({
  general: {
    showLoading: Boolean
  },
  product: {type: Schema.Types.ObjectId, ref: 'Product', required: true}
});

module.exports = mongoose.models.Settings || mongoose.model('Settings', SettingsSchema);