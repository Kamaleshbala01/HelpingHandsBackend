const mongoose = require('mongoose');

let connection;

function connect() {
    
    connection = mongoose.createConnection(`mongodb+srv://kamaleshravi54:kamaleshbala@helpinghands.rtoaiou.mongodb.net/?retryWrites=true&w=majority&appName=HelpingHands`);

    connection.on('open', () => {
        console.log("MongoDB Connected");
    });

    connection.on('error', (err) => {
        console.log("MongoDB Connection error:", err.message);
        setTimeout(connect, 10);
    });
}

connect();

module.exports = connection;
