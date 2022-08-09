
// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 

const num1 = 10;
const num2 = 30;

const result4 = num1 + num2;

if (result4 % 4 === 0) {
    console.log('This is right path.');
} else if (result4 % 6 === 0) {
    console.log('This is another path.');
} else {
    console.log('It is not devided 4 & 5.');
}


// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে ? পারলে সেই কোড লিখে ফেলো।
let number = 7;

while (number <= 19) {
    if (number % 2 === 1) {
        // console.log(number);

    }
    number++
}


// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

let array = [34, 62, 74, 27, 28, 83, 83, 72, 84]
const findLength = array.length;
array[3] = 120;
console.log(array);
array.push(230, 500)
console.log(array);
array.pop()
console.log(array);
// console.log(findLength);





