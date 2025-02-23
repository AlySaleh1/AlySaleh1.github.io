"use client"

import { useState, useEffect, useRef } from "react"
import {
  Heading5Icon as Html5,
  CodepenIcon as Css3,
  CodepenIcon as Javascript,
  CodepenIcon as React,
  NetworkIcon as Nodejs,
  Database,
  GitGraphIcon as Git,
  DockIcon as Docker,
} from "lucide-react"

const technologies = [
  { name: "HTML5", icon: Html5 },
  { name: "CSS3", icon: Css3 },
  { name: "JavaScript", icon: Javascript },
  { name: "React", icon: React },
  { name: "Node.js", icon: Nodejs },
  { name: "Databases", icon: Database },
  { name: "Git", icon: Git },
  { name: "Docker", icon: Docker },
]

export default function Technologies() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="technologies" className="py-20 bg-gray-100" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Technologies I Know</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`flex flex-col items-center transition-opacity duration-1000 ease-in-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <tech.icon className="w-16 h-16 text-gray-700 mb-2" />
              <span className="text-sm font-medium text-gray-600">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

