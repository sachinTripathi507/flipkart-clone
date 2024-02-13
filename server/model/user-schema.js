import mongoose,{Schema} from "mongoose";

const usereschema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 8,
    
    },
    phone:{
        type: Number,
        required:true,
    },
    
})

const User = mongoose.model('user',usereschema);
export default User;
