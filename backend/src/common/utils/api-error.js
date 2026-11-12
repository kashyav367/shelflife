class ApiError extends Error{

    constructor(statusCode, message){
        super(message);

        this.statusCode = statusCode
    }

    static badRequest(message= "bad Request"){
        return new ApiError(400, message)
    }

     static forbidden(message= "Forbidden"){
        return new ApiError(403, message)
    }

     static notFound(message= "not Found"){
        return new ApiError(404, message)
    }

}

export default ApiError