import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Login from "./pages/Login";
import Projects from "./pages/Projects";

function App() {
    return (
		<BrowserRouter>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/journey" element={<Journey />} />
					<Route path="/login" element={<Login />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</main>
		</BrowserRouter>
    );
}

export default App;
