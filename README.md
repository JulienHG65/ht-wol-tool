# ht-wol-tool

It's tool to send WakeOnLan packet with HTTP GET request.

## Requirements
Runs last version of NodeJS and NPM

## Install NodeJS and NPM
### Windows
Download last LTS version with official website : https://nodejs.org/en/download/
### Linux Debian
With super-user privileges : 
```sh
apt update
apt install nodejs
apt install npm
```
## Install ht-wol-tool
```sh
git clone https://github.com/JulienHG65/ht-wol-tool.git #to download package
cd ht-wol-tool 
npm install #install all NPM packages
```
## Configuring

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

## Start and use

To start, use this command :
```sh
node index.js
```

To send WakeOnLan Magic packet, with web browser, use this pattern of url : 
```
http://127.0.0.1:port/{hostame}
```
Example to start PC1 : 
```
http://127.0.0.1:port/pc1
```

