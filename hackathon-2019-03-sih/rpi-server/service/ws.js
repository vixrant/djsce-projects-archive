var WebSocketClient = require('websocket').client; 


var client = new WebSocketClient();


module.exports.getDoctors  = () => new Promise((resolve,reject) => {
    client.connect('ws://healthmonitor-signalserver.herokuapp.com');
    client.on('connect', (conn) => {
        conn.send(JSON.stringify({
            type: "getDoctors"
        }));
        conn.on('message', function incoming(message) {
            console.log(message);
            
            if(!message.data)
                message.data = [];
            
            if(message.data.length === 0)
            message.data = [
                {
                    name:'Nishay',
                    phone:'+917045413818'
                }
            ]
                
            resolve(message.data);
            client.abort();
        });
        
    });
    client.on('connectFailed', function(error) {
        console.log('Connect Error: ' + error.toString());
    });
    
    
});