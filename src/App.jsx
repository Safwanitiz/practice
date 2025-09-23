// import React from "react";
// import { ThemeProvider, useTheme } from "./Components/contextapitheme";

// function ThemeToggleButton() {
//   const { theme, toggleTheme } = useTheme();
//   return (
//     <button onClick={toggleTheme}>
//       Switch to {theme === "light" ? "Dark" : "Light"} Mode
//     </button>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <h1>Theme</h1>
//       <ThemeToggleButton />
//     </ThemeProvider>
//   );
// }

// export default App;

// import React from "react";
// import ShowHideExample from "./Components/contextapitheme";
// import TodoApp from "./Components/contextapitheme";
// import RenderCounter from "./Components/contextapitheme";
// import ValueTracker from "./Components/contextapitheme";
// import ColorChanger from "./Components/contextapitheme";

// function App(){
//   return(
//     <div>
//       <ColorChanger/>
//     </div>
//   )
// }
// export default App;

// function App(){
//   return(
//     <div>
//       <ShowHideExample/>
//     </div>
//   )
// }
// export default App;

// function App(){
//   return(
//     <div>
//       <TodoApp/>
//     </div>
//   )
// }
// export default App;

// function App(){
//   return(
//     <div>
//       <ValueTracker/>
//     </div>
//   )
// }
// export default App;

// function App(){
//   return(
//     <div>
//       <RenderCounter/>
//     </div>
//   )
// }
// export default App;


import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Click on a user to see details:</p>
      <ul>
        <li><Link to="/user/1">User 1</Link></li>
        <li><Link to="/user/2">User 2</Link></li>
        <li><Link to="/user/3">User 3</Link></li>
      </ul>
    </div>
  );
}

function User() {
  const { id } = useParams();
  console.log("Params:", id); 
  return (
    <div>
      <h2>User Page</h2>
      <p>User ID: {id}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  );
}
