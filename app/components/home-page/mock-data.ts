export interface SchoolLevel {
  id: string;
  title: string;
  subtitle: string;
  descriptions: string[];
  image: string;
  slug: string;
}

export const SCHOOL_LEVELS: SchoolLevel[] = [
  {
    id: "galaxy-kc",
    title: "GALAXY KC",
    subtitle: "From 18 months to 3 years",
    descriptions: [
      "Early childhood program focusing on foundational development.",
      "Safe and nurturing environment with experienced educators.",
      "Activities designed to stimulate creativity and motor skills.",
      "Daily routines that build confidence and independence."
    ],
    image: "/images/home-page/section-education/program-01.png",
    slug: "/campus/galaxy-kc"
  },

  {
    id: "elementary",
    title: "ELEMENTARY SCHOOL",
    subtitle: "From Grade 1 to Grade 5",
    descriptions: [
      "Comprehensive bilingual curriculum with strong academic foundation.",
      "Holistic development emphasizing creativity and problem-solving.",
      "Experienced teachers guiding students through essential learning stages.",
      "Engaging classroom activities that build confidence and curiosity."
    ],
    image: "/images/home-page/section-education/program-02.png",
    slug: "/campus/elementary"
  },

  {
    id: "middle",
    title: "MIDDLE SCHOOL",
    subtitle: "From Grade 6 to Grade 9",
    descriptions: [
      "Curriculum focusing on critical thinking and independent learning.",
      "Preparation for higher academic challenges and future pathways.",
      "Projects and activities encouraging teamwork and innovation.",
      "Supportive teachers helping students navigate adolescence effectively."
    ],
    image: "/images/home-page/section-education/program-02.png",
    slug: "/campus/middle-school"
  },

  {
    id: "highschool",
    title: "HIGH SCHOOL",
    subtitle: "From Grade 10 to Grade 12",
    descriptions: [
      "Advanced academic programs aligned with global standards.",
      "Guidance counseling for university preparation and career pathways.",
      "Opportunities for leadership, research, and extracurricular excellence.",
      "Personalized support for students to excel academically and socially."
    ],
    image: "/images/home-page/section-education/program-03.png",
    slug: "/campus/high-school"
  }
];
