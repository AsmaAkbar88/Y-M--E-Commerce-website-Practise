import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='h-[80px] w-full flex justify-center items-center border-b-2'>
      <div className='w-[80%] h-full items-center  flex justify-between'>
{/* left side  */}
<div className='flex '>
  <h1 className='text-3xl font-bold'>Exclusive</h1>
</div>




{/* right side  */}
<div>
  <ul className=' flex gap-x-5 mr-4' >
    <li><Link className='hover:underline' href={'#'}> Home</Link></li>
     <li> <Link className='hover:underline' href={'#'}> About</Link></li>
      <li><Link className='hover:underline' href={'#'}> Contact</Link></li>
      <li><Link className='hover:underline' href={'#'}> Sign Up</Link></li>
  </ul>
</div>


      </div>
    </div>
  )
}

export default Header
