bai1
function convertFToC(doF){
    return `${doF}\xB0F : ${(doF * 1.8) + 32 }\xB0C`;
}

function convertCToF(doC){
    return `${doC}\xB0C : ${(doC - 32) / 1.8 }\xB0F`;
}

bai2
function theKy(soNam) {
    let TheKy = Math.ceil((soNam)/100 );
    console.log(TheKy);
}

bai3
function catChuoi(x) {
    let y;
    if (typeof x == "string") {
      y = x;
    } else {
      y = x.toString();
    }
  
    return y.substring(0, 10) + "...";
}

bai4
function capFirstCharacter(a){
    let b = a.toString().split(" ");
    for (let i = 0; i < b.length; i++){
        b[i] = b[i].toLowerCase();
        b[i] = b[i].charAt(0).toUpperCase()+b[i].slice(1);
    }
    return b.join(" ");
}
