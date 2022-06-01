//=====================CONFIG=====================
devices = [
    {host:"pc1",mac:"8c:ec:4b:8c:fa:de"},
    {host:"pc2",mac:"8c:ec:4b:8c:fd:34"},
]
port=8080
intervalPing = 30
const ping = require('ping');
const wol = require('wol'); 
const express = require('express')
const app = express()
//================================================

//======================CODE======================
function pg(host){//function to ping host
    ping.sys.probe(host);

}


for(i=1;i<=254;i++){//ping all hosts on netwprk
    pg("192.168.1."+i)
}
setInterval(function(){//ping with interval
    for(i=1;i<=254;i++){
        pg("192.168.1."+i)
    }
    
},intervalPing*1000)


app.get('/:host', function (req, res) {
    let r = res
    for(i=0;devices[i];i++){
        if(req.params.host.toLowerCase()==devices[i].host){
            wol.wake(devices[i].mac, function(err, res){
                r.send(res)
                if(res===true){
                    console.log(`${devices[i].host} a bien été réveillé`);
                }
            });
            break
        }
    }
})

app.listen(port,function(){
    console.log(`Le port d'écoute HTTP est le ${port}`)
    console.log(`Un ping de l'ensemble des postes sera fait toutes les ${intervalPing} secondes`)

})
