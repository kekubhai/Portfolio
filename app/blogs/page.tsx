/* eslint-disable jsx-a11y/alt-text */
"use client"

import { BlogData } from "@/utils/data"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { FadeInUpBox } from "@/components/framer/FadeInUpBox"
import { Button } from "@/components/ui/button"

const Blogs = () => {
  return (
    <section className="container mt-[8rem] grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="p-4">
        <div className="mb-4 text-5xl font-extrabold">Blogs.</div>
        <div className="text-gray-600">
          Explore my thoughts on software development, emerging tech, and industry trends.
        </div>
      </div>

      <div className="flex items-center">
        <Link target="__blank" href={"https://www.notion.so/b5dd7453f56a4db3a63fe952ab158066"}>
          <Button variant={"destructive"}>
     
            Notion
          </Button>
        </Link>
       
      </div>
      <div className="grid-col-2 mx-4 my-12 grid space-y-10">
        <AnimatePresence>
          {BlogData.map((item: any) => (
            <FadeInUpBox>
              <Link
                key={item.title}
                target="__blank"
                href={item.url}
                className="translate-all flex h-full flex-col justify-center"
              >
                <div className="focus:outline-offset-6 text-lg font-medium underline decoration-neutral-600 underline-offset-4 transition-colors hover:text-gray-400 hover:decoration-neutral-500 focus:decoration-neutral-500">{item.title}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                </div>
              </Link>
            </FadeInUpBox>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Blogs
