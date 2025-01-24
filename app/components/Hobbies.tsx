import React from 'react'
import { CanvasRevealEffect } from "@/app/components/ui/CanvasRevealEffect";
import { AnimatePresence, motion } from 'framer-motion';

const Hobbies = () => {
  return (
  <section className="w-full py-20" id="bio">
    <h1 className="heading">
      About <span className="text-aqua">Me</span>
    </h1>
    <div className="my-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full mx-auto gap-4 px-8">
      <Card 
      title="Tech Enthusiast" 
      icon={<AceternityIcon order="Tech"/>}
      description="I view technology as an invaluable tool, as such I'm constantly learning about new technologies and how they can be applied to different problems. Always seeking to break things down to their fundamental pieces, to gain a greater understanding of its underpinnings." 
      >
        <CanvasRevealEffect
          animationSpeed={2}
          containerClassName="bg-sky-600"
          colors={[[125, 211, 252]]}
        />
      </Card>
      <Card 
      title="Athlete" 
      icon={<AceternityIcon order="Sports"/>}
      description="As an athlete for most of my life sports hold a special place in my heart due to the learned discipline, collaborative skills, and dynamic problem solving development they foster. I'm currently a National level Olympic Style Weightlifter, so even now the habits of daily improvement and ability to grind towards a goal is constantly being refined even in my hobbies." 
      >
        <CanvasRevealEffect
          animationSpeed={2}
          containerClassName="bg-sky-600"
          colors={[[125, 211, 252]]}
        />
      </Card>
      <Card 
      title="Gamer" 
      icon={<AceternityIcon order="Gaming"/>}
      description="Growing up with video games fostered a type of collaborative problem solving that I'm forever grateful for, offering another avenue for learning to work towards long and short term goals in groups, ranging from 3 all the way up to as many as 40 people as a collective for months, even years in some cases." 
      >
        <CanvasRevealEffect
          animationSpeed={2}
          containerClassName="bg-sky-600"
          colors={[[125, 211, 252]]}
        />
      </Card>
    </div>
  </section>
);
}

const Card = ({
title,
icon,
children,
description,
}: {
title: string;
icon: React.ReactNode;
children?: React.ReactNode;
description: string;
}) => {
const [hovered, setHovered] = React.useState(false);
return (
  <div
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-2xl"
  >
    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

    <AnimatePresence>
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-full w-full absolute inset-0"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>

    <div className="relative z-20">
      <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
        {icon}
      </div>
      <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
        {title}
      </h2>
      <h2 className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
        {description}
      </h2>
    </div>
  </div>
);
};

const AceternityIcon = ({ order }: { order: string }) => {
return (
  <div>
  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#33ccff_0%,#000_50%,#33ccff_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-5 py-2 font-bold text-white backdrop-blur-3xl text-3xl">
    {order}
  </span>
</button>
  </div>
);
};

export const Icon = ({ className, ...rest }: any) => {
return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
  )

}

export default Hobbies 