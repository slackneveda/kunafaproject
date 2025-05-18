import React from 'react';
import img0 from '../assets/pic0.png'


const Footer = () => {
  const links = ['About', 'Menu', 'Order', 'FAQ'];
  const socials = ['Facebook', 'Instagram', 'Twitter', 'Pinterest'];

  return (
    <>
    
    <div className='grid grid-cols-3 w-auto h-auto bg-[#92b423] m-2 font-mono items-center border-2 border-black rounded-md object-cover overflow-hidden min-h-fit'>
      <div className='w-64 h-64 '>
        <img className='object-cover w-full h-full transition-all duration-1000 cursor-pointer overflow-hidden' src={img0} alt="" />
      </div>     
      <div className='flex justify-center text-xl font-bold cursor-pointer leading-relaxed'>
        <ul className='list-none'>
          {links.map((link) => (
            <li 
              className='hover:text-black text-white transition-all duration-1000 active:text-[#bb6815]'
              key={link} 
              onClick={() => console.log(`${link} is clicked`)}
              
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media Section */}
      <div className='flex justify-center text-xl font-bold cursor-pointer leading-relaxed'>
        <ul className='list-none'>
          {socials.map((social) => (
            <li 
              className='hover:text-black text-white transition-all duration-1000 active:text-[#bb6815]' 
              key={social} 
              onClick={() => console.log(`${social} is clicked`)}
            >
              {social}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className='bg-[#92b423] m-2 font-mono border-2 border-black rounded-md'>
    <div className='text-justify text-white'>
        <p className='hover:text-black transition-all duration-1000 text-xl'>
          Kunafa is a sweet, golden embrace of crispy layers and rich syrup 
          that melts your heart with every bite.
        </p>
        <br />
        <p className='hover:text-black transition-all duration-1000 text-xl'>&copy; 2024 Kunafa House. All rights reserved.</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
