import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./public/css/index.css";
import TaskContextProvider from "./context/TaskContextProvider";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
    <TaskContextProvider>
    <App />
    </TaskContextProvider>
    </React.StrictMode>

)
