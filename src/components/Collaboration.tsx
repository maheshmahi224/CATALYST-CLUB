'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export default function Collaboration() {
  return (
    <section className="py-20 bg-black/[0.96] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden border-none shadow-2xl">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          <div className="flex flex-col lg:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-catalyst-cyan uppercase bg-catalyst-cyan/10 rounded-full w-fit">
                Collaboration Announcement
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
                Jatayuv.ai x Consistency.ai
              </h1>
              <div className="space-y-4 text-neutral-300 max-w-lg">
                <p className="font-semibold text-lg text-catalyst-teal">
                  Consistency.ai – The Future of Smart Travel 🌍🚀
                </p>
                <p>
                  Consistency.ai is a mentor-tech company built to help students and startup founders overcome procrastination and unlock their full potential. Unlike traditional platforms that focus on courses, Consistency.ai focuses on accountability, passion, and daily discipline.
                </p>
                <p>
                  Through a mix of personalised mentorship, AI-driven consistency tracking, and peer accountability loops, we guide individuals to build habits, develop self-skills, and stay committed to their growth journey.
                </p>
                <p className="italic text-neutral-400 border-l-2 border-catalyst-cyan pl-4 my-4">
                  "Not courses. Not shortcuts. Just consistency, passion, and growth."
                </p>
                <div className="pt-4">
                  <a
                    href="https://www.jatayuvai.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-catalyst-teal to-catalyst-cyan rounded-md hover:opacity-90 transition-opacity"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 relative min-h-[300px] lg:min-h-full">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
