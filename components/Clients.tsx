"use client"
import React from 'react'

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { reviews } from "@/data"

const Clients = () => {
  return (
    <div className="py-20" id="reviews">
        <h1 className="heading">
            Reviews from {' '}
            <span className="text-aqua">Past Collaborations
            </span>
        </h1>
        <div className="flex flex-col items-center">
            <InfiniteMovingCards 
                items={reviews}
                direction="right"
                speed="slow"
            />

        </div>
    </div>
  )
}

export default Clients