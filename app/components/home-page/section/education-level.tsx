import { useState } from "react";
import { SCHOOL_LEVELS } from "@/components/home-page/mock-data"; // mock data bạn đã có
import { Link } from "react-router";

export default function EducationLevel() {
  const [activeIndex, setActiveIndex] = useState(-1); // -1 means no column is hovered (except Galaxy KC which is always active)

  return (
    <section 
    id="solid-education-level"
    className="w-full h-[800px] flex overflow-hidden relative"
    >
      {SCHOOL_LEVELS.map((item, index) => {
        const isGalaxyKC = index === 0;
        const isActive = index === activeIndex;
        const isAnyHovered = activeIndex >= 0;

        return (
          <div
            key={item.id}
            className={`
              group relative h-full transition-all duration-700 ease-in-out
              cursor-pointer overflow-hidden flex flex-col justify-end
              ${isGalaxyKC 
                ? "basis-1/2"  // Galaxy KC always 50%
                : isActive 
                  ? "basis-[45%]"  // Increased width when hovered
                  : isAnyHovered 
                    ? "basis-[16.67%]"  // Smaller when another is hovered
                    : "basis-[16.67%]"   // Default for other 3 columns
              }
            `}
            onMouseEnter={() => !isGalaxyKC && setActiveIndex(index)}
            onMouseLeave={() => !isGalaxyKC && setActiveIndex(-1)}
          >
            {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-700"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: isGalaxyKC ? "center 5%" : "30% 20%",
            }}
          />


            {/* Dark overlay for all columns */}
            {/* Overlay base – phủ tối toàn màn hình */}
<div className="absolute inset-0 bg-black/30" />
          {/* Overlay gradient – đậm bên trái */}
          <div
            className="
              absolute inset-0 
              pointer-events-none
              transition-all duration-700
            "
            style={{
              background: `
                linear-gradient(
                  to right,
                  rgba(0, 0, 0, 0.35) 0%,
                  rgba(0, 0, 0, 0.50) 30%,
                  rgba(0, 0, 0, 0.25) 60%,
                  rgba(0, 0, 0, 0.10) 100%
                )
              `
            }}
          />
            {/* Vertical Title (when not active) - Only for non-Galaxy KC columns */}
            {!isGalaxyKC && (
              <div
                className={`
                  absolute left-20 bottom-0 h-full flex items-end pb-8
                  transition-all duration-500
                  ${isActive ? "opacity-0" : "opacity-100"}
                `}
              >
                <h2
                  className="
                    text-white font-black tracking-wide whitespace-nowrap
                    text-3xl md:text-4xl lg:text-5xl
                    transform -rotate-90 origin-bottom-left
                  "
                >
                  {item.title}
                </h2>
              </div>
            )}
            {/* Galaxy KC - Always Active Content */}
            {isGalaxyKC && (
              <div className="absolute inset-0 p-10 flex flex-col justify-between text-white">
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-4xl md:text-5xl font-black mb-16">{item.title}</h3>
                  
                  <ul className="space-y-2 text-sm font-light md:text-lg mb-8 px-4">
                    {item.descriptions.map((line, i) => (
                      <li key={i} className="leading-relaxed">
                        • {line}
                      </li>
                    ))}
                  </ul>

                  {/* Galaxy KC Navigation Buttons */}
                 <div className="flex items-center gap-3 mb-8">
                          <a
                            href="https://bh-galaxykg-lhbs-iotsoftvn-com.vercel.app/"
                            target="_blank"
                            className="
                              inline-block
                              px-4 py-4
                              rounded-lg!
                              font-semibold
                              bg-[#FFAE00]
                              text-[#1E5338]
                              transition-all
                              hover:bg-[#ffbf33]
                              whitespace-nowrap
                            "
                          >
                            BIEN HOA GALAXY
                          </a>

                          <a
                            href="https://lk-galaxykg-lhbs-iotsoftvn-com.vercel.app/"
                            target="_blank"
                            className="
                              inline-block
                              px-4 py-4
                              rounded-lg!
                              font-semibold
                              bg-[#FFAE00]
                              text-[#1E5338]
                              transition-all
                              hover:bg-[#ffbf33]
                              whitespace-nowrap
                            "
                          >
                          LONG KHANH GALAXY
                        </a>
                </div>

                </div>

                {/* Subtitle at bottom */}
                <div className="pb-4 text-center">
                  <p className="text-xl md:text-4xl font-semibold uppercase">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            )}

            {/* Other Columns - Expanded Content (only when active) */}
            {!isGalaxyKC && (
              <div
                className={`
                  absolute inset-0 p-10 flex flex-col justify-between
                  text-white transition-all duration-700
                  ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}
                `}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-4xl md:text-5xl font-bold mb-16">{item.title}</h3>
                  
                  <ul className="space-y-3 font-medium text-base md:text-lg px-4">
                    {item.descriptions.map((line, i) => (
                      <li key={i} className="leading-relaxed">
                        • {line}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtitle at bottom for other columns when expanded */}
                <div className="pb-4 text-center">
                  <p className="text-2xl md:text-4xl font-semibold uppercase">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
