import React from "react";
import { Users, Monitor, Award, Clock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  const features = [
    {
      title: "Clean & Modern Design",
      description: "We design clean, modern and user-friendly interfaces.",
      icon: <Monitor className="w-5 h-5 text-yellow-500" />
    },
    {
      title: "Experienced Team",
      description: "Our team of experts have years of experience in delivering results.",
      icon: <Users className="w-5 h-5 text-yellow-500" />
    },
    {
      title: "Result Driven Solutions",
      description: "We focus on strategies that deliver real results for your business.",
      icon: <Award className="w-5 h-5 text-yellow-500" />
    },
    {
      title: "On-Time Delivery",
      description: "We deliver projects on time without compromising on quality.",
      icon: <Clock className="w-5 h-5 text-yellow-500" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <span className="font-display font-semibold text-sm uppercase tracking-widest text-yellow-500 mb-4">
            ABOUT US
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 leading-tight mb-6">
            We Are A Team Of <br />
            Creative Minds
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
            We are passionate about building beautiful, functional and result-driven digital products.
          </p>
          <button className="interactive-hover group px-8 py-3.5 rounded-md bg-yellow-500 text-black font-display font-semibold tracking-wide hover:bg-yellow-400 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20">
            LEARN MORE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Right Side - Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-yellow-500/30 flex items-center justify-center bg-yellow-50/50">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
