import Image from "next/image"
import SocialLinks from "./SocialLinks"
import { Layers, LineChart, MessageSquareShare } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-75"></div>
            <Image
              src="headshot.JPG"
              alt="Aly Saleh's Picture"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-lg relative z-10 object-cover"
            />
          </div>
          <h2 className="text-4xl font-bold mb-1 text-center text-gray-800">Hello, I am Aly</h2>
          
          <div className="flex items-center justify-center mb-6">
            <SocialLinks />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-3xl">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Layers className="text-blue-500 mb-3" size={28} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Full Stack Developer</h3>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <LineChart className="text-blue-500 mb-3" size={28} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Application Monitoring Infrastructure Expertise</h3>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <MessageSquareShare className="text-blue-500 mb-3" size={28} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Messaging Systems Experience</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
