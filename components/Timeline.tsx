import Image from "next/image"

const timelineItems = [
   {
     time: "7:30 AM - 8:00 AM",
     title: "Registration & Networking",
     description: "Check-in and connect with fellow attendees",
     speaker: "",
     role: "",
     speakerImage: "",
     speakerBio: "",
   },
   {
     time: "8:00 AM - 8:30 AM",
     title: "Mini game",
     description: "Interactive activities to break the ice",
     speaker: "",
     role: "",
     speakerImage: "",
     speakerBio: "",
   },
   {
     time: "8:30 AM - 9:00 AM",
     title: "Introduction to Cloud Ops",
     description: "Learn about the fundamentals of cloud operations and best practices",
     speaker: "Mr. Hai Tran",
     role: "AWS Technical Account Manager",
     speakerImage: "/placeholder.svg?height=200&width=200",
     speakerBio:
       "Hai has over 10 years of experience in cloud infrastructure and operations, helping enterprises optimize their AWS deployments.",
   },
   {
     time: "9:00 AM - 9:30 AM",
     title: "Gen AI use cases on AWS",
     description: "Explore practical applications of generative AI on AWS",
     speaker: "Mr. Huy Tran",
     role: "AWS Senior Solution Architect",
     speakerImage: "/placeholder.svg?height=200&width=200",
     speakerBio:
       "Huy specializes in AI/ML solutions on AWS and has helped numerous organizations implement generative AI in their workflows.",
   },
   {
     time: "9:30 AM - 10:00 AM",
     title: "Applied Gen AI in DevOps",
     description: "Discover how generative AI is transforming DevOps practices",
     speaker: "Ms. Yen Trinh",
     role: "AWS Community Builder",
     speakerImage: "/placeholder.svg?height=200&width=200",
     speakerBio:
       "Yen is passionate about DevOps culture and has been at the forefront of integrating AI into CI/CD pipelines.",
   },
   {
     time: "10:00 AM - 10:15 AM",
     title: "Tea break",
     description: "Refresh and network with speakers and attendees",
     speaker: "",
     role: "",
     speakerImage: "",
     speakerBio: "",
   },
   {
     time: "10:15 AM - 10:45 AM",
     title: "EKS Auto Mode Best Practices",
     description: "Learn optimal configurations for Amazon EKS Auto Mode",
     speaker: "Mr. Kha Van",
     role: "AWS Community Builder",
     speakerImage: "/placeholder.svg?height=200&width=200",
     speakerBio:
       "Kha is a Kubernetes expert who has helped design and implement EKS solutions for enterprises across Asia.",
   },
   {
     time: "10:45 AM - 11:15 AM",
     title: "Demystifying cost optimization on AWS",
     description: "Strategies to effectively manage and reduce AWS costs",
     speaker: "Mr. Tung Cao",
     role: "AWS Solution Architect",
     speakerImage: "/placeholder.svg?height=200&width=200",
     speakerBio:
       "Tung has helped companies save millions in cloud costs through effective optimization strategies and architectural improvements.",
   },
   {
     time: "11:15 AM - 11:30 AM",
     title: "Closing Remarks & Networking",
     description: "Final thoughts and additional networking opportunity",
     speaker: "",
     role: "",
     speakerImage: "",
     speakerBio: "",
   },
 ]
 
 export default function Timeline() {
   return (
     <div className="relative">
       <div className="absolute top-0 bottom-0 hidden w-1 transform -translate-x-1/2 md:block left-1/2 bg-gradient-to-b from-[#497ED9] to-[#65A0E7]"></div>
 
       <div className="md:hidden absolute left-[20px] top-0 bottom-0 w-1 bg-gradient-to-r from-[#497ED9] to-[#65A0E7]"></div>
 
       <div className="space-y-12">
         {timelineItems.map((item, index) => {
           const isEven = index % 2 === 0
           const isOdd = !isEven
 
           return (
             <div
               key={index}
               className={`relative flex items-start`}
               data-aos={isEven ? "fade-right" : "fade-left"}
               data-aos-delay={index * 50}
             >
               <div className="absolute left-[12px] md:left-1/2 w-5 h-5 bg-white border-4 border-blue-500 rounded-full transform md:-translate-x-1/2 z-10 mt-6"></div>
 
               <div
                 className={`
                 pl-12 md:pl-0 w-full 
                 ${isEven ? "md:pr-[calc(50%+1.5rem)] md:text-right" : "md:pl-[calc(50%+1.5rem)]"}
               `}
               >
                 <div className="mb-2">
                   <span className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                     {item.time}
                   </span>
                 </div>
 
                 <div
                   className={`
                   bg-white rounded-2xl shadow-lg p-6 border border-blue-400
                   hover:shadow-xl transition-all duration-300
                   ${item.speaker ? "bg-gradient-to-br from-white to-blue-50" : ""}
                 `}
                 >
                   <h3 className="mb-2 text-xl font-bold text-blue-800">{item.title}</h3>
                   <p className="mb-4 text-gray-600">{item.description}</p>
 
                   {item.speaker && (
                     <div className="pt-4 mt-4 border-t border-gray-100">
                       <div className="flex items-start gap-4 md:items-center">
                         <div className="relative flex-shrink-0 w-16 h-16 overflow-hidden border-2 border-blue-400 rounded-full shadow-md">
                           <Image
                             src={item.speakerImage || "/placeholder.svg?height=200&width=200"}
                             alt={item.speaker}
                             fill
                             className="object-cover"
                           />
                         </div>
                         <div>
                           <h4 className="font-semibold text-gray-800">{item.speaker}</h4>
                           <p className="mb-1 text-sm text-blue-600">{item.role}</p>
                           {item.speakerBio && <p className="mt-1 text-sm text-gray-500">{item.speakerBio}</p>}
                         </div>
                       </div>
                     </div>
                   )}
                 </div>
               </div>
             </div>
           )
         })}
       </div>
     </div>
   )
 }