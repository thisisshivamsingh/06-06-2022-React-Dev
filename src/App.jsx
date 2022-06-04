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
import React from "react";

const App = () => {
  let x = "thapa 😄 ❤️ 👍";
  return <h1> My name is {x}</h1>;
};
export default App;
