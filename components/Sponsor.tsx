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
    <div>
      <div className="mb-16 text-center" data-aos="fade-up">
        <h2 className="mb-4 text-3xl font-bold text-primary">Our Sponsors & Team</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          We're grateful to our sponsors for making this event possible and to our dedicated team members who work
          tirelessly to organize it.
        </p>
      </div>

      <div className="mb-16" data-aos="fade-up">
        <h3 className="mb-8 text-2xl font-bold text-center">Sponsors & Partners</h3>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="transition-shadow border-0 shadow-sm hover:shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={`${sponsor.name} logo`}
                  width={160}
                  height={80}
                  className="mb-4"
                />
                <p className="font-medium text-gray-800">{sponsor.name}</p>
                <span className="text-xs text-gray-500">{sponsor.tier} Sponsor</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

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
              <h4 className="font-medium text-gray-800">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

