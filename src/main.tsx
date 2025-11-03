import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

if (window.location.search.startsWith("?redirect=")) {
    const redirectPath = window.location.search.replace("?redirect=", "")
    window.history.replaceState(null, "", redirectPath)
}

createRoot(document.getElementById("root")!).render(<App />)
