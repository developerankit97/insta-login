

exports.instaLogin = async (req, res, next) => {
    console.log('working', req.params);
    res.status(200).json({status: 'success'});
}