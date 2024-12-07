import React from 'react'
import Image from 'next/image'

const Sale = () => {
  return (

    <main>
    <div className=' h-[300px] flex justify-center items-center mt-10 '>
      <div className='w-[80%] h-full '>
        {/* top div  */}

        <div>
          <span className='border-l-8 pl-4 border-red-500 text-red-500 mb-5 font-bold '>Today’s</span>
          <h2 className='text-4xl font-bold mt-4'>Flash Sales</h2>
        </div>
        {/* ----------------------Products  */}
        {/* main div  */}
        <div className='justify-between flex mt-7 '>




          {/* chair div  */}
          <div className=''>
            <div className='w-[200px] h-[170px] bg-gray-300 flex items-center justify-center'><Image src={'/products/video.png'} alt={'Video'} width={100} height={100}></Image></div>
            <div>
              {/* title  */}
              <div className='flex flex-col'>
                <span className='text-md font-serif  pt-3'>AK-900 Wired Keyboard</span>
                <span className='font-bold '>$120</span>
              </div>
            </div>
          </div>


          {/* 2nd div keyboard  */}

          <div className=''>

            <div className='w-[200px] h-[170px] bg-gray-200 flex items-center justify-center' ><Image src={'/products/keyb.png'} alt={'Keyboard'} width={100} height={100}></Image></div>
            {/* title  */}
            <div className='flex flex-col'>
              <span className=' text-md font-serif pt-3'>AK-900 Wired Keyboard</span>
              <span className='font-bold '>$120</span>
            </div>
          </div>

          {/* LED div  */}

          <div>

            <div className='w-[200px] h-[170px] bg-gray-200  flex items-center justify-center'><Image src={'/products/led.png'} alt={'Led'} width={100} height={100}></Image></div>
            {/* title  */}
            <div className='flex flex-col'>
              <span className='text-md font-serif  pt-3'>IPS LCD Gaming Monitor</span>
              <span className='font-bold '>$120</span>
            </div>

          </div>

          {/* chair div  */}
          <div>
            <div className='w-[200px] h-[170px] bg-gray-200 flex items-center justify-center'><Image src={'/products/cha.png'} alt={'Chair'} width={100} height={100}></Image></div>
            {/* title  */}
            <div className='flex flex-col'>
              <span className='text-md font-serif  pt-3'>S-Series Comfort Chair </span>
              <span className='font-bold '>$120</span>
            </div>

          </div>
        </div>
      </div>

    </div>
    <button className='py-2 px-3 bg-red-500 ml-[550px] text-white  rounded-md mt-16'>View All Products</button>


  </main>
  )
}

export default Sale
