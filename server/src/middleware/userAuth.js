import jwt from "jsonwebtoken";

async function userAuth(req, res,next) {
  const {token} = req.cookies;

  if (!token) {
    return res.status(401).json({success:false, message: "authorization denied , Login Again" });
  }

  try{
    const tokenDecode = jwt.verify(token,process.env.JWT_SECRET_KEY);
    
    if(tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    }else{
      return res.json({success:false, message: "authorization denied , Login Again" });
    }

    next();

  }catch(error){
    res.json({success:false,message:error.message});
  }
}

export default userAuth;
