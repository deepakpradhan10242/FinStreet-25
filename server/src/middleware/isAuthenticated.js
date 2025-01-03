
async function isAuthenticated(req,res){
    try{
        return res.json({success:true});
    }catch(error){
        res.json({
            success:false,
            message:error.message
        });  
    }
}

export default isAuthenticated;