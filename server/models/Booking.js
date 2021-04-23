const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    
    booking_date: {
        type: String,
        required: true
    },
    
    booking_start:{
      type: String,
      required: [true, 'Enter start date'],
    },

    booking_end: {
      type: String,
      required: [true, 'Enter start date'],
    },user_id:{
      type: String,
      trim: true,
      lowercase: true
    }


});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;