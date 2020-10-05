/**
 * Đây là kiểu dữ liệu chuỗi, nội dung được 
 */



console.log('File javascript');
console.log("Courses");
console.log("Hom nay 'troi dep qua'");
console.log('Hom nay "troi dep qua"');

// kiểu dữ liệu
var x = 5
var y = 6

// kiểu dữ liệu 
var check =true
var uncheck = false

let name;

//block scope
var newname = 'Anna'
let newAge = 20
function getName() {
    newname = "Long"
    let newAge = 30
    
}
getName()
console.log(newname)

// Viết một hàm tính tổng 2 số:
function Sum(m,n){
    console.log(`Tổng của 2 số ${m} và ${n} là: ${m+n}`)
}
Sum(5,5)
Sum(4,6);

document.write('xin chao \n');
document.write('xin chao');

function squareOfNumber(x){
    return Math.pow(x, 2);
}

