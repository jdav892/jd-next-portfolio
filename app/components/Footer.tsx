import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/app/data'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] mt-10 md:mt-0 md:mb-5" id="contact">
        {/*<div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img 
                src="/footer-grid.svg"
                alt="grid"
                className="w-full h-full opacity-70" 
            />
        </div>*/}
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Looking to <span className="text-aqua">Build</span>?
            </h1>
            {/*<p className="text-white-200 md:mt-10 my-5">Open to opportunities</p>*/}
            <a href="mailto:jadavila9@gmail.com"
                className="mt-5 md:mt-0">
                <MagicButton 
                    title="Reach out"
                    icon={<FaLocationArrow />}
                    position="right" 
                />
            </a> 
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2025 Justin Davila</p>
            <div className="flex items-center md:gap-3 gap-6 z-10 mt-5 md:mt-0">
                {socialMedia.map(({id, img, link}) => (
                    <a 
                    key={id}
                    href={link}
                       >
                        <img 
                        src={img}
                        alt="social icon" 
                        width={60} 
                        height={60}
                        />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer