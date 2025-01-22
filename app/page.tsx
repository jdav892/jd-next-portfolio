"use client"

import { navItems } from "@/data"

import Hero from "@/components/Hero"
import { FloatingNav } from "@/components/ui/FloatingNav"
import Grid from "@/components/Grid"
import RecentProjects from "@/components/RecentProjects"
import Clients from "@/components/Clients"
import Experience from "@/components/Experience"
import Hobbies from "@/components/Hobbies"

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Hobbies />
      </div>
    </main>
  );
}
