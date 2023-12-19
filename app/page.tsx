"use client";

import { NextUIProvider } from "@nextui-org/system";

import Link from "next/link";
import * as React from "react";

// 1. import `NextUIProvider` component

export default function Home() {
  return (
    <NextUIProvider className="flex items-center justify-center full-height">
      <main className="">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 gap-y-8">
            {/* -- MAIN HERO LEFT PART -- */}
            <div className="md:col-span-7">
              <div className="h-full flex flex-col justify-center gap-4">
                {/* HERO TEXT CONTENT */}
                <h1 className="">ELECTION PRESIDENT IDSI</h1>
                <p className="text-slate-600 text-3xl font-medium mt-3">
                  La 7e promotion de l’IDSI lance le début des élections de son
                  nouveau président.
                </p>
                {/* CTA Buttons */}
                <div className="flex gap-3 mt-7">
                  <Link href="vote" className="btn btn-primary text-xl">
                    Voter
                  </Link>
                  <Link href="#" className="btn btn-primary--outlined text-xl">
                    Résultats
                  </Link>
                </div>
              </div>
            </div>
            {/* -- MAIN HERO RIGHT PART */}
            <div className="md:col-span-4">
              <img
                className="w-full max-w-xs md:max-w-md"
                src="images/Sitting-hero.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
