import Link from "next/link"
import { Linkedin, Github, FileText } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
      <Link
        href="https://www.linkedin.com/in/aly-saleh/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="flex items-center text-blue-600 hover:text-blue-800"
      >
        <Linkedin className="w-6 h-6 mr-2" />
        <span>LinkedIn</span>
      </Link>
      <Link
        href="https://github.com/alysaleh1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="flex items-center text-gray-800 hover:text-gray-600"
      >
        <Github className="w-6 h-6 mr-2" />
        <span>GitHub</span>
      </Link>
      <Link
        href="/CV_AlySaleh.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download CV"
        className="flex items-center text-green-600 hover:text-green-800 bg-green-100 hover:bg-green-200 px-4 py-2 rounded-full transition-colors duration-200"
      >
        <FileText className="w-6 h-6 mr-2" />
        <span>CV</span>
      </Link>
    </div>
  )
}

