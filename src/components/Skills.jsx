import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import GitHub from '../assets/github.png'
import Mongo from '../assets/mongo.png'

const Skills = () => {
	return (
		<div name="skills" className=" w-full h-screen bg-[#0a192f] text-gray-300">
			{/* container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-[#862c2d] ">Skills</p>
					<p className="py-4">These are the technologies I've worked with</p>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="pt-2 w-20 mx-auto" src={HTML} alt="HTML icon" />
						<p className="my-2">HTML</p>
					</div>
					<div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="pt-2 w-20 mx-auto" src={CSS} alt="HTML icon" />
						<p className="my-2">CSS</p>
					</div>
					<div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className=" pt-2 w-20 mx-auto" src={JavaScript} alt="HTML icon" />
						<p className="my-2">JavaScript</p>
					</div>
					<div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="pt-2 w-20 mx-auto" src={ReactImg} alt="HTML icon" />
						<p className="my-2">React</p>
					</div>
					<div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="pt-2 w-20 mx-auto" src={Node} alt="HTML icon" />
						<p className="my-2">Node</p>
					</div>
					<div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="pt-2 w-20 mx-auto" src={FireBase} alt="HTML icon" />
						<p className="my-2">Fire base</p>
					</div>
					<div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="pt-2 w-20 mx-auto" src={Mongo} alt="HTML icon" />
						<p className="my-2">Mongo DB</p>
					</div>
					<div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="pt-2 w-20 mx-auto" src={GitHub} alt="HTML icon" />
						<p className="my-2">GitHub</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
