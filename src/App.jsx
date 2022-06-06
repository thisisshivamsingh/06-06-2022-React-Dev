// import React from "react";
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";

// function App() {
//   return (
//     <>
//       <Heading />
//       <Para />
//       <List />
//       <Para />
//     </>
//   );
// }
// export default App;

/////////////// ES6 Modules Import Export in React Js #20 ///////////////

// const youtuber = "gareeb clasher";
// const favprog = "React js";

// function myName() {
//   let name = "shivam";
//   return name;
// }
// function myNames() {
//   let names = "shivam singh";
//   return names;
// }
// export default youtuber;
// export { favprog, myName, myNames };

//////////////////// ReactJS Bonus: How to Type Emoji 👍 in VS Code | VS Code Emoji Extension ////////////////
// import React from "react";

// const App = () => {
//   let x = "thapa 😄 ❤️ 👍";
//   return <h1> My name is {x}</h1>;
// };
// export default App;

/////////////////// #13 Handling Events in ReactJs ////////////////
// import React, { useState } from "react";
// const App = () => {
//   const purple = "#8e44ad";
//   const [bg, setBg] = useState(purple);
//   const [name, setName] = useState("click Me");
//   const bgChange = () => {
//     // console.log("clicked");
//     let newBg = "#34495e";
//     setBg(newBg);
//     setName("Ouch!! 🐺 ");
//   };
//   const bgBack = () => {
//     setBg(purple);
//     setName("Ayyo!! 😠 ");
//   };
//   return (
//     <>
//       <div style={{ backgroundColor: bg }}>
//         <button onMouseEnter={bgChange} onMouseLeave={bgBack}>
//           {name}
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;

/////////////////// Forms in ReactJS | React Controlled Vs Uncontrolled Component #34 ///////////////
import React, { useState } from "react";
const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    qua: "",
  });
  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    // const value = event.target.value;
    // const name = event.target.name;
    const { value, name } = event.target;
    setFullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
      // if (name === "fName") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // }
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
  };
  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <p>{fullName.qua}</p>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <input
              type="email"
              placeholder="Enter Your email"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
              autoComplete="off"
            />
            <input
              type="number"
              placeholder="Enter Your Mobile"
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />
            <input
              type="text"
              placeholder="Enter Your Qualification"
              name="qua"
              onChange={inputEvent}
              value={fullName.qua}
            />
            <button type="submit">Click Me 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default App;
