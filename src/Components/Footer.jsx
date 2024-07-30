import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex  gap-12 font-lato  text-gray-800 '>
        <li><a href="#" >Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Linkedin</a></li>
      </ul>
      <div className='flex gap-2'>
        <img src="./assets/asset 6.svg" alt="img" />
        <div>
        <p className='font-playfair font-thin  '>Have any Questions?</p>
        <a href="#" className='font-lato font-medium'>Talk to a specialist</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
