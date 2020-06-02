exports.segundaFuncao = (req, res, next) => {
    const msg = 'segunda função executada';
    console.log(msg);
    const finalResponse = req.body + msg;
    res.json(finalResponse);
}