// let a = 5;
// let b = 10;
// let x = -b/a;
// console.log("phương trình có nghiệm x= " + x);


//giải phương trình bậc 2
let a = 1;
let b = 4;
let c = 3;
let delta = b*b - 4*a*c
let x1 = (-b + Math.sqrt(delta))/2*a
let x2 = (-b - Math.sqrt(delta))/2*a
if (delta > 0 ){
 console.log("Phương trình có nghiệm 2 nghiệm phân biệt là: "  + "x1: " + x1 + "  x2: " + x2  )
}