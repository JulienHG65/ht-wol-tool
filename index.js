//=====================CONFIG=====================
devices = [
    {host:"pc1",mac:"8c:ec:4b:8c:fa:de"},
    {host:"pc2",mac:"8c:ec:4b:8c:fd:34"},
]
port=8080
intervalPing = 30
//================================================

//======================CODE======================
const wol = require('wol'); 
const { exec } = require("child_process");
const express = require('express')
const app = express()
function pg(host){//function to ping host
    exec(`ping -c 1 ${host}`)
}


for(i=1;i<=254;i++){//ping all hosts on netwprk
    pg("192.168.1."+i)
}
setInterval(function(){//ping with interval
    for(i=1;i<=254;i++){
        pg("192.168.1."+i)
    }
    
},intervalPing*1000)


app.get('/host/:host', function (req, res) {
    let r = res
    for(i=0;devices[i];i++){
        if(req.params.host.toLowerCase()==devices[i].host.toLowerCase()){
            wol.wake(devices[i].mac, function(err, res){
                if(res===true){
                    console.log(`${devices[i].host} is awake`);
                }
                r.send(res)
            });
            break
        }
    }
})
app.get('/all', function (req, res) {
    for(i=0;devices[i];i++){
        let host = devices[i].host
    
	    wol.wake(devices[i].mac, function(err, res){
            if(res===true){
                console.log(`${host} is awake`);
            }
	    });
    }
    res.send(true)
})

app.listen(port,function(){
    console.log(`Listen HTTP port is ${port}`)
    console.log(`Ping all devices every ${intervalPing} secondes`)

})
