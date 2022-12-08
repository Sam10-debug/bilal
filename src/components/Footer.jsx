import React from 'react'
import WebsiteLogo from "../images/Website-Logo-White.png"

const Footer = () => {
  return (
	<footer className="foot md:px-20 py-4 flex flex-col">
		<section className=" flex md:flex-row flex-col mb-6 px-12">
			<section className="w-full md:w-1/4">
				<img src={WebsiteLogo} alt="" />
				<p className="">capitalfund.ltd is an international company that offers comprehensive solutions based on BlockChain technology.</p>
			</section>
			<section className="w-full md:w-1/4  ">
				<h4 className="text-white font-bold">IMPORTANT LINKS</h4>
				<ul className="">
					<li className=""><a href="#">Home</a></li>
					<li className=""><a href="#">Our Company</a></li>
					<li className=""><a href="#">Why us</a></li>
				</ul>
			</section>
			<section className="w-full md:w-1/4 ">
				<h4 className="text-white font-bold">IMPORTANT LINKS</h4>
				<p className="">Investment plans</p>
			</section>
			<section className="w-full md:w-1/4 ">
				<h4 className="text-white font-bold">SUPPORT</h4>
				<ul className="">
					<li className=""><a href="#">Contact us</a></li>
					<li className=""><a href="#">FAQ</a></li>
				</ul>
			</section>
			
		</section>
		<hr />
		<div className="w-full mt-4 flex justify-center">
				<p className="">capitalfund.ltd LTD © 2021 - All Right Reserved</p>
			</div>
	</footer>
  )
}

export default Footer