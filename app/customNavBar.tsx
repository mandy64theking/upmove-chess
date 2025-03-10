"use client"
import { useState } from "react";
import NavBar from "./navBar";
import { useTheme } from "next-themes"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
export default function CustomNavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { setTheme } = useTheme();
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
    return(
    <div className={`fixed top-0 left-0 sm:w-[95vw] w-[90vw] bg-background opacity-90 flex ${menuOpen ? 'flex-col h-[48vh] z-10 opacity-100':'flex-row h-[15vh] z-10'} justify-between p-8 m-5 border-2 border-gray rounded-3xl`}>
              <div className="flex flex-row justify-between w-full items-center">
                <img src="logo.png" alt="Upmove Chess Academy" className="dark:invert max-h-[10vh] min-h-10 min-w-1.5 bg-white rounded-md"/>
                <ul className="m-2 flex flex-col sm:hidden cursor-pointer z-10" onClick={handleMenuClick}>
                  <li className={`bg-foreground w-10 h-1 m-1 rounded-full transition-transform duration-300 ${menuOpen ? 'transform rotate-45 translate-y-3' : ''}`}></li>
                  <li className={`bg-foreground w-10 h-1 m-1 rounded-full transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></li>
                  <li className={`bg-foreground w-10 h-1 m-1 rounded-full transition-transform duration-300 ${menuOpen ? 'transform -rotate-45 -translate-y-3' : ''}`}></li>
                </ul>
              </div>
              <div className={`justify-center sm:flex ${menuOpen ? 'fixed top-[15vh] left-0 w-full opacity-90 flex flex-col items-center p-5':'hidden'}`}><NavBar className={`${menuOpen ? 'flex-col':'h-full align-middle justify-center items-start'}`}/></div>
              <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger><a href=""onClick={()=> setTheme("dark")}><img src="night-mode.png" className="max-w-7 ml-2 m-1 flex dark:hidden" alt="" /></a></TooltipTrigger>
                    <TooltipContent>
                    <p>Switch to Dark Mode</p>
                    </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                <TooltipTrigger><a href=""onClick={()=> setTheme("light")}><img src="light-mode.png" className="invert ml-2 m-1 max-w-7 hidden dark:flex" alt="" /></a></TooltipTrigger>
                <TooltipContent>
                <p>Switch to Light Mode</p>
                </TooltipContent>
                 </Tooltip>
                </TooltipProvider>
    </div>
    );
}