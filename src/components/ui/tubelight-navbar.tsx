"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./tubelight-navbar.css";

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
    <nav className={`tubelight-nav ${className}`}>
      <div className="nav-container">
        {items.map((item) => {
          const isActive = location.pathname === item.url;

          return (
            <Link
              key={item.name}
              to={item.url}
              className={`nav-link ${isActive ? "active" : ""}`}
            >
              <span>{item.name}</span>
              <div className={`glow-effect ${isActive ? "active" : ""}`}>
                <div className="glow-bar">
                  <div className="glow-blur-large" />
                  <div className="glow-blur-medium" />
                  <div className="glow-blur-small" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
