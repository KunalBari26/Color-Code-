function componentToHex(c){
    let hex = c.toString(16);
    return hex.length==1 ?'0'+ hex : hex;
}

function rgbToHex(r,g,b){
    return '0'+componentToHex(r)+componentToHex(g)+componentToHex(b);

}

export default rgbToHex;