let responseSuccess = function(message,data){
    return { Success: true, Message: message,Data:data,Error:null };
}

let responseFailure = function(message,data){
    return { Success: false, Message: message,Data:null,Error:data };
}

exports.responseSuccess  = responseSuccess;
exports.responseFailure  = responseFailure;
