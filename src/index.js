// var React = require("react");
// var ReactDOM = require("react-dom");
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   "kya dikhana hain what to show",
//   "kaha dikhana hain where to show",
//   "callback function"
// );

// v16.x.x

// const arr = ["shivam", "kumar", "singh"];
// In React v16 it's possible for render()
// to return an array of elements.
// ReactDOM.render(
//   <>
//     <h1>Shivam Singh</h1>
//     <p>Plz like and share to all</p>
//     <h2>plz subscribe my channel</h2>
//   </>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   /*#__PURE__*/ React.createElement("h1", null, "Shivam Singh Like"),
//   document.getElementById("root")
// );

// var h1 = document.createElement("h1");
// h1.innerHTML = "Shivam Singh Subscribe";
// document.getElementById("root").appendChild(h1);

////////////////////// Javascript Expressions in JSX in React JS #10 /////////////////////

// import React from "react";
// import ReactDOM from "react-dom";

// const flName = "shivam singh";

// ReactDOM.render(
//   <>
//     <h1> my name is {flName} </h1>
//     <p> my lucky number is {5 + 5}</p>
//   </>,
//   document.getElementById("root")
// );

// const fName = "shivam";
// const lName = "singh";

// ReactDOM.render(
//   <>
//     <h1>{`my first name is ${fName} and my last name is ${lName}`}</h1>
//     {/* <h1>my name is {fName + " " + lName}</h1> */}
//     {/* <h1>
//       my name is {fName} {lName}
//     </h1> */}
//     <p>my lucky number is {5 + 5}</p>
//   </>,
//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// const name = "shivam";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const links = "https://www.thapatechnical.com";
/*
const heading = {
  color: "#fa9191",
  textTransform: "capitalize",
  textAlign: "center",
  fontWeight: "bold",
  textShadow: "0px 2px 4px #ffe9c5",
  margin: "70px 0",
  fontFamily: '"Josefin Sans", sans-serif',
};*/
// ReactDOM.render(
//   <>
//     <h1 style={heading}>my name is {name}</h1>,
//     <div className="img_div">
//       <img src={img1} alt="randomImages" />
//       <img src={img2} alt="randomImages" />
//       <a href={links} target="_thapa">
//         <img src={img3} alt="randomImages" />
//       </a>
//     </div>
//   </>,
//   document.getElementById("root")
// );

/////////////// React Component Functional Components in ReactJs ///////////////

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

/////////////// ES6 Modules Import Export in React Js #20 ///////////////

// import React from "react";
// import ReactDOM from "react-dom";
// import myfav, { favprog, myName, myNames } from "./App";

// ReactDOM.render(
//   <>
//     <ol>
//       <li>Singh</li>
//       <li>{myfav}</li>
//       <li>{favprog}</li>
//       <li>{myName()}</li>
//       <li>{myNames()}</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );

//////////////// Javascript Tutorial #12 Array in Javascript ////////////////

// An array is a special variable, which can hold more than one value at a time.
// The Array object let's you store multiple values in a single variable

// var a = "arjun";
// var b = "naran";
// var c = "ram";
// alert(a);

// var friends = [
//   "arjun",
//   "naran",
//   "ram",
//   "arjun",
//   "naran",
//   "ram",
//   "arjun",
//   "naran",
//   "ram",
// ];
// // console.log(friends[0]);
// // console.log(friends[1]);
// // console.log(friends[2]);
// console.log(friends);
// var friends = new Array(
//   "arjun",
//   "naran",
//   "ram",
//   "arjun",
//   "naran",
//   "ram",
//   "arjun",
//   "naran",
//   "ram"
// );
// console.log(friends);

// var friends = friends[0];
// friends[0] = "arjun";

/////////////// ReactJs Javascript Array Map Method ///////////////

// const oldArr = ["shivam", "kumar", "singh"];
// console.log(oldArr[0]);
// console.log(oldArr[1]);
// console.log(oldArr[2]);

// const newArr = oldArr.map(function (cvalue, i, arr) {
//   // return i + " : " + cvalue + "singh";
//   console.log(arr);
// });
// console.log(newArr);
// // console.log(oldArr);

// const studentData = [
//   { id: 1, name: "shivam", degree: "B.TECH" },
//   { id: 2, name: "kumar", degree: "RS-CIT" },
//   { id: 3, name: "singh", degree: "Developer" },
//   { id: 1, name: "shivam", degree: "B.TECH" },
//   { id: 2, name: "kumar", degree: "RS-CIT" },
//   { id: 3, name: "singh", degree: "Developer" },
//   { id: 1, name: "shivam", degree: "B.TECH" },
//   { id: 2, name: "kumar", degree: "RS-CIT" },
//   { id: 3, name: "singh", degree: "Developer" },
//   { id: 1, name: "shivam", degree: "B.TECH" },
//   { id: 2, name: "kumar", degree: "RS-CIT" },
//   { id: 3, name: "singh", degree: "Developer" },
//   { id: 1, name: "shivam", degree: "B.TECH" },
//   { id: 2, name: "kumar", degree: "RS-CIT" },
//   { id: 3, name: "singh", degree: "Developer" },
//   { id: 1, name: "shivam", degree: "B.TECH" },
//   { id: 2, name: "kumar", degree: "RS-CIT" },
//   { id: 3, name: "singh", degree: "Developer" },
//   { id: 1, name: "shivam", degree: "B.TECH" },
//   { id: 2, name: "kumar", degree: "RS-CIT" },
//   { id: 3, name: "singh", degree: "Developer" },
//   { id: 1, name: "shivam", degree: "B.TECH" },
//   { id: 2, name: "kumar", degree: "RS-CIT" },
//   { id: 3, name: "singh", degree: "Developer" },
//   { id: 1, name: "shivam", degree: "B.TECH" },
//   { id: 2, name: "kumar", degree: "RS-CIT" },
//   { id: 3, name: "singh", degree: "Developer" },
// ];
// // console.log(studentData[0].name);
// // console.log(studentData[2].name);

// const newData = studentData.map((cvalue) => {
//   return `My name is ${cvalue.name}. My highest degree is ${cvalue.degree}`;
// });
// console.log(newData);

//////////////////// ReactJS Bonus: How to Type Emoji 👍 in VS Code | VS Code Emoji Extension ////////////////
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

/////////////////// #13 Handling Events in ReactJs ////////////////
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

/////////////////// Forms in ReactJS | React Controlled Vs Uncontrolled Component #34 ///////////////
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

//////////////// React Bonus #38: What does "..." three dots do in ReactJS | Spread Operator in ReactJS ////////////////
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Events from "./Events";

ReactDOM.render(<App />, document.getElementById("root"));
// const fullname = ["vinod", "thapa"];
// const biodata = [1, 26, "male", ...fullname];
// var shooterGames = [
//   "Call of Duty",
//   "Far Cry",
//   "Resident Evil",
//   "Call of Duty",
//   "Far Cry",
//   "Resident Evil",
// ];
// var racingGames = ["Need For Speed", "Gran Turismo", "Burnout"];
// var games = [...shooterGames, ...racingGames];

// 3rd cases

// var shooterGames = ["Call of Duty", "Far Cry", "Resident Evil"];
// var [first, ...remaining] = shooterGames;
// console.log(first); //Call of Duty
// console.log(remaining);
const fullName = {
  fname: "vinod",
  lname: "thapa",
};
const biodata = {
  id: 1,
  ...fullName,
  age: 26,
  gender: "male",
};
console.log(biodata);
// console.log(games);

// console.log(fullname);
// console.log(biodata);
