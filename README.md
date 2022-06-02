# HTTP WakeOnLan Tool
It's tool to send WakeOnLan packet with HTTP GET request.

## Summary
[Requirements](#Requirements) 

[Install NodeJS and NPM](#InstallNJSNPM) 

    -[Windows](#Win) 

    -[Linux Debian](#Deb) 

[Install ht-wol-tool](#InstallHWT) 

[Configuring](#Configuring) 

[Start and use](#StartUse) 

    -[Launch 1 computer](#LaunchOne) 

    -[Launch all computers](#LaunchAll) 
    

## Requirements <a id="Requirements"></a>
Runs last version of NodeJS and NPM

## Install NodeJS and NPM <a id="InstallNJSNPM"></a>
### Windows <a id="Win"></a>
Download last LTS version with official website : https://nodejs.org/en/download/
### Linux Debian <a id="Deb"></a>
With super-user privileges : 
```sh
apt update
apt install nodejs
apt install npm
```

## Install ht-wol-tool <a id="InstallHWT"></a>
```sh
git clone https://github.com/JulienHG65/ht-wol-tool.git #to download package
cd ht-wol-tool 
npm install #install all NPM packages
```

## Configuring <a id="Configuring"></a>
In index.js, you can edit this informations : 
```js
//=====================CONFIG=====================
devices = [//host is a custon name using to send wol query
    {host:"pc1",mac:"8c:ec:4b:8c:fa:de"},
    {host:"pc2",mac:"8c:ec:4b:8c:fd:34"},
]
port=8080 //http port to listening
intervalPing = 30 //Set ping interval
//================================================

```

## Start and use <a id="StartUse"></a>
To start, use this command :
```sh
node index.js
```

### Launch 1 computer <a id="LaunchOne"></a>
To send WakeOnLan Magic packet to a specific host, with web browser, use this pattern of url : 
```
http://127.0.0.1:port/host/{hostame}
```
Example to start PC1 : 
```
http://127.0.0.1:port/host/pc1
```
### Launch all computers <a id="LaunchAll"></a>
To send WakeOnLan Magic packet to all hosts, with web browser, use this url : 
```
http://127.0.0.1:port/all
```
