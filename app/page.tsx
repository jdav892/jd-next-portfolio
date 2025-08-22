"use client"

import { navItems } from "@/app/data"

import Hero from "@/app/components/Hero"
import { FloatingNav } from "@/app/components/ui/FloatingNav"
import Grid from "@/app/components/Grid"
import RecentProjects from "@/app/components/RecentProjects"
import Clients from "@/app/components/Clients"
import Experience from "@/app/components/Experience"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid />
        <Experience />
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
