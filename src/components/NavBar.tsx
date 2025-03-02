import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  url: string;
}

interface NavBarProps {
  items?: NavItem[];
  className?: string;
}

const defaultItems: NavItem[] = [
  {
    name: "Inicio",
    url: "/",
  },
  {
    name: "Sobre Mí",
    url: "/about",
  },
  {
    name: "Proyectos",
    url: "/project",
  },
  {
    name: "Resume",
    url: "/resume",
  },
];

export function NavBar({ items = defaultItems, className = "" }: NavBarProps) {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6">
      <div className="flex items-center gap-3 bg-[rgba(0,0,0,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const isActive = location.pathname === item.url;

          return (
            <Link
              key={item.name}
              to={item.url}
              className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors
                text-white hover:text-white/90
                ${isActive ? "bg-white/5 text-white" : ""}`}
            >
              <span>{item.name}</span>
              {isActive && (
                <div className="absolute inset-0 w-full bg-white/5 rounded-full -z-10">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                    <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
