// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।

function multipication(a, b, c) {
    const result = a * b * c;
    return result;
}
const result1 = multipication(6, 9, 18)
console.log(result1);


// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

let obj = { name: 'farhan', age: 22, profetion: 'js Developer' }
console.log(obj);
obj.profetion = 'React Developer';
console.log(obj);
obj['profetion'] = 'Node js Developer'
console.log(obj);