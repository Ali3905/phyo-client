import React from 'react'
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className='flex sm:flex-row flex-col text-[12px] mt-[42px] pb-[91px] text-[#59565F] gap-x-[172px] p-[40px]'>
      <div className='flex-1'>
        <span className='text-[#5FC34E] leading-[24px] pb-[14px] text-[16px]'>Logo</span>
        <p className='flex text-[12px] text-[#59565F] flex-wrap'>
          With Pyromedia.AI, Finding Influencers who truly resonate with your audience has never been easier. Whether you’re a small startup or an industry leader, we’re here to match you with creators who align with your goals, amplify your brand, and drive real results.
        </p>
        <p className='mt-[22px] text-[12px] text-[#59565F]'>© 2024. All Rights Reserved. Made with love by PyroMedia</p>
      </div>

      <div className='flex-1'>
        <h3 className='text-[#5FC34E] leading-[24px] pb-[14px] text-[16px]'>CONNECT</h3>
        <p className='flex flex-wrap text-[12px] text-[#59565F]'>PLATINA TOWER, Mehrauli-Gurgaon Rd, A Block, DLF Phase 1, Sector 28, Gurugram, Haryana 122002</p>
        <p className='mt-[14px]'>support@pyromedia.ai</p>
      </div>

      <div className='flex-1'>
        <h3 className='text-[#5FC34E] leading-[24px] pb-[14px] text-[16px]'>FOLLOW US</h3>
        <span className='flex gap-x-4'> <Instagram />  <Facebook />  <Twitter /> <Linkedin /></span>
      </div>
    </footer>
  )
}

export default Footer
