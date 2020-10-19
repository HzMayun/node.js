//自动打开浏览器
const{exec} = require("child_process");


function open(url){
    const platform = process.platform;
    let cmd = "";
    switch(platform){
        case "win32":
            cmd = 'start';
            break;
        case "darwin":
            cmd = 'open';
            break;
        case "linux":
            cmd = 'xdg-open';
            break;
    }
    exec(cmd+' '+url)
}
module.exports=open;