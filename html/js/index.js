// alert("hello world")
// console.log("hello world")

// 변수란 특정 값을 저장하는 공간
// abc = "abcdefg~~"

// 키워드 변수이름 = 값
// 키워드 : var, let, const

// var number = 5; // 변수의 선언과 할당이 동시에
// var number;

// // var 보다는 let을 권장한다.
// function aaa() {
//     let string = "가나다";
// }

// console.log(string);


// // string
// var number1; // 변수를 선언.
// number1 = 5; // 변수에 값을 할다한다.
// number1 = 6;

// let string = "가나다";
// string = "라마바";
// // let string = "라마바"

// const string2 = "가가가";
// // string2 ="aaaa";
// console.log(string2);


// // var let const
// // var : 재선언, 재할당 모두 가능
// // let : 재선언 불가능, 재할당 가능
// // const : 재선언 불가능, 재할당 불가능 

// let lll;
// console.log(lll);

// let firstName = "";
// let name = '';
// let 1Name = "";

// let var = "";

const variable = 1; // 상수

let number2 = 1;
let string3 = "aaaa";
// let string3 = "!";

// 문자열 선언 및 할당

var string = '1abc2';

var number = 5;
console.log(string + number);

let name = 'lily';
let hihi = '안녕하세요 ${name}입니다.';
console.log(hihi);

let hi = "안녕하세요 " + name + "입니다.";
console.log(hi);

let name1 = "홍길동";
let name2 = "성춘향";

let names = ["홍길동", "성춘향", "짱구"];
// 인덱싱
// 인덱스 : 0부터 시작!!!!!!!!!
console.log(names[0])
console.log(names[1])
console.log(names[2])

console.log(names.length);
// 배열의 길이를 출력, 배열의 길이 --> 배열 안에 저장되어 있는 값의 개수

names.push("짱아"); // 배열의 마지막에 값을 추가하는 기능
// names = ["홍길동", "성춘향", "짱구", "짱아"];
console.log("push ", names);

names.pop() // 배열의 가장 마지막 값을 삭제
// names = ["홍길동", "성춘향", "짱구"];
console.log("pop ", names);

names.unshift("신형만") // 배열의 젱리 앞에 값을 추가하는 기능
// names = ["신형만", "홍길동", "성춘향", "짱구"]
console.log("unshift ", names);

names.shift() // 배열의 제일 앞에 값을 삭제
// names = ["홍길동", "성춘향", "짱구"]
console.log("shift ", names);

let index = names.indexOf("짱아") // 배열 안에 "짱구"가 몇 번 인덱스에 위치해 잇는지 판별한느 기능
// 만약 값이 없을 경우엔, -1 출력됨
console.log(index); 

let isIncludes = names.includes("짱구") // 값이 포함되어 있는지 판별하는 기능
console.log(isIncludes);

// 개발자 도구 > 콘솔에 출력하고 싶을 때 사용하는 함수
console.log("출력할 값")

// javascript에서 기본으로 사용하는 표기법은? --> camelCase

// 변수 선언
let varName = "";

// 일반변수 선언 ==> let 사용권장 
// 상수 선언 ==> const

// javascript 자료형
// number, string, boolean, null, undefined 등등

// 배열 선언
let number1 = [1, 2, 3, 4, 5];

// 배열의 인덱싱. 인덱스는 0부터 시작.
console.log(number1100[1])

let animals = ["dog", "cat", "lion"];

let cat = {
    age: 5,
    name: "냥이",
    mew: function() {
        console.log("야옹");
    }
}

let dog = {
    name: "봄이",
}

console.log(cat)
console.log(cat.age)
cat.mew()

console.log(dog.name)
console.log(dog.age)

console.log(typeof cat.age)
console.log(typeof cat.name)
console.log(typeof cat.mew) // 함수 => function 자료형
console.log(typeof dog.age) // undefined => undefined 자료형
console.log(typeof null) // null => object 자료형


let score1 = prompt("첫번째 성적을 입력하세요.");
let score2 = prompt("두번째 성적을 입력하세요.");

console.log(score1, score2)

// Number(값) 
// String(값)
let avg = (Number(score1) + Number(score2)) / 2;
console.log(avg)

console.log(String(null))

let num = 5;
console.log(num.toString(), 5)

console.log(`${typeof 5} isn't ${typeof "아무 문자열"} data type`)

