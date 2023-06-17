"use client";

import React, { useEffect, useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { GenericLink } from "./GenericLink";
import { Logo } from "../Logo/Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrollTo, setScrollTo] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen || !scrollTo) return;
    const timer = setTimeout(() => {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
      setScrollTo(null);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isOpen, scrollTo]);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <nav className="sticky z-30 bg-black top-0 pt-8 pb-3">
      <div>
        <div className="flex justify-between md:block">
          <div className="flex items-center justify-between mx-20">
            <Logo />
            <div className="hidden md:flex">
              <ul className=" flex gap-10  text-xl ">
                {/* Menu items for desktop */}
                <GenericLink
                  href={pathname === "/" ? "#header" : "/"}
                  title="home"
                />
                <GenericLink
                  href={pathname === "/" ? "#uberuns" : "/#uberuns"}
                  title="uber uns"
                />
                <GenericLink
                  href={pathname === "/" ? "#preise" : "/#preise"}
                  title="preise"
                />
                <GenericLink
                  href={
                    pathname === "/" ? "#trainingszeiten" : "/#trainingszeiten"
                  }
                  title="trainings"
                />
                <GenericLink
                  href={pathname === "/" ? "#gallery" : "/#gallery"}
                  title="gallery"
                />
                <Link
                  className="element"
                  href={"https://www.fightclub-hallenberg.app/"}
                >
                  App
                </Link>
                <GenericLink
                  href={pathname === "/" ? "#kontakt" : "/#kontakt"}
                  title="kontakt"
                />
              </ul>
            </div>
          </div>
          <div className="flex mr-20  md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className={isOpen ? "hidden" : "flex items-center"}
            >
              <Bars3BottomRightIcon
                className="w-10 h-10"
                onClick={() => setIsOpen(!isOpen)}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div
          className={classNames(
            "absolute top-0 left-0  w-2/3  h-screen   overflow-hidden z-50 bg-black  p-2  md:hidden",
            {
              mobile_nav_animation: isOpen,
              mobile_nav_exit_animation: isClosing,
            }
          )}
        >
          <div className=" overflow-hidden">
            <div className="px-2  mt-10 flex items-center justify-between">
              <div className="flex flex-col uppercase">
                <p className="text-xl text-center ">
                  fight<span className="text-secondary">club</span>
                </p>
                <span className="text-xl  customInnerShadow  ">hallenberg</span>
              </div>
              <div className=" -mr-2 flex w-screen justify-end">
                <button className="" onClick={handleCloseMenu}>
                  <XMarkIcon className="exit-animation w-10 h-10" />
                </button>
              </div>
            </div>
            <ul className=" h-screen flex flex-col mt-20 px-2 pt-2 pb-3 space-y-1 capitalize text-2xl">
              {/* Menu items for mobile */}

              <GenericLink
                href={pathname === "/" ? "#header" : "/"}
                title="home"
                isMobile={true}
                closeMenu={() => setIsOpen(false)}
              />
              <GenericLink
                href={pathname === "/" ? "#uberuns" : "/#uberuns"}
                title="uber uns"
                isMobile={true}
                closeMenu={() => setIsOpen(false)}
              />
              <GenericLink
                href={pathname === "/" ? "#preise" : "/#preise"}
                title="preise"
                isMobile={true}
                closeMenu={() => setIsOpen(false)}
              />
              <GenericLink
                href={
                  pathname === "/" ? "#trainingszeiten" : "/#trainingszeiten"
                }
                title="trainingszeiten"
                isMobile={true}
                closeMenu={() => setIsOpen(false)}
              />
              <GenericLink
                href={pathname === "/" ? "#gallery" : "/#gallery"}
                title="gallery"
                isMobile={true}
                closeMenu={() => setIsOpen(false)}
              />
              <Link href={"https://www.fightclub-hallenberg.app/"}>App</Link>

              <GenericLink
                href={pathname === "/" ? "#kontakt" : "/#kontakt"}
                title="kontakt"
                isMobile={true}
                closeMenu={() => setIsOpen(false)}
              />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
