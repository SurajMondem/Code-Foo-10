module.exports = {
    ...require('./auth')
};

module.exports.notFound = (request, response, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
};

module.exports.errorHandler = (error, request, response, next) => {
    response.status(error.status || 500).json({
        error: error.message || 'Something went Wrong'
    })
};
