import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const handleClick = () => setNav(!nav)

	return (
		<div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
			<Link to="home" smooth={true} duration={500}>
				<img src={Logo} alt="Logo" style={{ width: '60px' }} className="pt-2 hover:cursor-pointer" />
			</Link>

			{/* menu */}
			<ul className="hidden md:flex">
				<Link to="home" smooth={true} duration={500}>
					<li className="hover:text-[#862c2d]">Home</li>
				</Link>

				<Link to="about" smooth={true} duration={500}>
					<li className="hover:text-[#862c2d]">About</li>
				</Link>
				<Link to="skills" smooth={true} duration={500}>
					<li className="hover:text-[#862c2d]">Skills</li>
				</Link>
				<Link to="work" smooth={true} duration={500}>
					<li className="hover:text-[#862c2d]">Work</li>
				</Link>
				<Link to="contact" smooth={true} duration={500}>
					<li className="hover:text-[#862c2d]">Contact</li>
				</Link>
			</ul>

			{/* Hamburger */}
			<div onClick={handleClick} className="md:hidden z-10 hover:cursor-pointer">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
				<Link onClick={handleClick} to="home" smooth={true} duration={500}>
					<li className="py-6  text-4xl hover:text-[#862c2d]">Home</li>
				</Link>

				<Link onClick={handleClick} to="about" smooth={true} duration={500}>
					<li className="py-6  text-4xl hover:text-[#862c2d]">About</li>
				</Link>
				<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
					<li className="py-6  text-4xl hover:text-[#862c2d]">Skills</li>
				</Link>
				<Link onClick={handleClick} to="work" smooth={true} duration={500}>
					<li className="py-6  text-4xl hover:text-[#862c2d]">Work</li>
				</Link>
				<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
					<li className="py-6  text-4xl hover:text-[#862c2d]">Contact</li>
				</Link>
			</ul>

			{/* Social icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/axel-zamora-8aa583ba/" target="_blank" rel="noreferrer">
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/AxelZamora?tab=repositories" target="_blank" rel="noreferrer">
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#862c2d]">
						<a className="flex justify-between items-center w-full text-gray-300" href="https://mail.google.com/mail/?view=cm&source=mailto&to=axarzamora@gmail.com" target="_blank" rel="noreferrer">
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
						<a className="flex justify-between items-center w-full text-gray-300" href="https://drive.google.com/file/d/1767XuuEh-0hEZz-eIcLl-3NBA4hCe-z5/view?usp=sharing" target="_blank" rel="noreferrer">
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
