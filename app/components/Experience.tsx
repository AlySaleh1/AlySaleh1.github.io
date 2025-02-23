"use client"

import React, { useEffect, useRef, useState } from "react"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const experiences = [
    {
      title: "Software Developer",
      company: "Morgan Stanley",
      period: "Feb 2024 - Present",
      responsibilities: [
        "Assisted various teams in integrating monitoring tools (<b>Prometheus</b>, <b>Grafana</b>, <b>OpenTelemetry</b>).",
        "Replaced REST API calls with a <b>Kafka</b> cluster.",
        "Implemented an alerting system with <b>PagerDuty</b> and <b>OpenTelemetry</b> to detect latency spikes.",
        "Optimized a <b>Spring Boot</b> app's database functionality in a Java application.",
        "Completed a 2-month intensive technical training program",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Morgan Stanley",
      period: "May 2023 - August 2023",
      responsibilities: [
        "Designed and implemented a program that automatically configures and launches <b>Prometheus</b> and <b>Grafana</b>",
      ],
    },
    {
      title: "Software Development Intern",
      company: "LIDD Consultants",
      period: "Jan 2023 - April 2023",
      responsibilities: [
        "Utilized <b>Postman</b> for testing REST API calls for a Warehouse Management System Integration.",
        "Designed solutions for clients using <b>JavaScript</b> to add functionalities to Oracle's NetSuite.",
      ],
    },
    {
      title: "Software Development Intern",
      company: "LIDD Consultants",
      period: "May 2022 - August 2022",
      responsibilities: [
        "Used <b>Python</b> to write integration tests that identified silent errors that would have resulted in lost orders, preventing potential revenue loss for the client company"
      ],
    },    
    {
      title: "Marketing Analyst Intern",
      company: "LIDD Consultants",
      period: "June 2021 - August 2021",
      responsibilities: [
        "Used <b>Python</b> to analyze and visualize ads data resulting in a 50% decrease in the cost per engagement for online ads."
      ],
    }
  ]

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
        threshold: 0.2,
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
    <section id="experience" className="pt-4 pb-20 bg-gray-100" ref={sectionRef}>
      <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
      <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md transition-all duration-1000 ease-in-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-lg font-medium text-blue-600">{exp.company}</p>
                </div>
                <p className="text-sm text-gray-600 mt-1 sm:mt-0">{exp.period}</p>
              </div>
              <div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: responsibility }}></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

