async function logout(request,response){
    return response.status(200).json({
        message : "Autharized!",
        success : true
    })
}

module.exports = logout