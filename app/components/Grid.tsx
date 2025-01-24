import dynamic from "next/dynamic";
import { gridItems } from '@/app/data/index'

const BentoGrid = dynamic(() => import("./ui/BentoGrid").then((mod) => mod.BentoGrid), {ssr: false});
const BentoGridItem = dynamic(() => import("./ui/BentoGrid").then((mod) => mod.BentoGridItem), {ssr: false});


const Grid = () => {
  return (
    <section id="about">
        <BentoGrid className="w-full py-20">
            {gridItems.map((item) => (
                <BentoGridItem 
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                    img={item.img}
                    imgClassName={item.imgClassName}
                    titleClassName={item.titleClassName}
                    spareImg={item.spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid