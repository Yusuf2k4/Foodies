"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./navlink.module.css";

export function Navlink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
