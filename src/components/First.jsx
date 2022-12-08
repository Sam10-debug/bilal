import React from 'react'

const First = () => {
  return (
	<section className="flex justify-center items-center flex-col">
			<h1 className="text-[24px] md:text-[32px] font-bold">A NEW WAY TO INVEST IN <br></br> <span className='text-[36px] md:text-[48px]'>CRYPTO MINING</span></h1>
			<p className="w-[90%] text-center md:w-[65%] mx-4 md:mx-0 text-[24px] my-12">It is super simple - Your mining equipment is already configured and running.
				As soon as you have created your account, you can start investing and get profits!</p>
				<div className="btn flex flex-col md:flex-row">
					<button className=" border-[1px] my-4 md:my-0 mx-4 text-white px-6 py-4 ">OPEN AN ACCOUNT</button>
					<button className="border-[1px] mx-4  px-6 py-4">OUR OFFERS</button>
				</div>
		</section>
  )
}

export default First