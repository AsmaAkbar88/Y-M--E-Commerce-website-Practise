import React from 'react'
import Image from 'next/image'

const Products = () => {
    return (

        <main>
            <div className='w-[1170px] h-[313px]  flex justify-center items-center mt-10 '>
                <div className='w-[80%] h-full gap-x-[30px] '>
                    {/* top div  */}

                    <div>
                        <span className='border-l-8 pl-4 border-red-500 text-red-500 mb-5 font-bold '>Categories</span>
                        <h2 className='text-4xl font-bold mt-4 '>Browse By Category</h2>
                    </div>
                    {/* ----------------------Products  */}
                    {/* main div  */}
                    <div className='flex gap-10 mt-7'>




                        {/* cell phone div  */}
                        <div className=''>
                            <div className=' w-[140px] flex-col space-y-4 justify-center h-[145px] border border-[#000000]  flex items-center'><Image src={'/products2/CellPhone.png'} alt={'cell phone'} width={56} height={56}></Image>
                                <span className=' font-bold text-[10px]  pt-4'>Phones</span>
                            </div>
                        </div>


                        {/* computer div  */}
                        <div className=''>
                            <div className=' w-[140px] flex-col space-y-4 justify-center h-[145px] border border-[#000000]  flex items-center'><Image src={'/products2/Computer.png'} alt={'computer pic'} width={56} height={56}></Image>
                                <span className=' font-bold text-[10px]'>Computers</span>
                            </div>
                        </div>


                        {/* watch div  */}
                        <div className=''>
                            <div className=' w-[140px] flex-col space-y-4 justify-center h-[145px] border border-[#000000]  flex items-center'><Image src={'/products2/SmartWatch.png'} alt={'Smart Watch'} width={56} height={56}></Image>
                                <span className=' font-bold text-[10px]'>SmartWatch</span>
                            </div>
                        </div>


                        {/* camera div  */}
                        <div className=''>
                            <div className=' w-[140px] flex-col space-y-4 justify-center bg-red-500 h-[145px] border border-[#000000]  flex items-center'><Image src={'/products2/Camera.png'} alt={'Camera'} width={56} height={56}></Image>
                                <span className=' font-bold text-[10px]'>Camera</span>
                            </div>
                        </div>

                        {/* hadphone div  */}
                        <div className=''>
                            <div className=' w-[140px] flex-col space-y-4 justify-center h-[145px] border border-[#000000]  flex items-center'><Image src={'/products2/Headphone.png'} alt={'Smart Watch'} width={56} height={56}></Image>
                                <span className=' font-bold text-[10px]'>HeadPhones</span>
                            </div>
                        </div>


                        {/* game div  */}
                        <div className=''>
                            <div className=' w-[140px] flex-col space-y-4 justify-center bg-red-500 h-[145px] border border-[#000000]  flex items-center'><Image src={'/products2/Gamepad.png'} alt={'Camera'} width={56} height={56}></Image>
                                <span className=' font-bold text-[10px]'>Gaming</span>
                            </div>
                        </div>


                        <div />


                    </div>
                </div>

            </div>
            <button className='py-2 px-3 bg-red-500 ml-[550px] text-white  rounded-md '>View All Products</button>


        </main>
    )
}

export default Products
