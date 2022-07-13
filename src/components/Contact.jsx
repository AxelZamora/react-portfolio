import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Contact = () => {
	return (
		<div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
			<form method="POST" action="https://getform.io/f/a40efe0d-9c61-487a-ba72-9bd1e00e6190" className="flex flex-col max-w-[600px] w-full">
				<div className="pt-16">
					<p className="text-4xl font-bold inline border-b-4 border-[#862c2d] text-gray-300">Contact</p>
					<p className="text-gray-300 py-4"> Submit the form below or shoot me an email - axarzamora@gmail.com </p>
				</div>
				<input className="bg-[#ccd6f6] p-2" type="text" placeholder="name" name="name" />
				<input className="my-4 p-2 bg-[#ccd6f6]" type="text" placeholder="Email" name="email" />
				<textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Message"></textarea>

				<button className="text-white border-2 hover:bg-[#862c2d] hover:border-[#862c2d] px-4 py-3 my-8 mx-auto flex items-center">Let's talk</button>
			</form>

			<div>
				<a className=" flex justify-between  w-auto p-2 text-gray-300 hover:scale-110 duration-500" href="https://www.linkedin.com/in/axel-zamora-8aa583ba/" target="_blank" rel="noreferrer">
					<FaLinkedin size={30} />
				</a>
				<a className="flex justify-between  w-auto p-2 text-gray-300 hover:scale-110 duration-500" href="https://github.com/AxelZamora?tab=repositories" target="_blank" rel="noreferrer">
					<FaGithub size={30} />
				</a>
				<a className="flex justify-between  w-auto p-2 text-gray-300 hover:scale-110 duration-500" href="https://mail.google.com/mail/?view=cm&source=mailto&to=axarzamora@gmail.com" target="_blank" rel="noreferrer">
					<HiOutlineMail size={30} />
				</a>
				<a className="flex justify-between  w-auto p-2 text-gray-300 hover:scale-110 duration-500" href="https://drive.google.com/file/d/1767XuuEh-0hEZz-eIcLl-3NBA4hCe-z5/view?usp=sharing" target="_blank" rel="noreferrer">
					<BsFillPersonLinesFill size={30} />
				</a>
			</div>
		</div>
	)
}

export default Contact
