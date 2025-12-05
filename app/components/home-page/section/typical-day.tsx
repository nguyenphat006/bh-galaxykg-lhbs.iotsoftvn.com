import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import placeholder from "@/images/base/placeholder.png"
const dailyActivities = [
  {
    id: 1,
    title: "Start strong, stay focused",
    description:
      "High school students begin the day with homeroom and advisory sessions to review goals, plan assignments, and reflect on progress. These moments help them stay focused, organized, and ready for a productive day.",
    image:
      placeholder,
    alt: "High school students preparing for morning advisory",
    timeLabel: "Morning advisory",
    timelineColor: "#1A5336",
    backgroundColor: "#1A5336",
    titleColor: "#FFAE00",
    descriptionColor: "#FFFFFF",
  },
  {
    id: 2,
    title: "Academic excellence in action",
    description:
      "Morning lessons focus on IGCSE and A-Level courses, where students develop deep subject mastery and critical thinking. They engage in discussions, labs, and problem-solving activities that prepare them for university-level challenges.",
    image:
      placeholder,
    alt: "High school students engaged in academic lessons",
    timeLabel: "Morning classes",
    timelineColor: "#FABA1E",
    backgroundColor: "#FFFFFF",
    titleColor: "#1A5336",
    descriptionColor: "#1A1A1A99",
  },
  {
    id: 3,
    title: "Recharge and connect",
    description:
      "Lunchtime offers students the chance to recharge and build friendships. Many also take part in student-led clubs or discussions about projects, competitions, or community initiatives.",
    image:
      placeholder,
    alt: "Students having lunch and sharing ideas with peers",
    timeLabel: "Lunch break",
    timelineColor: "#1A5336",
    backgroundColor: "#FFFFFF",
    titleColor: "#1A5336",
    descriptionColor: "#1A1A1A99",
  },
  {
    id: 4,
    title: "Beyond the classroom",
    description:
      "Afternoons feature extended learning — from research projects, leadership workshops, and global issue seminars to creativity and innovation labs. Students learn to lead, collaborate, and make meaningful impact.",
    image:
      placeholder,
    alt: "High school students in leadership and innovation projects",
    timeLabel: "Afternoon sessions",
    timelineColor: "#FABA1E",
    backgroundColor: "#FFFFFF",
    titleColor: "#1A5336",
    descriptionColor: "#1A1A1A99",
  },
  {
    id: 5,
    title: "Pathways to the future",
    description:
      "After school, students focus on university preparation — attending mentorship sessions, career counseling, or advanced academic clubs. Many also pursue arts, sports, or service projects to strengthen their personal portfolios.",
    image:
      placeholder,
    alt: "Students participating in university prep and after-school clubs",
    timeLabel: "After school",
    timelineColor: "#FABA1E",
    backgroundColor: "#FFFFFF",
    titleColor: "#1A5336",
    descriptionColor: "#1A1A1A99",
  },
];

export default function TypicalDaySection() {
  return (
    <section className="py-24 md:py-32">
      <div className="w-full max-w-screen-2xl mx-auto">
        {/* Title Row - Full Width */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-[#1a5336] mb-6 text-4xl lg:text-5xl leading-tight">
            A typical day at LHBS Kindergarten
          </h2>
          <p className="text-[#212121] font-medium text-lg max-w-3xl mx-auto">
            Each day combines rigorous academics, university preparation, and enriching experiences.
          </p>
        </div>

        {/* Carousel Section - Full Width */}
        <div className="relative w-full">
            <Carousel className="relative overflow-visible">
              <CarouselContent className="-ml-6 overflow-visible">
                {dailyActivities.map((activity) => (
                  <CarouselItem key={activity.id} className="pl-6 basis-auto overflow-visible">
                    {/* Card with higher z-index */}
                    <div className="relative z-20 overflow-visible">
                      <Card className="py-0 bg-white shadow-lg border border-gray-200 w-[374px] h-[457px] overflow-hidden">
                        <CardContent className="p-0 h-full">
                          <div className="relative h-[250px] overflow-hidden">
                            <img
                              src={activity.image}
                              alt={activity.alt}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div 
                            className={`p-6 h-[207px] flex flex-col ${
                              activity.backgroundColor === '#1A5336' ? 'bg-[#1A5336]' : 'bg-white'
                            }`}
                          >
                            <h3 className={`font-['SVN-Gotham'] text-xl mb-3 ${
                                activity.titleColor === '#FFAE00' ? 'text-[#FFAE00]' : 'text-[#1A5336]'
                              }`}>
                              {activity.title}
                            </h3>
                            <p className={`text-sm leading-relaxed grow min-h-20 line-clamp-5 ${
                                activity.descriptionColor === '#FFFFFF' ? 'text-white' : 'text-[#1A1A1A]/60'
                              }`}>
                              {activity.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Synchronized Timeline Elements positioned under each card */}
                    <div className="flex flex-col items-center mt-6 relative z-30 overflow-visible">
                      {/* Vertical connecting line from card center to timeline */}
                      <div className={`w-0.5 h-16 relative z-30 ${
                          activity.timelineColor === "#1A5336" ? 'bg-[#1A5336]/80' : 'bg-[#FABA1E]/80'
                        }`} />
                      
                      {/* Timeline dot positioned at the center */}
                      <div className={`w-4 h-4 rounded-full border-4 border-white shadow-lg relative z-30 ${
                          activity.timelineColor === "#1A5336" ? 'bg-[#1A5336]' : 'bg-[#FABA1E]'
                        }`} />
                      
                      {/* Timeline label below dot */}
                      <div className="text-center mt-1 relative z-30 overflow-visible">
                        <p className="text-[#1A5336] text-sm uppercase whitespace-nowrap font-semibold">
                          {activity.timeLabel}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Timeline line that moves with carousel */}
              <div className="absolute bottom-0 left-0 right-0 z-10 overflow-visible">
                <div className="relative h-0.5 bg-[#1a5336]/20 overflow-visible -top-7" />
              </div>
              
              {/* Navigation Buttons positioned at center sides */}
              <CarouselPrevious className="absolute top-1/2 -left-6 -translate-y-1/2 h-12 w-12 bg-white border-0 text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colorss" />
              <CarouselNext className="absolute top-1/2 -right-6 -translate-y-1/2 h-12 w-12 bg-white border-0 text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}