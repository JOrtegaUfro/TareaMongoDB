import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true,
        min: 1,
    },
    message:{
        type:String,
        required:true,
        min: 5,
    }
});

const messageModel = mongoose.model('Message', messageSchema);
export default messageModel;