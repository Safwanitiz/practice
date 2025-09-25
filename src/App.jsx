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
import { BrowserRouter as Router, Routes, Route, Link, Form } from "react-router-dom";
import ListingPage from "./Components/listingpage";
import DetailPage from "./Components/detailpage";
import "./Components/style.css"

export default function App() {
  return (
    <Router>
      <div className="outer-div">
    
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/post/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}
