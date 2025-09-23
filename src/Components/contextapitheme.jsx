


// import React, { createContext, useState, useContext } from "react";

// // Create context
// const ThemeContext = createContext();

// // Provider
// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className={theme === "light" ? "light-theme" : "dark-theme"}>
//         {children}
//       </div>
//     </ThemeContext.Provider>
//   );
// };
// export const useTheme = () => useContext(ThemeContext);


///////////////////////////////////Paragraph Color Changer ////////////////////////////////////

// import React, { useState } from 'react';

// export default function ColorChanger() {
//   const [paragraphColor, setParagraphColor] = useState('blue'); 

//   const handleChangeColor = () => {
  
//     setParagraphColor(paragraphColor === 'blue' ? 'red' : 'blue');
//   };

//   return (
//     <div>
//       <p style={{ color: paragraphColor }}>
//         This paragraph's color will change when the button is clicked.
//       </p>
//       <button onClick={handleChangeColor}>Click to change Paragraph Color</button>
//     </div>
//   );
// }
 

/////////////////////////////////////////////////////SHOW/HIDE EXAMPLE//////////////////////////////////////////////////////


// import React, { useRef } from "react";

// export default function ShowHideExample() {
//   const divref = useRef(null);

//   const toggleDiv = () => {
//     if (divref.current.style.display === "none") {
//       divref.current.style.display = "block";
//     } else {
//       divref.current.style.display = "none";
//     }
//   };

//   return (
//     <div className="outerdiv">
//       <button
//         onClick={toggleDiv}
//         className="button"
//       >
//         Click to Show/Hide the Div
//       </button>

//       <div
//         ref={divref}
//         style={{ display: "block", marginTop: "16px",}}
//         className="box"
//       >
//         This is a div that can be shown or hidden.
//       </div>
//     </div>
//   );
// }

//////////////////////////////////////////////////////TODO APP//////////////////////////////////////////////////////

import React, { useRef, useState } from "react";
import "./style.css"

export default function TodoApp() {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);

  // CREATE
  const addTodo = () => {
    const value = inputRef.current.value.trim();
    if (value === "") return;
    setTodos([...todos, { id: Date.now(), text: value }]);
    inputRef.current.value = ""; // clear input
  };

  // DELETE
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // UPDATE
  const updateTodo = (id) => {
    const newText = prompt("Update task:");
    if (newText && newText.trim() !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
    }
  };


  return (
    <div className="outerdiv"style={{border:"1px solid black", width:"400px", margin:"auto", marginTop:"20px", padding:"10px", borderRadius:"10px",textAlign:"center", backgroundColor:"#500000", boxShadow:"5px 5px 15px grey", }}>
      <h1 className="main-heading" style={{color:" #7b5151"}}  >Todo App</h1>

      {/* Input and Add Button */}
      <div className="outer-inputdiv">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a task"
          className="input-div"
          style={{padding:"5px",width:"70%",borderRadius:"5px",border:"none", marginRight:"5px", outline:"none", backgroundColor:"#964d4d"}}
        />
        
        <button
          onClick={addTodo}
          className="add-button"
          style={{backgroundColor:"#7b5151", color:"#ffff", border:"none",padding:"5px 15px",borderRadius:"5px", cursor:"pointer"}}
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="task-list-Div" style={{marginRight:"40px"}}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="task-item-Div"
            style={{justifyContent:"space-between", display:"flex", alignItems:"center",padding:"5px", borderBottom:"1px solid grey", color:"whitesmoke"}}
          >
                    

         
            <span>{todo.text}</span>
            
            <div className="buttong-group Div">
            
              <button
                onClick={() => updateTodo(todo.id)}
                className="update-taskbutton-div"
                style={{marginRight:"10px", backgroundColor:"#7b5151", color:"#ffff", border:"none",padding:"5px 15px",borderRadius:"5px", cursor:"pointer"}}
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-taskbutton-div"
                style={{backgroundColor:"#7b5151", color:"#ffff", border:"none",padding:"5px 15px",borderRadius:"5px", cursor:"pointer"}}
              >
                Delete
              </button>
            </div>
          </li>

        ))}
      </ul>
    </div>
  );
}


/////////////////////////////////////////////////////////RENDER COUNTER/////////////////////////////////////////////////

// import React, { useRef, useEffect, useState } from "react";

// export default function RenderCounter() {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(1); // start at 1 because of first render

//   useEffect(() => {
//     renderCount.current += 1;
//   });

//   // Log every render
//   console.log("Component re-rendered");

//   return (
//     <div className="outerdiv">
//       <h2 className="main-heading">Render Counter</h2>
//       <p>Component has rendered: {renderCount.current} times</p>
//       <button
//         onClick={() => setCount(count + 1)}
//         className="render-button"
//       >
//         Re-render
//       </button>
//     </div>
//   );
// }


/////////////////////////////////////////////////////////Value Tracker/////////////////////////////////////////////////

// import React, { useRef, useEffect, useState } from "react";

// export default function ValueTracker() {
//   const [value, setValue] = useState("");
//   const prevValue = useRef("");

//   useEffect(() => {
//     prevValue.current = value; // store the previous value
//   }, [value]);

//   return (
//     <div className="outer-div">
//       <h2 className="main-heading">Previous Value Tracker</h2>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="Enter value"
//         className="input-div"
//       />
//       <p className="paragraph-div">Current: {value}</p>
//       <p>Previous: {prevValue.current}</p>
//     </div>
//   );
// }

