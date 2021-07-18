module.exports = (socket) => {
    try {
        console.log("conectado");
        socket.on("code", (data, callback) => {
            socket.broadcast.emit("code", data);
        });
    } catch (error) {
        console.log(error.message);
    }
};