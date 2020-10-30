var person ={
    name: 'Hoang Anh',
    age: 20,
    hi: function(){
        alert('Xin chao minh ten la' +this.name + 'nam nay minh' + this.age + 'tuoi')
    },
}

// mảng là 

var array =[1,2,3,4,5,6,7,8,9,10];
array.length
for (var i=0 ;i< array.length; i++){
    console.log(array[i])
}

var total =0
for (var i=0; i<array.length; i++){
    total=total+array[i];
}
console.log(total)

var total =0;
for (var i=0; i<array.length; i++){
    total=total+array[i]**2;
}
console.log(total)
//lap qua phan tu cua mang de xem co bao nhieu so la chan
var chan =0
for (var i=0; i<array.length; i++){
    if (array[i]%2 == 0)
    chan=chan+1 
}
console.log("so chan la:" + chan)
//xem gia tri lon nhat cua mang
var max =array[0]
for (var i=0 ; i<array.length; i++){
    if (max<array[i]) {
        max=array[i]
    }
}
console.log('max la:' + max)