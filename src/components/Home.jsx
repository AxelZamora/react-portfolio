import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-[#0a192f]">
			{/* container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-[#862c2d]">Hi, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Axel Zamora</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Front-End Developer</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]">I am a self-taught developer and I enjoy creating and developing digital experiences. Currently focused on building full-stack applications and improving day by day as a programmer</p>
				<div>
					<Link to="work" smooth={true} duration={500}>
						<button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#862c2d] hover:border-[#862c2d]">
							View Work
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowNarrowRight className="ml-3" />
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
