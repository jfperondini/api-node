const logger = function (req, res, next) {
    console.log('log:', `${req.method} request received for ${req.url}`);
    console.log('log:', req.body);          
    //res.send = function(body) {console.log('log:', JSON.stringify(body));};
    next();
};

export default logger