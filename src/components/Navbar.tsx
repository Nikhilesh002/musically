"use client";   // put it to use reactjs, since react is client side n nextjs is ssr
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


export default function Navbar({ className }: { className?: string }){
  const [active,setActive]=useState<string|null>(null);
  return(
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href='/'>Home</HoveredLink>
        <MenuItem item="Our Courses" setActive={setActive} active={active}>
          <div className="flex flex-col space-y-3 text-center text-sm">
            <HoveredLink href='/courses'>All Courses</HoveredLink>
            <HoveredLink href='/'>Basic Music Theory</HoveredLink>
            <HoveredLink href='/'>Advanced Composition</HoveredLink>
            <HoveredLink href='/'>Song Writing</HoveredLink>
            <HoveredLink href='/'>Music Composition</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href='/contact'>Contact Us</HoveredLink>
      </Menu>
    </div>
  )
}