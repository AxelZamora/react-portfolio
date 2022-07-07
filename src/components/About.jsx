import React from 'react'

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4 pt-16">
						<p className="text-4xl font-bold inline border-b-4 border-[#862c2d]">About</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold ">
						<p>Hi, i'm Axel, nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p>I enjoy learning all kinds of technologies, and researching them to find a good use for them. I am a practical and enthusiastic person when it comes to assuming a new goal</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
