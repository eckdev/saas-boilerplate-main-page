"use client";

import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "@/components/ui/button";
import { marketingConfig } from "@/lib/configs";
import { cn } from "@/lib/utils";

export default function NavBar() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="font-display flex items-center text-2xl">
        <Logo />
      </Link>
      {marketingConfig.mainNav?.length ? (
        <nav className="hidden gap-6 md:flex">
          {marketingConfig.mainNav?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
