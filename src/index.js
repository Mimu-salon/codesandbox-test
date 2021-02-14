// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// // letは上書きはできるが再宣言はできない

// const val3 = "const変数";
// console.log(val3);

// const val4 = {
//   name: "みむら",
//   age: 33
// };

// val4.name = "Mimu";
// val4.address = "Tokyo";
// console.log(val4);

// // constで定義したオブジェクトはプロパティの変更が可能

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");

// console.log(val5);
// // constで定義した配列はプロパティの変更が可能

// const name = "みむら";
// const age = 33;

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// const myProfile = {
//  name: "みむら",
//  age: 33,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`
// console.log(message2);

// const myProfile = ['みむら', 33];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;

// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("みむら");

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];

// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const nameArr = ["田中", "山田", "みむら"];
// for
// 第1引数：何回目かを管理するindex
// 第2引数：ループを終了する条件
// 第3引数：1回のループが終わるごとにindexを加算していく処理

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
// 配列をループして処理する使い方
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);
// 新しい配列を生成する使い方
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNumArr = nameArr.map((name) => {
//   if (name === "みむら") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNumArr);

// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formatterNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formatterNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};

console.log(checkSum(100, 40));
