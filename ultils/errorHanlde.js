export const errorHandlerNotFound = (req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
}

export const errorHandler =  (err, req, res) => {
    return res.status(err.status || 500).json({
        errors:{
            message: err.message
        }
    })
}