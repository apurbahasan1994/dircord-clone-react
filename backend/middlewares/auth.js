const jwt=require('jsonwebtoken');

const config=process.env;

const verifyToken=(req,res,next)=>{
    let token=req.body.token||req.query.token||req.headers['authorization'];
    if(!token)
    {
        return res.status(403).json({'message':'Token is required for authentication'});
    }
    try
    {
        token=token.replace(/^Bearer\s+/,"");
        const decoded=jwt.verify(token,config.TOKEN_KEY);
        req.user=decoded;
    }
    catch(e)
    {
        return res.status(401).json({'message':'Invalid token'});

    }
    return next();
}

module.exports=verifyToken;