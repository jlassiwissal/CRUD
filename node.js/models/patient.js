import mongoose from "mongoose";

const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    prénom:{
        type: String,
        required: true
    },
    maladie:{
        type: String,
        required: true
    }
});

export default mongoose.model('Users', User);