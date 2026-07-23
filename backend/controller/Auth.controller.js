import User from "../model/Auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const signup = async (req, res) => {
    try {
        const { fullname, email, mobile, password } = req.body;
        

        const emailExist = await User.findOne({ email });
        if (emailExist) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        const mobileExist = await User.findOne({ mobile });
        if (mobileExist) {
            return res.status(400).json({
                message: "Mobile number already in use"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const payload = {
            fullname,
            email,
            mobile,
            password: hashedPassword
        };

        const user = await User.create(payload);

        res.status(201).json({
            message: "User signup successfully",
            
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

const login=async(req,res)=>{

    try {
        const {email,password}=req.body

        const emailexist=await User.findOne({email})
        if(!emailexist)
            return res.status(400).json({
        message:"email not exist signup first "
            })
            const payload = {
    id: emailexist._id,
    fullname: emailexist.fullname,
    email: emailexist.email,
    mobile:emailexist.mobile
};

            const isLogin = await bcrypt.compare(password, emailexist.password);
          if(!isLogin)
            return res.status(400).json({
        message:"invalid credentials"})

      const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXPIRES_IN
    }
);

res.status(200).json({message:"login successs" ,token})


        
    } 
    catch (err) {
        res.status(500).json({
            message:err.message
        })
    }
    
}

export { signup,login };