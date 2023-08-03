

exports.instaLogin = async (req, res, next) => {
    
    console.log('working', req.params, req.query);
    res.status(200).json({status: 'success'});
}