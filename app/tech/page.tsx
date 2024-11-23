"use client"

import { TalkData } from "@/utils/data"

import { FadeInUpBox } from "@/components/framer/FadeInUpBox"

import Courousel from "./coursouel"

const Talks = () => {
  return (
    <section className="container mt-32 grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="p-4">
        <div className="mb-4 text-5xl font-extrabold">Talks.</div>
        <div className="text-3xl text-gray-600">
working on it to deliver my tech talk learnings
        </div>
      </div>
      {/* <FadeInUpBox>
        <div className="mt-12 grid md:grid-cols-2">
          {TalkData.map((item: any) => {
            return <Courousel {...item} />
          })}
        </div>
      </FadeInUpBox> */}
    </section>
  )
}

export default Talks
