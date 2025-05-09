import React from 'react'
import Image from 'next/image';
const Testimonial = () => {
  return (
    <div>
  <div className="container pt-16 pb-16">
    <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
    <div className="border border-gray-300 rounded-2xl flex flex-col items-center justify-center min-h-full gap-2 p-6 lg:p-0">


        <Image
          className="rounded-full inline-block"
          src="/user.png"
          alt="user"
          width={80}
          height={80}
        />
        <h2 className="text-gray-500 font-black text-[20px]">Else Doe</h2>
        <p>CEO & Founder</p>
        <Image
          className="inline-block py-2"
          src="/quotes.png"
          alt="quotes"
          width={30}
          height={30}
        />
        <p className="max-w-[200px] text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        </p>
      </div>
      <div className="bg-blue-600 bg-[url(/cta-banner.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
        <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3 text-center">
          <button className="bg-blackish text-white p-2 rounded-md">
            25% Off Your First Order
          </button>
          <h2 className="font-extrabold text-2xl text-[#272727]">
            Summer Collection
          </h2>
          <p className="text-gray-500 text-[20px]">
            starting at $49.99 <strong>Shop Now</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Testimonial;