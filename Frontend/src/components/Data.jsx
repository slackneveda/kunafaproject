import React from 'react';
import { useLocation } from 'react-router-dom';

const Data = ({ image, title, description }) => {
  const location = useLocation();
  const isGalleryRoute = location.pathname === '/gallery';

  return (
    <>
      <div className='w-25 flex flex-col gap-10 font-mono shadow-lg bg-[#efdcac] rounded-lg border-2 border-black justify-center items-center min-h-fit'>
        <div className='h-6/12 m-4 object-cover overflow-hidden shadow-xl transition-all duration-1000 transform hover:scale-[1.1] hover:z-[2]'>
          <img
            className='object-cover w-full h-full transition-all duration-1000 cursor-pointer rounded-xl border-2 border-black'
            src={image}
            alt={image}
          />
          
        </div>
        
        {!isGalleryRoute && (
          <>
            <div className='h-6/12 text-center font-bold py-2 hover:text-[#92b423] text-2xl transition-all duration-1000'>
              {title}
            </div>
            <div className='text-center hover:text-[#92b423] transition-all duration-1000'>
              {description}
            </div>
            <div>
              <button
                className='font-bold text-center text-white items-center bg-[#92b423] rounded-xl border-2 m-2 p-3 border-black transition-all duration-1000 hover:text-black hover:bg-[#efdcac] active:text-[#bb6815]'
                onClick={() => console.log(`${title} is added to cart`)}
              >
                Add To Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Data;
