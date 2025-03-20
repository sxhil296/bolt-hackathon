"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";


export const HeroHeader = () => {

  return (
    <header>
      <nav
        data-state={"active"}
        className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl h-[70px]"
      >
        <div className="mx-auto max-w-6xl px-4 py-2 transition-all duration-300 flex justify-between items-center">
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
