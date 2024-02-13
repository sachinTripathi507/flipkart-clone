import mongoose from 'mongoose';

export const Connection=async(username,password)=>{
    const url=`mongodb+srv://${username}:${password}@cluster0.9pchd1j.mongodb.net/?retryWrites=true&w=majority`;
    try {
        
       await mongoose.connect(url)
        console.log('database connected succesfully');
        }

     catch (error) {
        console.log('database error',error.message);
    }
}
// export default Connection;