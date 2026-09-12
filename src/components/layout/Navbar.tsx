"use client " ;

import { usePathname } from "next/navigation";
import Link from "next/link";

export const LinkArray = [
    {iconName : '' , href : '/'} ,
    {iconName : '' , href : '#about'} , 
    {iconName : '' , href : '#projects'} ,
    {iconName : '' , href : '#journey'} ,
    {iconName : '' , href : '#skill'} ,
    {iconName : '' , href : '#contact'}
]


export function Navbar() {
    const pathName = usePathname() ; 
    return (
      <nav>
        {LinkArray.map((link , idx) => {
          const isActve = pathName === link.href ;
          return (
            <Link href={link.href}  key={idx}>

              </Link>

            )
        } )}
      </nav>

    )
}