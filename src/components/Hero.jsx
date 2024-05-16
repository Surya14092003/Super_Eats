import React from 'react'

const Hero = () => {
    return (
        <div className=' max-w-[1640px] mx-auto p-4'>
            <div className=' m-h-[500px] relative'>
                {/* Overlay */}
                <div className=' absolute w-full h-full text-gray-200 max-h-[500px] bg-black/35 flex flex-col justify-center'>
                    <h1 className=' px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The<span className=' text-orange-600'> Best</span></h1>
                    <h1 className=' px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className=' text-orange-600'>Foods</span> Delivered</h1>
                </div>
                <img className=' w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" alt="/" />
            </div>
        </div>
    )
}

export default Hero
