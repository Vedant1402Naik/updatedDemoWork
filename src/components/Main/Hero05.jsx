import React from "react";
import person from "./../../assets/person.jpg"

function Hero05() {
	return (
		<div className="Hero05 h-2/3 w-full flex justify-center items-center bg-white py-12 px-4">
			<div className="crousalDiv flex items-center justify-center bg-white">
				<div className="w-full max-w-6xl text-black p-6 rounded-lg shadow-xl">
					<div className="carousel w-full">
						<div
							id="item1"
							className="carousel-item w-full flex flex-col items-center justify-center md:flex-row"
						>
							<img
								src={person}
								className="md:w-1/3 md:h-96 h-1/2 p-8 rounded-full  w-4/5  "
							/>
							<div className="md:w-2/3 w-full mt-4 md:p-8 text-black md:text-3xl text-lg">
								In the Indian customs system, the Special
								Valuation Branch (SVB) investigates the
								valuation of goods when they are imported
								between related parties.
							</div>
						</div>
						<div
							id="item2"
							className="carousel-item w-full flex flex-col items-center justify-center md:flex-row"
						>
							<img
								src={person}
								className="md:w-1/3 md:h-96 h-1/2 p-8 rounded-full  w-4/5  "
							/>
							<div className="md:w-2/3 w-full mt-4 md:p-8 text-black md:text-3xl text-lg">
								In the Indian customs system, the Special
								Valuation Branch (SVB) investigates the
								valuation of goods when they are imported
								between related parties.
							</div>
						</div>
						<div
							id="item3"
							className="carousel-item w-full flex flex-col items-center justify-center md:flex-row"
						>
							<img
								src={person}
								className="md:w-1/3 md:h-96 h-1/2 p-8 rounded-full  w-4/5  "
							/>
							<div className="md:w-2/3 w-full mt-4 md:p-8 text-black md:text-3xl text-lg">
								In the Indian customs system, the Special
								Valuation Branch (SVB) investigates the
								valuation of goods when they are imported
								between related parties.
							</div>
						</div>
					</div>
					<div className="flex w-full justify-center gap-2 py-2">
						<a
							href="#item1"
							className="bg-white px-4 py-3 rounded-full "
						>
							0
						</a>
						<a
							href="#item2"
							className="bg-white px-4 py-3  rounded-full "
						>
							0
						</a>
						<a
							href="#item3"
							className="bg-white px-4 py-3  rounded-full "
						>
							0
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero05;
