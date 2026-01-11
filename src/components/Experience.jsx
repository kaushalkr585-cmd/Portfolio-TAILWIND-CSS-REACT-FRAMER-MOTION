import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      {/* 👇 THIS motion.div MUST close as </motion.div> */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-10 flex flex-wrap lg:justify-center"
          >
            {/* Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">
                {experience.year}
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 text-lg font-semibold">
                {experience.role}{" "}
                <span className="text-sm text-purple-300">
                  - {experience.company}
                </span>
              </h3>

              <p className="mb-4 text-neutral-400">
                {experience.description}
              </p>

              {experience.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
