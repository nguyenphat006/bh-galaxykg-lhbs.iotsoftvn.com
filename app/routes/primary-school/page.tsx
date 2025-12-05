import { ChevronRight, Check, BookOpen, Users, Globe, Target, Lightbulb, Heart, Beaker, Activity, Clock, Music, Palette, MessageCircle, Award } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '~/components/ImageWithFallback';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

export default function PrimarySchoolPage() {
  const navigate = useNavigate();
  
  const onNavigate = (path: string) => {
    navigate(path);
  };

 const dailyActivities = [
  {
    id: 1,
    title: "Morning readiness",
    description:
      "Our Primary students begin their day with engaging morning activities designed to build focus and enthusiasm for learning. They review lessons, set daily goals, and participate in quick brain-boosting games to start the day positively.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/eyfs-chuong-trnh-mam-non-quoc-te-bvis-hcmc-(4).jpg?h=4000&iar=0&w=6000&rev=3eb563f8079645d0b5c7ee7ec1d8acda&extension=webp&hash=7CF74FAF838DCCF306526D9F7B2A908A",
    alt: "Primary students starting the school day with morning review",
    timeLabel: "Morning start",
    timelineColor: "#1A5336",
    backgroundColor: "#E8F5E8",
  },
  {
    id: 2,
    title: "Interactive learning",
    description:
      "Students engage in core subjects such as English, Math, and Science through interactive lessons that encourage collaboration, questioning, and creativity. Teachers guide them to think critically and apply knowledge in real-world contexts.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/eyfs-chuong-trnh-mam-non-quoc-te-bvis-hcmc-(5).jpg?h=4000&iar=0&w=6000&rev=33d45eb048f140ddb46c7e46e4b8f161&extension=webp&hash=3649DA0EDBEB8F7EB05AB7C2EBF92E48",
    alt: "Primary students engaged in interactive classroom activities",
    timeLabel: "Morning classes",
    timelineColor: "#FABA1E",
    backgroundColor: "#FFF7CC",
  },
  {
    id: 3,
    title: "Lunch and friendship",
    description:
      "Lunchtime is a chance for students to recharge and connect with friends. Balanced meals are served onsite, promoting healthy habits and social interaction in a supportive school environment.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/fy22-23/dsc03911_11zon/33-eyfs11zon/dsc03897_11zon.jpg?h=5065&iar=0&w=7594&rev=7bd0a9ff989d4c3f966eed75045762d6&extension=webp&hash=6513642867256C811423751D51655AF4",
    alt: "Primary students enjoying lunch together at school cafeteria",
    timeLabel: "Lunch break",
    timelineColor: "#1A5336",
    backgroundColor: "#F0FDF4",
  },
  {
    id: 4,
    title: "Afternoon exploration",
    description:
      "Afternoons are filled with creative and exploratory lessons such as Art, STEAM, and Global Citizenship. Students express themselves, experiment, and work together to solve real-world challenges.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/eyfs-chuong-trnh-mam-non-quoc-te-bvis-hcmc-(3).jpg?h=4158&iar=0&w=6234&rev=65e1c9b4f5ec464590dcaf0fabfe74a7&extension=webp&hash=79B3720A41ED262F520F77A1A7CBAC46",
    alt: "Students participating in afternoon creative and STEAM projects",
    timeLabel: "Afternoon learning",
    timelineColor: "#FABA1E",
    backgroundColor: "#FFF1CC",
  },
  {
    id: 5,
    title: "After-school clubs",
    description:
      "At the end of the day, students can join after-school clubs and enrichment activities such as sports, music, robotics, or art. These programs help them discover passions, develop teamwork, and build confidence.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/fy22-23/early-year-3511zon.jpg?h=6240&iar=0&w=4162&rev=2c0b6a46fb804d5cb089bf6b31c6c80c&extension=webp&hash=4A853B427858573CD456248656D18F10",
    alt: "Primary students joining after-school sports and art clubs",
    timeLabel: "After school",
    timelineColor: "#FABA1E",
    backgroundColor: "#FEF7ED",
  },
];


  return (
    <div className="w-full ">
      {/* 1. HERO SECTION */}
      <section 
        className="relative min-h-[65vh] md:min-h-[40vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.8), rgba(26, 83, 54, 0.8)), url(https://lhbs.edu.vn/wp-content/uploads/2024/07/DSC04962.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative w-full max-w-screen-xl mx-auto px-6 md:px-12 py-24 md:py-32">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('/')}
                  className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                >
                  Home
                </button>
              </li>
              <li><ChevronRight className="w-4 h-4 text-[#fffae9]/70" /></li>
              <li className="text-[#fffae9] ">Primary School</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4  uppercase tracking-wider text-sm">
              AGES 6 TO 11 · PRIMARY SCHOOL
            </p>
            <h1 
              className="font-['SVN-Gotham'] text-white mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              LHBS Primary School – Grades 1 to 5
            </h1>
            <p className="text-[#fffae9]/90 mb-8  text-lg leading-relaxed max-w-2xl">
              At LHBS, we believe every child is a natural learner. Our child-centred Primary programme places students at the heart of everything we do, nurturing their social and emotional growth, independence, and confidence through bilingual excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('/contact/book-tour')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
              >
                Book a School Tour
              </button>
              <button 
                onClick={() => onNavigate('/admissions/apply-now')}
                className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover: hover:text-[#1a5336] transition-colors"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ONE PRIMARY JOURNEY, ONE APPROACH, BILINGUAL EXCELLENCE */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] text-center mb-4"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              One Primary Journey, One Approach, Bilingual Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Image */}
            <div className="relative h-[600px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/07/z5633818664921_9dd3faec93cd8c9c2e86d325df8d03a4.jpg"
                alt="LHBS Primary students engaged in bilingual learning activities"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content Blocks */}
            <div className="space-y-8">
              {/* Block 1 */}
              <div className="border-l-4 border-[#FABA1E] pl-6">
                <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-3">
                  Vietnamese National Curriculum
                </h3>
                <p className=" text-[#212121]/70 text-lg leading-relaxed">
                  LHBS follows Vietnam's General Education Curriculum established by the Ministry of Education and Training (MOET), building knowledge according to official standards for each grade from Grade 1 through Grade 5.
                </p>
              </div>

              {/* Block 2 */}
              <div className="border-l-4 border-[#FABA1E] pl-6">
                <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-3">
                  One Coherent Primary Programme
                </h3>
                <p className=" text-[#212121]/70 text-lg leading-relaxed">
                  We design a seamless learning journey from Grade 1 to 5, building on previous stages and preparing for Secondary School. Our programme nurtures social and emotional development, independence, problem-solving skills, and a genuine love of learning.
                </p>
              </div>

              {/* Block 3 */}
              <div className="border-l-4 border-[#FABA1E] pl-6">
                <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-3">
                  One Approach
                </h3>
                <p className=" text-[#212121]/70 text-lg leading-relaxed">
                  Our child-centred, activity-based teaching approach keeps classes small (around 28 students per class) to ensure personalized attention. We provide a safe, full-day environment that supports both academic excellence and student wellbeing.
                </p>
              </div>

              {/* Block 4 */}
              <div className="border-l-4 border-[#FABA1E] pl-6">
                <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-3">
                  Bilingual Learning in English and Vietnamese
                </h3>
                <p className=" text-[#212121]/70 text-lg leading-relaxed">
                  Our bilingual framework uses Cambridge Kid's Box and English Central to help students achieve Cambridge Young Learners English (YLE) certificates—Starters, Movers, and Flyers. Students build strong English proficiency while maintaining excellence in Vietnamese.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREPARING FOR LOWER SECONDARY AND FUTURE PATHWAYS */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Preparing for Lower Secondary and Future Pathways
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                LHBS Primary School builds a solid academic foundation aligned with MOET standards and our comprehensive bilingual programme. From Grades 4 and 5, we specifically prepare students for the transition to Secondary and High School.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                Students develop essential life skills and 21st-century competencies, following a clear roadmap: Primary → Secondary → High School → international programmes such as the Dual Diploma, 2+2 pathways, and university preparation worldwide.
              </p>
              <button 
                onClick={() => onNavigate('/academics/lower-secondary')}
                className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-bold hover:bg-[#14432b] transition-colors"
              >
                Explore LHBS Secondary School
              </button>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/08/IMG_9717.jpg"
                alt="LHBS students preparing for secondary education"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. INNOVATIVE ENGLISH & PHONICS SYSTEM */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/08/IMG_0297.jpg"
                alt="Students learning English through Cambridge curriculum"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Innovative English & Phonics System
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Cambridge Kid's Box serves as our comprehensive 3-in-1 English course, combining online English instruction, Cambridge exam preparation, and integrated science subjects. This proven system helps students build confidence in daily English communication.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed">
                English Central online platform provides 24/7 access to listening and speaking practice, allowing students to improve their pronunciation and fluency anytime, anywhere. Our goal is to help every student confidently use English and successfully conquer Cambridge examinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. A PERSONALISED LEARNING APPROACH & LIFE SKILLS */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                A Personalised Learning Approach
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Every child is a natural learner. LHBS places students at the centre of their educational journey, focusing on social and emotional growth, independence, and building self-confidence through personalized support.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                Our teachers track each student's progress and differentiate learning through small classes, integrated teaching methods, and continuous assessment. This approach ensures every child receives the support they need to reach their full potential.
              </p>

              {/* Life Skills Sub-block */}
              <div className="bg-white p-8 border-l-4 border-[#1a5336]">
                <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-4">
                  Life Skills Education
                </h3>
                <p className=" text-[#212121]/70 leading-relaxed mb-4">
                  Beyond academics, we integrate comprehensive life skills modules covering:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70">Safety awareness and abuse prevention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70">Positive behaviour management and social skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70">Financial literacy through the Cha-Ching project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70">Environmental responsibility and community engagement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[600px] lg:h-[700px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/07/IMG_8029.jpg"
                alt="Teacher providing personalized support to primary student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

       {/* 6. A TYPICAL DAY AT LHBS KINDERGARTEN */}
      <section className="bg-[#FAF5ED] py-24 md:py-32">
        <div className="w-full !mr-0 max-w-screen-2xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Title & Description - 30% width */}
            <div className="lg:col-span-4 my-auto">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                A typical day at LHBS Primary
              </h2>
              <p className="text-[#212121] font-medium text-lg">
                Every day at LHBS Primary is filled with learning, creativity, and personal growth in a structured, supportive environment.
              </p>
            </div>

            {/* Right Column: Carousel - 70% width */}
            <div className="lg:col-span-8 relative">
              <Carousel className="relative" style={{ overflow: 'initial' }}>
                <CarouselContent className="-ml-6" style={{ overflow: 'initial' }}>
                  {dailyActivities.map((activity, index) => (
                    <CarouselItem key={activity.id} className="pl-6 basis-auto" style={{ overflow: 'initial' }}>
                      {/* Card with higher z-index */}
                      <div className="relative z-20" style={{ overflow: 'initial' }}>
                        <Card className="bg-white shadow-lg border border-gray-200 w-[374px] h-[457px] overflow-hidden">
                          <CardContent className="p-0 h-full">
                            <div className="relative h-[250px] overflow-hidden">
                              <img
                                src={activity.image}
                                alt={activity.alt}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div 
                              className="p-6 h-[207px] flex flex-col"
                              style={{ backgroundColor: activity.backgroundColor }}
                            >
                              <h3 className="font-['SVN-Gotham'] text-xl text-black mb-3">
                                {activity.title}
                              </h3>
                              <p 
                                className="text-black/70 text-sm leading-relaxed flex-grow min-h-[80px] line-clamp-5 overflow-hidden"
                                style={{
                                  display: '-webkit-box',
                                  WebkitLineClamp: 5,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden'
                                }}
                              >
                                {activity.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Synchronized Timeline Elements positioned under each card */}
                      <div className="flex flex-col items-center mt-6 relative z-30" style={{ overflow: 'visible' }}>
                        {/* Vertical connecting line from card center to timeline */}
                        <div 
                          className="w-0.5 h-16 relative z-30"
                          style={{ 
                            backgroundColor: activity.timelineColor === "#1A5336" ? 'rgba(26, 83, 54, 0.8)' : 'rgba(250, 186, 30, 0.8)',
                            overflow: 'visible'
                          }}
                        ></div>
                        
                        {/* Timeline dot positioned at the center */}
                        <div 
                          className="w-4 h-4 rounded-full border-4 border-white shadow-lg relative z-30"
                          style={{ 
                            backgroundColor: activity.timelineColor,
                            overflow: 'visible'
                          }}
                        ></div>
                        
                        {/* Timeline label below dot */}
                        <div className="text-center mt-1 relative z-30" style={{ overflow: 'visible' }}>
                          <p className="text-[#212121] text-sm uppercase whitespace-nowrap font-medium">{activity.timeLabel}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Timeline line that moves with carousel */}
                <div className="absolute bottom-0 left-0 right-0 z-10" style={{ overflow: 'visible' }}>
                  <div className="relative h-0.5 bg-[#1a5336]/20" style={{ top: '-29px', overflow: 'visible' }}></div>
                </div>
                
                {/* Navigation Buttons positioned at top right */}
                <CarouselPrevious className="translate-x-0 translate-y-0 h-12 w-12 bg-white border-2 border-[#1a5336] text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors" />
                <CarouselNext className="absolute right-2 translate-x-0 translate-y-0 h-12 w-12 bg-white border-2 border-[#1a5336] text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIGHLY QUALIFIED TEACHERS WHO INSPIRE */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758685733907-42e9651721f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVtZW50YXJ5JTIwc2Nob29sJTIwdGVhY2hlciUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzEwMjQzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Experienced LHBS teacher inspiring primary students"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Highly Qualified Teachers Who Inspire
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Our experienced teaching staff employ modern pedagogical methods and continuously develop their professional skills to deliver engaging, effective lessons. Teachers integrate technology and AI-enhanced learning tools where relevant to enrich the educational experience.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                They play a crucial role in nurturing bilingual, globally-minded students who are curious, compassionate, and equipped with the skills to thrive in an interconnected world.
              </p>
              <button 
                onClick={() => onNavigate('/our-school/leadership')}
                className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-bold hover:bg-[#14432b] transition-colors"
              >
                Meet Our Teachers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. EDUCATION BEYOND THE CLASSROOM */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Education Beyond the Classroom
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                LHBS provides a safe, full-day school environment where learning extends beyond traditional lessons. Students participate in clubs, events, competitions, summer programmes, and enrichment courses that develop diverse talents and interests.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed">
                Our co-curricular offerings include STEAM/STEM activities, Global Citizens programmes, AI and Robotics, Financial Management workshops, study-abroad opportunities, and cultural exchange experiences that broaden horizons and prepare students for global citizenship.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1623863568368-69e4cbe6cc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhY3Rpdml0aWVzJTIwY2x1YnMlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjMxMDI0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students participating in extracurricular activities and clubs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. A SUPPORTIVE PARTNERSHIP WITH OUR PARENTS */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1576673196028-cd681592bd61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjB0ZWFjaGVyJTIwbWVldGluZyUyMHNjaG9vbHxlbnwxfHx8fDE3NjMxMDI0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="LHBS teacher meeting with parents for collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                A Supportive Partnership with Our Parents
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                We believe education is most effective when parents and teachers work together. LHBS maintains open, transparent communication with families through our Parent Handbook, regular meetings, digital channels, and dedicated counselling services.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed">
                Our team collaborates closely with parents to support each child's unique learning roadmap, address concerns promptly, celebrate achievements, and ensure holistic wellbeing throughout their Primary School journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. OUR FACILITIES: AN ENVIRONMENT MADE FOR LEARNING */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-[#FABA1E] mb-2  uppercase tracking-wider text-sm">
              OUR FACILITIES
            </p>
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              An Environment Made for Learning
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                LHBS Primary classrooms are modern, spacious learning environments (approximately 60 m²) designed for 25–30 students. Each classroom features air-conditioning, integrated ICT tools, and flexible furniture arrangements that support collaborative learning.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                Our campus provides comprehensive facilities including well-stocked libraries, outdoor playgrounds, sports fields, music and art rooms, science laboratories, swimming pool, medical clinic, and safe transportation services—everything needed for a well-rounded education.
              </p>
              <button 
                onClick={() => onNavigate('/our-school/facilities')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
              >
                Explore Our Campus
              </button>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBmYWNpbGl0aWVzJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MzEwMjQzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern LHBS classroom facilities and learning environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. CLOSING TAGLINE & CTA */}
      <section className="bg-[#1a5336] py-24 md:py-32"
         style={{ 
        minHeight: '420px',
        backgroundColor: '#064e29ff'
      }}>
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <h2 
            className="font-['SVN-Gotham'] text-[#fffae9] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            Nurturing bilingual leaders for a changing world
          </h2>
          <p className=" text-[#fffae9]/90 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            LHBS Primary School provides the essential foundation for future academic success, global citizenship, and lifelong learning. Join us on this transformative educational journey.
          </p>

          {/* Final CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/contact/book-tour')}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
            >
              Book a School Tour
            </button>
            <button 
              onClick={() => onNavigate('/admissions/apply-now')}
              className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover: hover:text-[#1a5336] transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
