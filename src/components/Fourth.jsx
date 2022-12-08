import React from 'react'
import pic from "../images/plans_3.png"

const Fourth = () => {
  return (
	<section className="flex flex-col md:flex-row px-8 my-4">
		<section className="">
			<h5 className="choose font-bold">Choose Your</h5>
			<h2 className=" font-bold text-[20px]">INVESTMENT PLANS</h2>
			<p className="">Undoubtedly the most important advantage of the capitalfund platform is the accessibility of the financing program. We are always open to all types of investors, despite the nationality, their country of residence from their social status</p>
			<p className="my-2">Our investment plans, developed by the team of capitalfund.ltd, offer you the most beneficial terms for arranging your own source of passive income.. The minimum deposit amount of our platform are only $ 30, which is much more acceptable than any other confidence in the current market.</p>
		<button className="btn-b border-[1px] my-4 md:my-0 mx-auto text-white font-bold rounded-lg px-6 py-4">JOIN NOW</button>
		</section>
		<section className="">
			<img src={pic} alt="" />
			<div className="flex justify-between">
				<button className="prev  border-[1px] my-4 md:my-0 mx-4 font-bold  px-6 py-4">1</button>
				<button className="next  border-[1px] my-4 md:my-0 mx-4 font-bold  px-6 py-4">1</button>
			</div>
		</section>
	</section>
  )
}

export default Fourth