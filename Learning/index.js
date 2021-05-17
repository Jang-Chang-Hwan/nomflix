/* #1.1 Arrow Functions */

// 기본 Function 방식
// function sayHello(name) {
//     return "Hello " + name
// }

// ES6 Function
// const sayHello = (name = "Human") => "Hello " + name
// const sayHello = (name = "Human") => {
//     return "Hello " + name
// }

// const langram = sayHello("Langram")
// console.log(langram)


// Documnet
// const button = document.querySelector("button")
// Event
// const handleClick = event => console.log(event)

// Arrow function의 규칙
// 한 개의 경우 괄호가 필요없음
// 다만, 두 개 이상의 경우 괄호 필요
// button.addEventListener("click", event => {
//     console.log(event)
// })


/* #1.3 Template Literals */
// ` : back ticks
// const sayHello = (name = "Human") => {
//     return `Hello ${name}`
// }
// const langram = sayHello("Langram")

// console.log(langram)

/* Object Destructuring */

// 코드를 좀 더 깔끔하게 보이는 것
// const human = {
//     name: "Jang",
//     lastName: "Langram",
//     nationality: ": Frontend developer",
//     favFood: {
//         breakfast: "Namul",
//         lunch: "Donuts",
//         dinner: "Salad"
//     }
// }
//const name = human.name
//const lastName = human.lastName

// const dinner = human.favFood.dinner
// const { name,
//         lastName, 
//         nationality: difName, 
//         favFood: {dinner, breakfast, lunch} 
// } = human
// const difName = human.nationality

// console.log(name, lastName, difName, dinner, breakfast, lunch)


/* #1.4 Spread Operator */

// Unpack contents : 배열을 풀어서 알려주는 것 >> `...ArrayName` << 타입 무관하게 사용가능
// const days = ["Mon", "Tue", "Wed"]
// const otherDays = ["Thu", "Fri", "Sat"]
// const ob = {
//     first:"hi",
//     second:"hello"
// }
// const ab = {
//     third: "bye bye"
// }
// const two = {...ob, ...ab}

// let allDays = [...days, ...otherDays, "Sun"]

// console.log(allDays)
// console.log(two)


/* #1.5 Classes */

// 프로그래밍 패러다임
// 1) FP(Functional Programming: 함수형 프로그래밍)
// 2) OOP(Object-Oriented Programming: 객체지향프로그래밍)

// class Human {
//     // 생성자: 최초 클래스 생성 시 실행
//     constructor(name, lastName) {
//         this.name = name
//         this.lastName = lastName
//     }
// }
// class Baby extends Human {
//     cry() {
//         console.log("Waaaaaaaa")
//     }
//     sayName() {
//         console.log(`My name is ${this.name}`)
//     }
// }
// const myBaby = new Baby("Jang", "Mini")
// console.log(myBaby.cry() + myBaby.sayName())


/* #1.6 Array map */

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]

// const addNumber = (day, index) => `#${index+1} ${day}`
// const smilingDays = days.map(addNumber)

// console.log(smilingDays)


/* #1.7 Array filter */

// const numbers = [2, 45, 6454, 22, 456, 23, 67, 11, 443, 466 ,222, 2, 4, 6, 89, 12145, 1]

// const testCondition = (number) => number > 15
// const biggerThan15 = numbers.filter( testCondition )

// let posts = ["Hi", "Hello", "Bye"]
// posts = posts.filter(post => post !== "Bye")
// console.log(posts)


/* #1.8 forEach includes push */

// // let posts = ["Hi", "Hello", "Bye"]
// let greetings = ["Hi", "Hello", "Bye", "Suup"]

// // posts.forEach(post => console.log(post))
// // posts.push("New")

// // includes >> 파라미터가 포함되면 true / 포함되지 않으면 false
// if(!greetings.includes("Hello")) {
//     greetings.push("Hello")
// }
// console.log(greetings)
// console.log(greetings.reverse())
