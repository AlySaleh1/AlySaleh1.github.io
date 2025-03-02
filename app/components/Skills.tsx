"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const skills = [
  { name: "Java", logo: "/icons/java.svg" },
  { name: "Python", logo: "/icons/python.svg" },
  { name: "C#", logo: "/icons/csharp.svg" },
  { name: "SQL", logo: "/icons/mysql.svg" },
  { name: "TypeScript", logo: "/icons/typescript.svg" },
  { name: "Grafana", logo: "/icons/grafana.svg" },
  { name: "Prometheus", logo: "/icons/prometheus.svg" },
  { name: "OpenTelemetry", logo: "/icons/opentelemetry.png" },
  { name: "Kafka", logo: "/icons/kafka.svg" },
  { name: "ZooKeeper", logo: "/icons/zookeeper.svg" },
  { name: "Kubernetes", logo: "/icons/kubernetes.svg" },
  { name: "GraphQL", logo: "/icons/graphql.svg" },
  { name: "Jenkins", logo: "/icons/jenkins.svg" },
  { name: "Spring Boot", logo: "/icons/spring.svg" },
  { name: "Flask", logo: "/icons/flask.svg" },
  { name: "Angular", logo: "/icons/angular.svg" },
  { name: "Neo4j", logo: "/icons/neo4j.svg" },
  { name: "MongoDB", logo: "/icons/mongodb.svg" },
]

export default function Skills() {
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
    <section id="skills" className="py-20 bg-gray-100" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`flex flex-col items-center transition-opacity duration-1000 ease-in-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 mb-2 relative">
                <Image
                  src={skill.logo || "/placeholder.svg"}
                  alt={`${skill.name} logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-600">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

