import React, { useState } from 'react'
import { data } from '../Data/Data'

const Food = () => {
    const [foods, setfoods] = useState(data)

    //Filter type
    const filterType = (category) => {
        setfoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }

    //filtre price
    const filterPrice = (price) => {
        setfoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }
    return (
        <div className='max-w-[1640px] px-4 py-12 m-auto'>
            <h1 className=' text-orange-600 font-bold text-4xl text-center'>Top  Rated Menu Items</h1>
            {/* Filter Row */}
            <div className=' justify-between flex flex-col lg:flex-row'>
                {/* Filter Type */}
                <div>
                    <p className=' font-bold text-gray-700'>Filter Type</p>
                    <div className=' flex justify-between flex-wrap'>
                        <button onClick={() => setfoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                        <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                        <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                        <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                        <button onClick={() => filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button onClick={() => filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button onClick={() => filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>

                    </div>
                </div>
            </div>
            {/* display images */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration -300'>
                        <img src={item.image} alt={item.name} className='w-full object-cover h-[200px] rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='bg-orange-500 text-white rounded-full p-2'>
                                <span>
                                    {item.price}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Food
