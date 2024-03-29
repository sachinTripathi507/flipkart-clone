import User from '../model/user-schema.js';

export const userLogIn = async (request, response) => {

    const {username, password} = request.body;
   
    try {
        let user = await User.findOne({ username: username, password: password });
        
        if (user) {
            // console.log(user);
           return response.status(200).json(`${username} login successful`);
        } else {
           return response.status(401).json('User does not exist or invalid login');
        }
     } catch (error) {
        console.error('Error during login:', error);
        return response.status(500).json('Internal server error');
     }
     
}

export const userSignup = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).json({ message: 'User already exist'});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({ mesage: user });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}


