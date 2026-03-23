const verificaReq = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token){
            return res.status(401).json({ message: "Token não fornecido" });
    };

    if( token !== `Bearer ${process.env.ADM_TOKEN}`){
        return res.status(403).json({ message: 'Acesso Negado!'})
    };

    next();
}

export default verificaReq;