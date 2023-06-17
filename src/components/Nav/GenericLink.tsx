import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface GenericLinkProps {
  title: string;
  href: string;
  isMobile?: boolean;
  closeMenu?: () => void;
}

export const GenericLink = ({
  href,
  title,
  isMobile,
  closeMenu,
}: GenericLinkProps) => {
  const pathname = usePathname();

  const scrollSmoothly = (e: React.MouseEvent, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: rect.top + scrollTop - 200,
          behavior: "smooth",
        });
      }
      if (isMobile && closeMenu) closeMenu(); // Zamyka menu po kliknięciu linku na urządzeniach mobilnych
    }
  };
  return (
    <li
      className={`relative element ${
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
