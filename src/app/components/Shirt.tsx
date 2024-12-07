import React from 'react'
import Image from 'next/image'

const Sale = () => {
  return (

    <main>
    <div className=' h-[300px] flex justify-center items-center mt-10 '>
      <div className='w-[80%] h-full '>
        {/* top div  */}

        <div >
          <span className='border-l-8 pl-4 border-red-500 text-red-500 mb-5 font-bold '>This Month</span>
          <div className='flex justify-between '>
          <h2 className='text-4xl font-bold mt-4'>Best Selling Products</h2>
          <button className='px-7 bg-red-600  text-white  rounded-md '>View All</button>

          </div>
        </div>
        {/* ----------------------Products  */}
        {/* main div  */}
        <div className='justify-between flex mt-7 '>




          {/* shirt div  */}
          <div className=''>
            <div className='w-[200px] h-[170px] bg-gray-300 flex items-center justify-center'><Image src={'/shirt/shirt.png'} alt={'Shirt'} width={100} height={100}></Image></div>
            <div>
              {/* title  */}
              <div className='flex flex-col'>
                <span className='text-md font-serif pt-4 '>The north coat</span>
                <span className='font-bold '>$260</span>
              </div>
            </div>
          </div>


          {/* 2nd div purse  */}

          <div className=''>

            <div className='w-[200px] h-[170px] bg-gray-200 flex items-center justify-center' ><Image src={'/shirt/purse.png'} alt={'purse'} width={100} height={100}></Image></div>
            {/* title  */}
            <div className='flex flex-col'>
              <span className='text-md font-serif pt-4'>Gucci duffle bag</span>
              <span className='font-bold '>$960</span>
            </div>
          </div>

          {/* dag div  */}

          <div>

            <div className='w-[200px] h-[170px] bg-gray-200  flex items-center justify-center'><Image src={'/shirt/dag.png'} alt={'Led'} width={100} height={100}></Image></div>
            {/* title  */}
            <div className='flex flex-col'>
              <span className='text-md font-serif pt-4'>RGB liquid CPU Cooler</span>
              <span className='font-bold '>$160</span>
            </div>

          </div>

          {/* table div  */}
          <div>
            <div className='w-[200px] h-[170px] bg-gray-200 flex items-center justify-center'><Image src={'/shirt/table.png'} alt={'table'} width={100} height={100}></Image></div>
            {/* title  */}
            <div className='flex flex-col'>
              <span className=' text-md font-serif pt-4'>Small BookSelf </span>
              <span className='font-bold '>$360</span>
            </div>

          </div>
        </div>
      </div>

    </div>
    <button className='py-2 px-5 bg-red-600 ml-[550px] text-white  rounded-md mt-16'>View All Products</button>


  </main>
  )
}

export default Sale
