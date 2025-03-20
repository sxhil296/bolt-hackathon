"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export const HeroHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        data-state={"active"}
        className={`fixed z-20 w-full border-b h-[70px] transition-all duration-300 ${isScrolled ? "backdrop-blur-md" : ""}`}
      >
        <div className="mx-auto max-w-6xl px-4 py-2 flex justify-between items-center">
          <Link href="/" aria-label="home">
            <Image src="/logo.png" width={100} height={30} alt="bolt logo" />
          </Link>

          <Button asChild size="sm">
            <Link href="https://www.hackathon.dev" target="_blank">
              <span>Register</span>
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
