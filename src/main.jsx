import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from "@mantine/core";
import App from './App.jsx'
import './index.css'
import "@mantine/core/styles.css";
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);