import React from 'react'
import { projects } from '@/data'
import { title } from 'process'
import { img } from 'framer-motion/client'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
  return (
    <section id="#projects">
    <div className="py-20">
        <h1 className="heading">
            List of <span className="text-aqua">Recent Projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projects.map(({ id, title, des, img, iconLists,link }) => (
                <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                    <PinContainer title={title} href={link}>
                        <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]'>
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-black">
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                            <img
                                src={img}
                                alt=""
                                className="z-10 absolute bottom-0"
                            />
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {title}
                        </h1>
                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>
                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className="border bg-black-400 border-white/[0.2] rounded-xl flex justify-center items-center lg:h-10 lg:w-10">
                                        <img src={icon} alt={icon} className="p-2"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
    </section>
  )
}

export default RecentProjects