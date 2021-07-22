var assert = ('assert');
let a,b, value;
a = 10;
b = 20;

value = a;
a=b;
b=value;


assert.equal(10,a);
assert.equal(20,b);
 console.log(value);
