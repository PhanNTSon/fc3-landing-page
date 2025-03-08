"use client"

import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import Timeline from "@/components/Timeline"

export default function Home() {
  useEffect(() => {
    const AOS = require("aos")
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    })
  }, [])

  return (
    <main className="min-h-screen">
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
          <div className="flex items-center gap-2">
            <Image
              src="/fc3.jpeg?height=40&width=40"
              alt="FC3 Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-lg font-bold text-primary">FC3 x FCJ Community Day</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="#home" className="text-gray-700 transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#agenda" className="text-gray-700 transition-colors hover:text-primary">
              Agenda
            </Link>
            <Link href="#register" className="text-gray-700 transition-colors hover:text-primary">
              Register
            </Link>
          </nav>
          <Link href="#register">
            <Button size="sm" className="text-white bg-orange-500 cursor-pointer hover:bg-orange-600">
              Register Now
            </Button>
          </Link>
        </div>
      </header>

      <section id="home" className="relative py-40 text-white bg-gradient-to-r from-blue-900 to-blue-700 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Background Pattern" fill className="object-cover" />
        </div>
        <div className="container relative px-4 mx-auto" data-aos="fade-up">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 mb-6 text-white bg-orange-500 rounded-full">
              15th March, 2025 | 8:30 AM - 12:00 PM
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Join Us for the FC3 x FCJ Community Day!</h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Learn, Network, and Explore the Latest in AWS Technologies.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#register">
                <Button size="lg" className="bg-orange-500 cursor-pointer hover:bg-orange-600">
                  Register Now
                </Button>
              </Link>
              <Link href="#agenda">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white cursor-pointer hover:bg-white/10"
                >
                  View Schedule
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-orange-400" />
                <span>15th March, 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-orange-400" />
                <span>8:30 AM - 12:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-orange-400" />
                <span>FPT University, Ha Noi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div data-aos="fade-right">
              <Image
                src="/fcj.jpeg?height=500&width=600"
                alt="Event Preview"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="mb-6 text-3xl font-bold text-primary">About The Event</h2>
              <p className="mb-6 text-gray-700">
                The FC3 x FCJ Community Day is a premier AWS technology event hosted by the FPTU Cloud Computing Club at
                FPT University. This gathering brings together cloud enthusiasts, professionals, and students for a
                morning of learning and networking.
              </p>
              <p className="mb-6 text-gray-700">
                Our goal is to share knowledge about AWS technologies, provide networking opportunities, and inspire the
                next generation of cloud professionals.
              </p>
              <div className="p-6 bg-white border border-blue-400 rounded-lg shadow-md">
                <h3 className="flex items-center gap-2 mb-4 text-lg font-semibold">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  Venue Details
                </h3>
                <p className="text-gray-700">Gamma Conference Hall, FPT University, Thach That, Ha Noi</p>
                <div className="flex items-center gap-2 mt-4">
                  <Users className="w-5 h-5 text-orange-500" />
                  <p className="text-gray-700">Limited seats available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="agenda" className="py-20">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h2 className="mb-4 text-3xl font-bold text-primary">Event Agenda</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Join us for a packed morning of insightful sessions, networking opportunities, and the latest in AWS
              technologies.
            </p>
          </div>

          <Timeline />
        </div>
      </section>

      <section id="register" className="py-20 bg-gradient-to-r from-[#497ED9] to-[#65A0E7] text-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center" data-aos="fade-up">
            <h2 className="mb-4 text-3xl font-bold">Register Now</h2>
            <p className="max-w-2xl mx-auto text-blue-100">
              Secure your spot at the FC3 x FCJ Community Day. Registration is free but seats are limited!
            </p>
          </div>

          <div
            className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* FPT Students */}
            <div className="p-8 text-center transition-all border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-graduation-cap"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">FPT Students</h3>
              <p className="mb-6 text-blue-100">
                Current FPT University students can register using their student email address.
              </p>
              <Link href="https://forms.gle/KzTvFKiv9x3zAp529" target="_blank">
                <Button size="lg" className="bg-[#497ED9] text-white hover:bg-[#3A6AC0] w-full">
                  Register as FPT Student
                </Button>
              </Link>
            </div>

            {/* Other Participants */}
            <div className="p-8 text-center transition-all border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Other Participants</h3>
              <p className="mb-6 text-blue-100">
                Industry professionals, enthusiasts, and students from other institutions.
              </p>
              <Link href="https://forms.gle/KzTvFKiv9x3zAp529" target="_blank">
                <Button size="lg" className="w-full text-white bg-orange-500 hover:bg-orange-600">
                  Register as Guest
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
            <p className="text-blue-100">
              Have questions about registration? Contact us at{" "}
              <span className="font-semibold">contact@fc3.fptu.edu.vn</span>
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 text-white bg-blue-900">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-bold">FC3 x FCJ Community Day</h3>
              <p className="text-blue-200">Learn, Network, and Explore the Latest in AWS Technologies.</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
              <p className="mb-2 text-blue-200">Email: contact@fc3.fptu.edu.vn</p>
              <p className="text-blue-200">Phone: +84 123 456 789</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-white transition-colors hover:text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-white transition-colors hover:text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-white transition-colors hover:text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-8 text-center text-blue-300 border-t border-blue-800">
            <p>© 2025 FPTU Cloud Computing Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

