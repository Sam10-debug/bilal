import React from 'react'
import logo from "../images/logo512.png"


const Header = () => {
  return (
	<header className="flex flex-col  ">
		<div className=" md:flex justify-between md:px-[6rem] items-center py-4 hidden">
			<div className="">
				<img className='w-[50px] h-[50px]' src={logo} alt="" />
			</div>
			<div className="flex ">
				<div className="mx-8">
					<p className="">121 King Street, Melbourne, Australia</p>
				</div>
				<div className="">
				<p className="">info@example.com</p>
				</div>
			</div>
		</div>
		<hr />
		<nav className="md:px-[6rem] py-4">
			<ul className="flex flex-col md:flex-row justify-between">
				<li className=""><a href="#">HOME</a></li>
				<li className=""><a id='about' href="#">ABOUT US </a></li>
				<li className=""><a href="#">INVESTMENT PLANS</a></li>
				<li className=""><a href="#">AFFILIATES</a></li>
				<li className=""><a href="#">FAQ</a></li>
				<li className=""><a href="#">SUPPORT</a></li>
			</ul>
		</nav>
	</header>
  )
}

export default Header