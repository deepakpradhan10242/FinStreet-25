async function logout(req,res){
    try {
        res.clearCookie('token',{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", 
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })

        return res.json({success:true,message:"Logout successfully"});

    } catch (error) {
        return res.status(500).json({
            success:false,
            message: error.message
        });
    }
}

export default logout;