
exports.httpHandlers = {
    myAppApi: {
        GET: {
            function: myAppGetFunction
        },
        POST: {
            function: myAppPostFunction
        }
    }
};

function myAppPostFunction(request, response) {
    console.log('===============myServicePostFunction');
    let time =0;
    let v= setTimeout(function () {
        let today = new Date();
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        console.log('TIME:',time);
        response.sendOk({timeOut: time, status: 'success'});
    }, request.data.milisecond);
    console.log('V:',v);


}

function myAppGetFunction(request, response) {
    console.log('===============myServiceGetFunction');
    let today = new Date();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    console.log(time);
    response.sendOk({time, status: 'success'});
}