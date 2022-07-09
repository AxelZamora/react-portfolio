import React from 'react'

import GifExpertApp from '../assets/GifExpertApp.png'
import Portfolio from '../assets/Portfolio.png'
import weatherapp from '../assets/weatherapp.png'

const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
			<div className="max-w-[1000px] mx-auto p4 flex flex-col justify-center w-full h-full">
				<div className="pt-20">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#862c2d] ">Work</p>
					<p className="py-3"> Check out some of my recent work</p>
				</div>
				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* Grid Item */}
					<div style={{ backgroundImage: `url(${GifExpertApp})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* hover effect */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">Gif React App</span>
							<div className="pt-8 text-center">
								<a href="https://axelzamora.github.io/react-gif-expert/" target="_blank" rel="noreferrer">
									<button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
								</a>
								<a href="https://github.com/AxelZamora/react-gif-expert" target="_blank" rel="noreferrer">
									<button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div style={{ backgroundImage: `url(${Portfolio})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* hover effect */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">React Portfolio</span>
							<div className="pt-8 text-center">
								<a href="https://axelzamora.github.io/react-portfolio/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
								</a>
								<a href="https://github.com/AxelZamora/react-portfolio" target="_blank" rel="noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div style={{ backgroundImage: `url(${weatherapp})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* hover effect */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">Weather React App</span>
							<div className="pt-8 text-center">
								<a href="https://axelzamora.github.io/weatherApp-react/" target="_blank" rel="noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
								</a>
								<a href="https://github.com/AxelZamora/weatherApp-react" target="_blank" rel="noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div style={{ backgroundImage: `url(${null})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* hover effect */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">Empty</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div style={{ backgroundImage: `url(${null})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* hover effect */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">Empty</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div style={{ backgroundImage: `url(${null})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* hover effect */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">Empty</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Work
