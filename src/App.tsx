import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

function useWindowDimensions() {
	const [windowDimentions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	return windowDimentions;
}

function App() {
	const { width } = useWindowDimensions();

	return (
		<main className="App">
			<Navbar />
			<section className="maincontent">
				<div className="content">
					<h1>Make remote work</h1>
					<p>
						Get your team in sync, no matter your location. Streamline
						processesm create team rituals, and watch productivity soar.
					</p>
					<button className="learnbtn">Learn More</button>
					<div className="clienticonlist">
						<img
							className="clienticon"
							src="/images/client-databiz.svg"
							alt="Audiophile Logo"
						/>
						<img
							className="clienticon"
							src="/images/client-audiophile.svg"
							alt="Audiophile Logo"
						/>
						<img
							className="clienticon"
							src="/images/client-meet.svg"
							alt="Audiophile Logo"
						/>
						<img
							className="clienticon"
							src="/images/client-maker.svg"
							alt="Audiophile Logo"
						/>
					</div>
				</div>
				{width >= 900 ? (
					<img src="/images/image-hero-desktop.png" alt="Hero Image" />
				) : (
					<img src="/images/image-hero-mobile.png" alt="Hero Image" />
				)}
			</section>
		</main>
	);
}

export default App;
