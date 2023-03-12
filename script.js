// comparison of variables
let a = 2 + 2 / (3 * 4 - 10) + 5 % 2;
console.log(a);

let b = 3 + 3 * (10 / 2 + 3) - 8 % 3;
console.log(b);

let c = a === b;
console.log(c);

// volume and area of the cylinder

alert('Calculation of the volume and area of the base of the cylinder');

let r = +prompt('Enter radius cylinder');
let h = +prompt('Enter height cylinder');

let v = Math.PI * (r * r) * h;
console.log(v);

let s = Math.PI * (r * r);
console.log(s);

alert('The volume of a cylinder with base area *S = ' + s + '*' + ' radius *R = ' + r + '*' + ' and height *H = ' + h + '*' + ' equals: V = ' + v);

