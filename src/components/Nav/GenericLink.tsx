import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface GenericLinkProps {
  title: string;
  href: string;
  isMobile?: boolean;
}

export const GenericLink = ({ href, title, isMobile }: GenericLinkProps) => {
  const pathname = usePathname();

  const scrollSmoothly = (e: React.MouseEvent, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <li
      className={`relative  ${
        isMobile ? "pb-3 first-letter:capitalize  " : " first-letter:capitalize"
      } `}
    >
      <Link
        href={href}
        scroll={true}
        className={""}
        onClick={(e) => scrollSmoothly(e, href.slice(1))}
      >
        {title}
      </Link>
    </li>
  );
};
