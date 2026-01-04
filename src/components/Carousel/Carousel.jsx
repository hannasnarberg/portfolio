// Components
import { useState, useEffect } from "react";
import Icon from "components/Icons/Icon";

// Assets
import Music from "assets/Music.jpg";
import Motorcycle from "assets/Motorcycle.jpg";
import Mountain from "assets/Mountain.jpg";

// Styles
import "components/Carousel/Carousel.css";

const images = [
	{ src: Music, alt: "Sebastian playing music" },
	{ src: Motorcycle, alt: "A 1987 Suzuki DR 600 S motorcycle" },
	{ src: Mountain, alt: "Sebastian on a mountain top" },
];

function Carousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		images.forEach((image) => {
			const img = new Image();
			img.src = image.src;
		});
	}, []);

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="carousel">
			<div className="carousel-inner">
				<div
					className="carousel-track"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{images.map((image, i) => (
						<div className="carousel-slide" key={i}>
							<img src={image.src} alt={image.alt} />
						</div>
					))}
				</div>
			</div>
			<div className="carousel-controls hidden-desktop">
				<button onClick={prevSlide} aria-label="Previous image">
					<Icon>
						<path d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" />
					</Icon>
				</button>
				<button onClick={nextSlide} aria-label="Next image">
					<Icon>
						<path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" />
					</Icon>
				</button>
			</div>
		</div>
	);
}

export default Carousel;
