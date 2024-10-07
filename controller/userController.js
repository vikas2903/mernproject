const User = require('../model/userModel.js');

const create = async (request, response) => {
    try {
        // Destructure the request body and ensure required fields are present
        const { name, email, password, phone, address } = request.body;

        // if (!name || !email || !password || !phone || !address) {
        //     return response.status(400).json({ message: "All fields are required" });
        // }

        // Check if the user with the same email already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return response.status(400).json({ message: "User already exists" });
        }

        // Create new user instance
        const newUser = new User({ name, email, password, phone, address });

        // Save the user data to the database
        const savedUser = await newUser.save();

        // Return success response with the saved user data
        return response.status(200).json({
            message: "User created successfully",
            user: savedUser
        });

    } catch (error) {
        console.error("Error creating user:", error); // Logging the error for debugging
        response.status(500).json({ message: "Internal server error" });
    }
}

const fetch = async (request,response)=>{
    try{
        const users= await User.find();
        response.status(200).json({
            message:"Users fetched successfully",
            users:users
        })
    }
    catch(error){
        response.status(500).json({message:"Internal server error"})
    }

}


module.exports = { create, fetch };
