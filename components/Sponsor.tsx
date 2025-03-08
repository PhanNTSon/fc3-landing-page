import { Card, CardContent } from "./ui/card"

import Image from "next/image"

const sponsors = [
  { name: "AWS", logo: "/placeholder.svg?height=80&width=160", tier: "Platinum" },
  { name: "FPT University", logo: "/placeholder.svg?height=80&width=160", tier: "Gold" },
  { name: "Tech Company 1", logo: "/placeholder.svg?height=80&width=160", tier: "Silver" },
  { name: "Tech Company 2", logo: "/placeholder.svg?height=80&width=160", tier: "Silver" },
  { name: "Tech Company 3", logo: "/placeholder.svg?height=80&width=160", tier: "Bronze" },
  { name: "Tech Company 4", logo: "/placeholder.svg?height=80&width=160", tier: "Bronze" },
]

const teamMembers = [
  { name: "Nguyen Van A", role: "President", image: "/placeholder.svg?height=100&width=100" },
  { name: "Tran Thi B", role: "Vice President", image: "/placeholder.svg?height=100&width=100" },
  { name: "Le Van C", role: "Technical Lead", image: "/placeholder.svg?height=100&width=100" },
  { name: "Pham Thi D", role: "Event Coordinator", image: "/placeholder.svg?height=100&width=100" },
  { name: "Hoang Van E", role: "Marketing Lead", image: "/placeholder.svg?height=100&width=100" },
  { name: "Vu Thi F", role: "Content Creator", image: "/placeholder.svg?height=100&width=100" },
]

export default function SponsorSection() {
  return (
      <div data-aos="fade-up">
        <h3 className="mb-8 text-2xl font-bold text-center">FPTU Cloud Computing Club Members</h3>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover border-2 border-blue-500 rounded-full"
                />
              </div>
              <h4 className="font-medium">{member.name}</h4>
              <p className="text-sm text-neutral-800">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

