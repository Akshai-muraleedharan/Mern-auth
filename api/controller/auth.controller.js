import User from '../Model/user.auth.js'

export const Signup = async(req,res) =>{
    
    const {username,email,password} = req.body;

try {
    const newUser = new User({username,email,password})
    await newUser.save()
    res.status(201).json({message:"user created successfully"})
} catch (error) {
    res.status(500).json(error.message)
}

   

}