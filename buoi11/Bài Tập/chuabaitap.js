1
function convertFToC(doF){
    return `${doF}\xB0F : ${(doF * 1.8) + 32 }\xB0C`;
}

function convertCToF(doC){
    return `${doC}\xB0C : ${(doC - 32) / 1.8 }\xB0F`;
}

2
function theKy(soNam) {
    let TheKy = Math.ceil((soNam)/100 );
    console.log(TheKy);
}

function kiemTraTheKy(nam) {
    if (nam % 100 == 0) {
        console.log(`Nam ${nam} thuoc the ky thu ${nam/100}`)
    } else {
        console.log(`Nam ${nam} thuoc the ky thu ${Math.floor(nam/100) + 1}`)
    }
}

3
function catChuoi(x) {
    let y;
    if (typeof x == "string") {
      y = x;
    } else {
      y = x.toString();
    }
  
    return y.substring(0, 10) + "...";
}

4
function capFirstCharacter(a){
    let b = a.toString().split(" ");
    for (let i = 0; i < b.length; i++){
        b[i] = b[i].toLowerCase();
        b[i] = b[i].charAt(0).toUpperCase()+b[i].slice(1);
    }
    return b.join(" ");
}

//Cho một số nguyên, kiểm tra nó là số âm, số 0, hay số dương
function songuyen(a){
    if(a>0){
        return "a la so duong"
    }
    else{
        return "a la so am"
    }
}

//Cho điểm 3 môn Toán, Lý, Hoá. Tính điểm trung bình các môn và xếp loại học lực.

//Biết: 
//0 đến bé hơn 3 là yếu
//3 đến bé 6.5 là trung bình
//6.5 đến bé 8 là khá
//8 đến bằng 10 là giỏi
function tinhTrungBinh(a,b,c){
    if(a<0 || a>10 || b<0 || b>10 || c<0 || c>10){
        return 'Diem nhap vao khong hop le'
    }
    let diemTB = (a+b+c)/3;
    if(diemTB>=0 && diemTB<3){
        return 'hoc luc yeu' 
    }
    else if(diemTB>=3 && diemTB<6.5){
        return 'hoc luc trung binh' 
    }
    else if(diemTB>=6.5 && diemTB<8){
        return 'hoc luc kha' 
    }
    else(diemTB>=8 && diemTB<=10)
        return 'hoc luc gioi'
}

function getDay(){
    switch (new Date().getDay()) {
        
        case 0:
          day = "Monday";
          break;
        case 1:
           day = "Tuesday";
          break;
        case 2:
          day = "Wednesday";
          break;
        case 3:
          day = "Thursday";
          break;
        case 4:
          day = "Friday";
          break;
        case 5:
          day = "Saturday";
          break;
        case 6:
          day = "Sunday";
      }
    return 
}