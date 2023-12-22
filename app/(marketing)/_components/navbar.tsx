"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
export const Navbar =()=>{
    const scrolled = useScrollTop();
    return(
        <div className= {cn(
            "z-50 bg-backgroud dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
            scrolled && 'border-b shadow-sm'
        )}>
        <Logo/>
        <div className="md:ml-auto md:justify-end 
        justify-between w-full flex items-center gp-x-2">
         <ModeToggle/>
        </div>
        </div>
    )
}