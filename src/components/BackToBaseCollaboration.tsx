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
          
          <p className="text-xl md:text-2xl font-semibold text-catalyst-teal dark:text-catalyst-cyan mt-4">
            Private Event Partner for Legends Upgrade — AI with Clarity
          </p>
          
          <div className="max-w-2xl mx-auto pt-6">
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Transforming student innovation into real-world impact through a powerful and structured learning ecosystem.
            </p>
          </div>
        </motion.div>
      </BackgroundPaths>
    </section>
  );
}
