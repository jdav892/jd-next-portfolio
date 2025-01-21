"use client"
import React from 'react'

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { reviews } from "@/data"

const Clients = () => {
  return (
    <div className="py-50" id="reviews">
        <h1 className="heading">
            Reviews from {' '}
            <span className="text-aqua">Past Collaborations
            </span>
        </h1>
        <div className="flex flex-col items-center">
            <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden pt-12">   
                <InfiniteMovingCards 
                    items={reviews}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    </div>
  )
}

export default Clients