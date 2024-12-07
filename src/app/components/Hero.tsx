import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex mt-8 h-[270px] w-full  justify-center'>
        <div className=' flex  text-white bg-black w-[80%] s h-full justify-between'>


      {/* left side  */}
      <div className='ml-8 mt-10 '>

        <div className=' flex items-center justify-center '>
            <Image src={'/apple.png'} alt={'apple icon'} width={30} height={30}></Image>
            <span className='flx items-center  text-xs ml-5'>iPhone 14 Series</span></div>

            <div className='w-[200px] mt-5 '>
                <h1 className='text-3xl  ml-5 font-bold '>
            Up to 10% off Voucher</h1>
            <div className='flex mt-5 '>
            <button className='font-bold  ml-5 underline underline-offset-8  '>Shop Now</button>
            <Image src={'/erow.png'} alt= {'aroow'} width={30} height={5} className='ml-5'></Image>
            </div>
            </div>
      </div>
  

  {/* right side  */}
  <div>
    <Image src = {'/phone-pic.png'} alt={'Phone Pic'} width={360} height={210} className='mt-8'></Image>
  </div>



      </div>
    </div>
  )
}

export default Hero
