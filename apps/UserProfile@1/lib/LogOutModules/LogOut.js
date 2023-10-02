exports.LogOut = (request, response) => {
    request.session.getSession((err, result) => {
        if (result.samadUsername != "visitor") {
            request.session.remove(function (err, result) {
                if (result) {
                    response.setHeader("set-cookie", request.cookie = [])
                    response.write("Successfully LogOut User  ")
                    response.end()
                } else {
                    response.sendFail(err)
                }
            })
        } else {
            response.writeHead(400, {
                "Content-Type": "application/json"
            });
            response.write("We don't have any user ** LogIn ** on system ")
            response.end()
        }
    })



}