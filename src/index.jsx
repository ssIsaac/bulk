import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import {createRoot} from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)