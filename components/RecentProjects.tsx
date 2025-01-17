import React from 'react'
import { projects } from '@/data'
import { title } from 'process'
import { img } from 'framer-motion/client'

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
                    {title}
                </div>
            ))}
        </div>
    </div>
    </section>
  )
}

export default RecentProjects