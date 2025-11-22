import { motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function BackToBaseCollaboration() {
  return (
    <section id="back-to-base" className="relative">
      <BackgroundPaths title="Official Announcement">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 space-y-6"
        >
          <div className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider text-catalyst-cyan uppercase bg-catalyst-cyan/10 rounded-full">
            Private Event Partnership
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-white/80">
            Catalyst Club × Back to Base
          </h2>
          
          <p className="text-xl md:text-2xl font-semibold text-catalyst-teal dark:text-catalyst-cyan">
            Private Event Partner for Legends Upgrade — AI with Clarity
          </p>
          
          <div className="max-w-2xl mx-auto space-y-4 text-neutral-700 dark:text-neutral-300">
            <p className="text-base md:text-lg">
              This collaboration brings together two forces focused on transforming student innovation into real-world impact, enabling a more powerful and structured learning ecosystem.
            </p>
            
            <div className="pt-4 space-y-3 text-left">
              <p className="text-base font-medium text-neutral-800 dark:text-white">
                Back to Base joins the mission with a shared vision:
              </p>
              <ul className="space-y-2 pl-6">
                <li className="flex items-start">
                  <span className="text-catalyst-cyan mr-2">•</span>
                  <span>Empowering students through real technological exposure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-catalyst-cyan mr-2">•</span>
                  <span>Creating opportunities beyond classrooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-catalyst-cyan mr-2">•</span>
                  <span>Building a culture of innovation driven by clarity, execution, and results</span>
                </li>
              </ul>
            </div>
            
            <p className="text-base md:text-lg pt-4 font-medium italic text-neutral-800 dark:text-white">
              Together, Catalyst Club and Back to Base are set to deliver a high-impact experience that merges intelligence, creativity, and future-ready skill development.
            </p>
            
            <p className="text-xl font-bold text-catalyst-teal dark:text-catalyst-cyan pt-2">
              The upgrade begins now.
            </p>
          </div>
        </motion.div>
      </BackgroundPaths>
    </section>
  );
}
