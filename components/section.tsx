/* eslint-disable react/no-unescaped-entities */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { PersonalProjectData, ProjectData } from "@/utils/data"

import { Icons } from "@/components/icons"

import { Badge } from "./ui/badge"
import PulseAvatar from "./custom/pulse-avatar"
import { siteConfig } from "@/config/site"

export const IntroSection = () => {
  return (
    <>
      <div className="group relative mb-8 h-[180px] w-[180px]">

        <div className="absolute h-full w-full cursor-pointer rounded-full transition-opacity duration-300 group-hover:ring-0">
          <PulseAvatar>
            <Image
              src={siteConfig.avatar_image}
              width={1000}
              height={100}
              className="cursor-pointer rounded-full object-cover"
              alt="avatar_picture"
            />
          </PulseAvatar>
        </div>
        <PulseAvatar>
          <Image
            src={"/assets/image.png"}
            className="absolute rounded-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
           height={600}
           width={2000}
            alt="profile_picture"
          />
        </PulseAvatar>
      </div >
      <div className="text-3xl font-extrabold text-white">
        Hey, I'm Anirban{" "}
        <span className="animate-shake">
          <span className="animate-pulse">👋</span>
        </span>
      </div>

      <div className="text-md mt-2  text-gray-500">
        I'm a <>fullstack developer 🚀</>, <>optimist 🧠</>, and a{" "}
        <>open source advocate 🥑</>. I'm currently working on my Blockchain website called{" "}
        <Link
          className="text-white hover:font-medium hover:underline"
          href="https://github.com/kekubhai/framefi"
          target="_blank"
        >
        Frame-Fi
        </Link>{" "}
        and{" "}
        <Link
          className="text-white hover:font-medium hover:underline"
          href="https://orbitx-ecru.vercel.app/"
          target="_blank"
        >
          Orbit-X
        </Link>{" "}
        and contributing to multiple open source projects.
      </div>

      <div className="text-md  text-gray-500">
        I mainly build with{" "}
        <span className="font-medium"> Next,React, Node, Typescript and Solidity </span>
        but I'm always learning new tools & technologies.
      </div>

      <hr className="mt-12" />
    </>
  )
}

export const ProjectSection = () => {
  return (
    <>
      {" "}
      <div className="mt-12">
        <div className="text-3xl font-bold text-white">Projects.</div>
        <div className="text-md my-2 text-gray-500">
          things I have created
        </div>
        {PersonalProjectData.map((project: ProjectData) => {
          return (
            <div
              onClick={() => window.open(project.titleLink, "_blank")}
              className="base-card mt-8 cursor-pointer rounded-3xl bg-opacity-50 p-4 backdrop-blur-md">
              <Link
                href={project.titleLink}
                target="_blank"
                className="text-white hover:font-medium hover:underline"
              >
                <div className="text-md font-medium text-white">
                  {project.title}
                </div>
              </Link>
              <div className="text-md space-y-2 text-gray-500">
           
                {project.description.map((description: string) => {
                  return (
                    <div className="text-md text-gray-500">{description}</div>
                  )
                })}
              </div>
             
              <div className="text-md mt-1 space-x-1 text-gray-500">
                {project.hastags.map((tag: string) => {
                  return <Badge variant="outline" className="base-card">#{tag}</Badge>
                })}
              </div>
            </div>
          )
        })}

       
      </div>
      {/* <hr className="mt-12" /> */}
    </>
  )
}

export const BlogSection = () => {
  return (
    <>
      <div className="mt-12">
        <div className="text-2xl font-bold  text-white ">Blogs</div>
        <div className="text-md my-2 text-gray-500">
          I like writing about software development, web3 and producitivity.
        </div>

        <Link
          href="https://blogs.tiwaripratik.com/lets-talk-about-react-performance"
          target="__blank"
          className="transition-all hover:font-medium hover:underline"
        >
          <div className="text-md   mt-6 font-medium text-white underline">
            Let's talk about react performance ⚛️
          </div>
          <div className="text-md  hover:none text-gray-500">
            Some of the tips and tricks to improve your react app performance.
          </div>
        </Link>

        <Link
          href="https://blogs.tiwaripratik.com/mono-respositories-in-jsts-what-why-and-how-with-nx"
          target="__blank"
          className="transition-all hover:font-medium hover:underline"
        >
          <div className="text-md   mt-6 font-medium text-white underline">
            Mono Respositories in JS/TS. What? Why? and How? (with Nx)
          </div>
          <div className="text-md  hover:none text-gray-500">
            Sharing about monorepos and how to use them in your projects and
            thier pros and cons.
          </div>
        </Link>

        <Link
          href="https://blogs.tiwaripratik.com/understanding-reacts-ui-rendering-process-understanding-virtual-dom-in-depth"
          target="__blank"
          className="transition-all hover:font-medium hover:underline"
        >
          <div className="text-md   mt-6 font-medium text-white underline">
            Understanding React's UI Rendering Process (understanding virtual
            dom in depth)
          </div>
          <div className="text-md  hover:none text-gray-500">
            Sharing about how react works under the hood.
          </div>
        </Link>
      </div>

      <Link
        href="/blogs"
        target="__blank"
        className="text-md mt-6 flex  cursor-pointer gap-2 font-medium text-white hover:underline"
      >
        <Icons.open />
        <span>More blogs</span>{" "}
      </Link>
    </>
  )
}
