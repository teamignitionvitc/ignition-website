'use client'

import React, { useEffect, useRef, useState } from 'react'

const sections = [
  { 
    id: 'section1', 
    title: 'Section 1', 
    content: 'This is the detailed content for section 1. It provides more information about this specific section and its importance in the overall context.', 
    color: 'bg-red-200' 
  },
  { 
    id: 'section2', 
    title: 'Section 2', 
    content: 'Section 2 content goes here. It elaborates on the key points related to this section and how it fits into the bigger picture.', 
    color: 'bg-blue-200' 
  },
  { 
    id: 'section3', 
    title: 'Section 3', 
    content: 'Here you can find the in-depth information about section 3. This content provides valuable insights and details specific to this section.', 
    color: 'bg-green-200' 
  },
  { 
    id: 'section4', 
    title: 'Section 4', 
    content: 'Section 4 content is displayed here. It offers a comprehensive overview of this section and its relevance to the overall topic.', 
    color: 'bg-yellow-200' 
  },
  { 
    id: 'section5', 
    title: 'Section 5', 
    content: 'The final section, number 5, is explained here. This content wraps up the information and provides concluding thoughts on the subject matter.', 
    color: 'bg-purple-200' 
  },
]

export default function ScrollableSplitLayout() {
  const [activeSection, setActiveSection] = useState(null)
  const sectionRefs = useRef({})

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])


  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-3xl font-bold my-8">Scrollable Split Layout</h1>
      <div className="flex w-full">
        <div className="w-1/3 sticky top-0 h-screen overflow-hidden">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`absolute inset-0 transition-opacity duration-300 ${
                activeSection === section.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="h-full flex flex-col justify-center p-8 bg-gray-100">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-2/3 space-y-8">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className={`h-screen flex items-center justify-center text-2xl font-bold ${section.color}`}
            >
              {section.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

