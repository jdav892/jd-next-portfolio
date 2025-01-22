import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
        <h1 className="heading">
            List of <span className="text-aqua">Recent Projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projects.map(({ id, title, des, img, iconLists,link }) => (
                <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                    <PinContainer title={title} href={link}>
                        <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-black object-cover">
                                <img src="/bg.png" alt="bgimg" />
                            </div>
                            <img
                                src={img}
                                alt=""
                                className="z-10 absolute bottom-0 object-fill h-full w-full"
                            />
                        </div>
                        <h1 className="font-bold lg:text-xl md:text-md text-base line-clamp-1">
                            {title}
                        </h1>
                        <p className="lg:text-md lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>
                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon) => (
                                    <div key={icon} className="border bg-black-400 border-white/[0.2] rounded-xl flex justify-center items-center lg:h-9 lg:w-9 w-8 h-8">
                                        <img src={icon} alt={icon} className="p-2"/>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="flex lg:text-md md:text-xs text-sm text-white">Click for more</p>
                                <FaLocationArrow className="ms-3" color="aqua"/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects