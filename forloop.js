// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

let array = [21, 73, 93, 27, 59, 96, 62, 52, 60, 26];

for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
}

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

let array1 = [21, 73, 93, 27, 59, 96, 62, 52, 120, 48, 82, 93, 36, 263, 932, 942, 60, 26];

function findNumber(number) {
    const array = [];
    for (let i = 0; i < number.length; i++) {
        const num = 80;
        if (number[i] > num) {
            array.push(number[i])
        }
    }
    return array
}

const result = findNumber(array1);
console.log(result);



