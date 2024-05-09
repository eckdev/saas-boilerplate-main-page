import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Footer from "@/components/layouts/footer";
import NavBar from "@/components/layouts/nav";
import TechList from "@/components/layouts/slider/techs";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LampDemo } from "@/components/ui/lamp";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <NavBar />
        </div>
      </header>
      <main className="flex-1">
        <div className="relative w-full bg-background  bg-grid-black/[0.06] dark:bg-primary dark:bg-grid-white/[0.06]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] dark:bg-primary"></div>
          <section className="relative z-20  pt-6 <md:pt-10">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
              <Link
                href={"https://twitter.com/ecankayadarcin"}
                className="flex rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                target="_blank"
              >
                Follow along on{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 462.799"
                  className="ml-2 w-4"
                >
                  <path
                    fillRule="nonzero"
                    d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                  ></path>
                </svg>
              </Link>
              <h1
                className="animate-fade-up font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  animationDelay: "0.15s",
                  animationFillMode: "forwards",
                }}
              >
                <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text font-extrabold text-transparent">
                  Next.JS SaaS Boilerplate
                </span>{" "}
                for building awesome applications 🚀
              </h1>
              <p
                className="max-w-[42rem] animate-fade-up leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                style={{
                  animationDelay: "0.25s",
                  animationFillMode: "forwards",
                }}
              >
                Speed up your saas development and save months of work.
              </p>
              <div className="space-x-4">
                <Link
                  href="/login"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Get started
                </Link>
                <Link
                  href={
                    "https://github.com/eckdev/nextjs-lemonsqueezy-boilerplate"
                  }
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" })
                  )}
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="container relative mt-16 mb-24 rounded-2xl p-0">
              <div className="rounded-md md:rounded-none -mt-px mx-auto max-w-6xl p-2 bg-primary/[0.07]">
                <Image
                  src={"/mockup3.png"}
                  alt="site mockup"
                  className="rounded sm:rounded-lg"
                  width={1900}
                  height={1000}
                />
              </div>
            </div>
          </section>
          <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <div className="container mx-auto w-full max-w-[64rem]">
              <div className="mx-auto mb-16 text-center">
                <h2 className="mb-4 text-dark text-3xl font-black tracking-[-.5px] sm:text-4xl md:text-[44px]/[50px] dark:text-white">
                  Start a SaaS venture utilizing cutting-edge technology to
                  saving hundreds of hours.
                </h2>
                <p className="text-muted-foreground dark:text-gray-4 text-base ">
                  SaasBoilerplate offers an innovative SaaS platform harnessing
                  cutting-edge technology to streamline operations, saving
                  hundreds of work hours. Our solution is designed to optimize
                  efficiency and drive productivity, empowering businesses to
                  achieve more in less time.
                </p>
              </div>
              <TechList />
            </div>
          </section>
          <section id="pricing" className="container space-y-6 bg-primary/[0.07] py-8 sm:rounded-3xl dark:bg-transparent md:py-12 lg:py-24 overflow-hidden">
              <div className="flex flex-col text-center w-full mb-20">
                <h2 className="mb-4 text-dark text-3xl font-black tracking-[-.5px] sm:text-4xl md:text-[44px]/[50px] dark:text-white">
                  Pricing
                </h2>
                <p className="text-base text-body dark:text-gray-4 mx-auto">
                Enjoy lifetime usage and receive updates for life, all without any additional concerns or any recurring charges!
                </p>
              </div>
              <div className="flex flex-wrap -m-4 justify-center">
                <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
                  <div className="h-full p-6 rounded-lg  bg-white shadow-xl border-2 border-primary flex flex-col relative overflow-hidden">
                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                      PRO
                    </h2>
                    <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                      <span>$0</span>
                      <span className="text-lg ml-1 font-normal text-gray-500">
                        /mo
                      </span>
                    </h1>
                    <p className="flex items-center text-foreground mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      SaaS Starter Kit and Boilerplate
                    </p>
                    <p className="flex items-center text-foreground mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Landing Page and Components
                    </p>
                    <p className="flex items-center text-gray-600 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      All integrations - Db,Auth,Payment and More
                    </p>
                    <p className="flex items-center text-gray-600 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Admin Dashboard
                    </p>
                    <p className="flex items-center text-gray-600 mb-6">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      SaaS Subscription Solution
                    </p>

                    <button className="flex items-center mt-auto text-white bg-primary border-0 py-2 px-4 w-full focus:outline-none hover:bg-primary/90 rounded">
                      Get Started
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-auto"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    <p className="text-xs text-foreground mt-3">
                      It is completely free for now. You can donate if you wish.
                    </p>
                  </div>
                </div>
              </div>
          </section>
        </div>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
