import React from "react";
import {createRoot} from 'react-dom';


import App from "./App";
import "./index.css";
import 'react-tooltip/dist/react-tooltip.css'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);