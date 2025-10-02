import { Trophy, Users, Target, Calendar } from "lucide-react"

export const pastEvents = [
  {
    id: "1",
    title: "Invicta",
    date: "December 15, 2023",
    time: "2:00 PM - 5:00 PM",
    description:
      "A departmental fest for Computer Engineering students, featuring a variety of small events and competitions.",
    type: "Event",
    image: "https://ik.imagekit.io/tw7e6u1ae/images/Invicta.JPG?updatedAt=1759390669683",
    status: "past" as const,
  },
  {
    id: "2",
    title: "Game of Codes",
    date: "November 22-24, 2023",
    time: "48 Hours",
    description:
      "A 30-day online Data Structures and Algorithms (DSA) challenge to improve coding proficiency.",
    type: "Competition",
    image: "https://ik.imagekit.io/tw7e6u1ae/images/GOC_S1.JPG?updatedAt=1759390662596",
    status: "past" as const,
  },
  {
    id: "3",
    title: "Model United Nations",
    date: "October 10, 2023",
    time: "10:00 AM - 4:00 PM",
    description:
      "A simulation where participants role-play as delegates to various UN committees, debating and solving global issues.",
    type: "Event",
    image: "https://ik.imagekit.io/tw7e6u1ae/images/MUN2.JPG?updatedAt=1759390669986",
    status: "past" as const,
  },
  {
    id: "4",
    title: "Github Session and Workshop",
    date: "September 5, 2023",
    time: "6:00 PM - 8:00 PM",
    description:
      "A hands-on workshop providing practical training and experience with using Git and GitHub.",
    type: "Workshop",
    image: "/images/git_1.jpg",
    status: "past" as const,
  },
  {
    id: "5",
    title: "HackForge",
    date: "August 20, 2023",
    time: "3:00 PM - 6:00 PM",
    description: "The college-level hackathon organized by the Computer Engineering department, challenging students to build innovative solutions.",
    type: "Competition",
    image: "https://ik.imagekit.io/tw7e6u1ae/images/hackforge2.JPG?updatedAt=1759390669275",
    status: "past" as const,
  },
  {
    id: "6",
    title: "FlipFlop",
    date: "July 25, 2023",
    time: "9:00 AM - 5:00 PM",
    description: "A code-themed memory game designed to test and improve participants&apos; ability to recall code snippets or programming concepts.",
    type: "Event",
    image: "https://ik.imagekit.io/tw7e6u1ae/images/flipflop.JPG?updatedAt=1759390669549",
    status: "past" as const,
  },
]

export const upcomingEvents = [
  {
    id: "7",
    title: "Game of Codes : Season 2",
    date: "",
    time: "",
    description: "A 30-day online Data Structures and Algorithms (DSA) challenge to improve coding proficiency.",
    type: "Competition",
    image: "/images/GOC_s2.png",
    status: "upcoming" as const,
    registrationLink: "https://forms.google.com/blockchain-workshop",
  },
  {
    id: "8",
    title: "Github workshop 2.o",
    date: "",
    time: "",
    description: "A hands-on workshop providing practical training and experience with using Git and GitHub.",
    type: "Workshop",
    image: "/images/github_2.jpg",
    status: "upcoming" as const,
    registrationLink: "https://forms.google.com/spring-hackathon",
  },
  {
    id: "9",
    title: "ACM Awarness Drive",
    date: "",
    time: "",
    description: "Discover the world of the Association for Computing Machinery (ACM) and explore the opportunities for tech enthusiasts at our chapter.",
    type: "Seminar",
    image: "/images/ACM_Awaeness_drive.png",
    status: "upcoming" as const,
    registrationLink: "https://forms.google.com/cloud-seminar",
  },
  
]

export const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Software Engineer at Google",
    message:
      "PASC provided me with invaluable networking opportunities and hands-on experience that directly contributed to my career success.",
    image: "/placeholder.svg?height=100&width=100",
    year: "2022",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Data Scientist at Microsoft",
    message:
      "The workshops and hackathons at PASC helped me develop both technical skills and leadership abilities that I use every day.",
    image: "/placeholder.svg?height=100&width=100",
    year: "2021",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Product Manager at Meta",
    message: "Being part of PASC was transformative. The community support and learning opportunities are unmatched.",
    image: "/placeholder.svg?height=100&width=100",
    year: "2023",
  },
]

export const photos = [
  {
    id: "1",
    url: "/images/Invicta.jpg",
    title: "Invicta",
    category: "event" as const,
    date: "",
    description: "A departmental fest for Computer Engineering students, featuring a variety of small events and competitions",
  },
  {
    id: "2",
    url: "/images/GOC_S1.jpg",
    title: "Game of Codes",
    category: "award" as const,
    date: "",
    description: "A 30-day online Data Structures and Algorithms (DSA) challenge to improve coding proficiency",
  },
  {
    id: "3",
    url: "/images/git_1.jpg",
    title: "Github Session",
    category: "workshop" as const,
    date: "",
    description: "A hands-on workshop providing practical training and experience with using Git and GitHub",
  },
  {
    id: "4",
    url: "/images/MUN2.jpg",
    title: "Model United Nations",
    category: "event" as const,
    date: "",
    description: "A simulation where participants role-play as delegates to various UN committees, debating and solving global issues.",
  },
  {
    id: "5",
    url: "/images/hackforge2.jpg",
    title: "HackForge",
    category: "Competition" as const,
    date: "",
    description: "The college-level hackathon organized by the Computer Engineering department, challenging students to build innovative solutions.",
  },
  {
    id: "6",
    url: "/images/flipflop.jpg",
    title: "Flipflop",
    category: "team-activity" as const,
    date: "",
    description: "A code-themed memory game designed to test and improve participants&apos; ability to recall code snippets or programming concepts.",
  },
  {
    id: "7",
    url: "/images/GOC_S2.png",
    title: "Game of Codes : Season 2",
    category: "event" as const,
    date: "",
    description: "A 30-day online Data Structures and Algorithms (DSA) challenge to improve coding proficiency",
  },
  {
    id: "8",
    url: "/images/ACM_Awaeness_drive.png",
    title: "ACM Awarness Drive",
    category: "event" as const,
    date: "",
    description: "Discover the world of the Association for Computing Machinery (ACM) and explore the opportunities for tech enthusiasts at our chapter.",
  },
]

export const achievements = [
  {
    id: "1",
    title: "50+ Active Members",
    description: "Reached a milestone of over 50 active student members across all departments",
    date: "June 2025",
    icon: Users,
  },
  {
    id: "2",
    title: "Invicta 2024",
    description: "Our flagship technical fest featuring a variety of technical Events",
    date: "February 2024",
    icon: Trophy,
  },
  {
    id: "3",
    title: "30+ Events Organized",
    description: "Successfully organized over 50 workshops, seminars, and competitions",
    date: "October 2024",
    icon: Calendar,
  },
  {
    id: "4",
    title: "Industry Partnership Program",
    description: "Established partnerships with 15+ leading technology companies",
    date: "September 2023",
    icon: Target,
  },
]

export const journeyMilestones = [
  {
    id: "1",
    year: "2025",
    title: "Expansion & Growth",
    description:
      "Launched new initiatives including mentorship programs and industry collaborations, reaching over 50 active members.",
    
  },
  {
    id: "2",
    year: "2024",
    title: "Huge New and Exciting events",
    description: "A massive lineup of fresh and engaging events is coming your way! ",
    
  },
  {
    id: "3",
    year: "2023",
    title: "Digital Transformation",
    description:
      "Transitioned to hybrid events and launched our online learning platform, expanding our reach globally.",
    
  },
  {
    id: "4",
    year: "2022",
    title: "Community Building",
    description: "Focused on building a strong community with regular workshops, hackathons, and networking events.",
    
  },
  {
    id: "5",
    year: "2021",
    title: "Foundation & Growth",
    description: "PASC was officially established with a mission to advance computing education and foster innovation.",
    
  },
]

export const executiveCommittee = [
  {
    id: "1",
    name: "PROF. DR. MRS. S. A. ITKAR",
    role: "Prof. & Department Head",
    image: "/images/HOD.jpg",
    linkedin: "https://linkedin.com/in/alexthompson",
    email: "hodcomp@moderncoe.edu.in",
  },
  {
    id: "2",
    name: "PROF. DR. MS. D. V. GORE",
    role: "Associate Professor",
    image: "/images/Gore_ma'am.jpg",
    linkedin: "https://linkedin.com/in/mariagarcia",
    email: "deipali.gore@moderncoe.edu.in",
  },
  {
    id: "3",
    name: "MR. A. G. DESHMUKH",
    role: "Assistant Professor",
    image: "/images/Anand_sir.png",
    linkedin: "https://linkedin.com/in/davidkim",
    email: "anandrao.deshmukh@moderncoe.edu.in",
  },
  {
    id: "4",
    name: "MRS. M. V. OTARI",
    role: "Assistant Professor",
    image: "/images/manjiree_ma'am.png",
    linkedin: "https://linkedin.com/in/jessicaliu",
    email: "manjiree.otari@moderncoe.edu.in",
  },
]

export const departmentCoordinators = [
  {
    id: "1",
    name: "Aditi Rathi",
    role: "Chair Person",
    department: "Computer Engineering",
    image: "/images/aditi.heic",
    linkedin: "https://linkedin.com/in/ryanpatel",
    email: "aditi_rathi_comp@moderncoe.edu.in",
  },
  {
    id: "2",
    name: "Soham Pandit",
    role: "Vice Chair Person",
    department: "Computer Engineering",
    image: "/images/soham.heic",
    linkedin: "https://linkedin.com/in/sophieanderson",
    email: "soham_pandit_comp@moderncoe.edu.in",
  },
  {
    id: "3",
    name: "Kanishka Khalane",
    role: "Treasurer",
    department: "Computer Engineering",
    image: "/images/kanishka.heic",
    linkedin: "https://linkedin.com/in/marcusjohnson",
    email: "kanishka_khalane_comp@moderncoe.edu.in",
  },
  
]

export const coreTeam = [
  {
    id: "1",
    name: "Neeti Kurulkar",
    role: "Technical Team Head",
    department: "Computer Engineering",
    image: "/images/neeti_k.jpg",
    linkedin: "https://www.linkedin.com/in/neeti-kurulkar/",
    email: "neeti_kurulkar_comp@moderncoe.edu.in",
  },
  {
    id: "2",
    name: "Aryan Nehe",
    role: "Technical Team Co-Head",
    department: "Computer Engineering",
    image: "/images/Aryan.jpg",
    linkedin: "https://www.linkedin.com/in/aryan-nehe-4a2551320/",
    email: "aryan_nehe_comp@moderncoe.edu.in",
  },
  {
    id: "3",
    name: "Sanika Kale",
    role: "Design Team Head",
    department: "Computer Engineering",
    image: "/images/sanika.jpg",
    linkedin: "https://www.linkedin.com/in/sanika-kale-3407a2290",
    email: "sanika_kale_comp@moderncoe.edu.in",
  },
  {
    id: "4",
    name: "Sanjali Paygude",
    role: "Design Team Co-Head",
    department: "Computer Engineering",
    image: "/images/sanjali_p.jpg",
    linkedin: "https://www.linkedin.com/in/sanjali-paygude-05148534a/",
    email: "sanjali_paygude_comp@moderncoe.edu.in",
  },
  {
    id: "5",
    name: "Shubham Bawane",
    role: "Documentation Team Head",
    department: "Computer Engineering",
    image: "/images/shubham.jpg",
    linkedin: "http://linkedin.com/in/shubham-bawane",
    email: "shubham_bawane_comp@moderncoe.edu.in",
  },
  {
    id: "6",
    name: "Shravani Itkar",
    role: "Documentation Team Co-Head",
    department: "Computer Engineering",
    image: "/images/shravani_I.jpg",
    linkedin: "https://www.linkedin.com/in/shravani-itkar-9a8690335",
    email: "shravani_itkar_comp@moderncoe.edu.in",
  },
  {
    id: "7",
    name: "Siddesh Choudhari",
    role: "Marketing Team Head",
    department: "Computer Engineering",
    image: "/images/siddesh_c.jpg",
    linkedin: "https://www.linkedin.com/in/siddesh-choudhari-ssc1311/",
    email: "siddesh_choudhari_comp@moderncoe.edu.in",
  },
  {
    id: "8",
    name: "Viraj Jadhao",
    role: "Marketing Team Co-Head",
    department: "Computer Engineering",
    image: "/images/viraj_j.jpg",
    linkedin: "https://www.linkedin.com/in/viraj-jadhao-0771b830b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "viraj_jadhao_comp@moderncoe.edu.in",
  },
  {
    id: "9",
    name: "Yadni Mali",
    role: "Social Media Incharge",
    department: "Computer Engineering",
    image: "/images/Yadni.jpg",
    linkedin: "https://www.linkedin.com/in/yadni-mali-395a03283/",
    email: "yadni_mali_comp@moderncoe.edu.in",
  },
  {
    id: "10",
    name: "Isha Shaha",
    role: "Social Media Incharge",
    department: "Computer Engineering",
    image: "/images/Isha.jpg",
    linkedin: "https://www.linkedin.com/in/isha-shaha-345a04303",
    email: "isha_shaha_comp@moderncoe.edu.in",
  },
  {
    id: "11",
    name: "Parul Kulkarni",
    role: "Team Manager",
    department: "Computer Engineering",
    image: "/images/Parul.jpg",
    linkedin: "https://www.linkedin.com/in/parul-kulkarni-6b9383286",
    email: "parul_kulkarni_comp@moderncoe.edu.in",
  },
  {
    id: "12",
    name: "Sai Itkar",
    role: "Team Manager",
    department: "Computer Engineering",
    image: "/images/Sai_I.jpg",
    linkedin: "https://www.linkedin.com/in/sai-itkar-3b8b11320/",
    email: "sai_itkar_comp@moderncoe.edu.in",
  },
  {
    id: "13",
    name: "Gayatri Salunke",
    role: "Team Manager",
    department: "Computer Engineering",
    image: "https://ik.imagekit.io/tw7e6u1ae/images/Gayatri_S.jpg?updatedAt=1759390662775",
    linkedin: "https://www.linkedin.com/in/gayatri-salunke-a1b592372/",
    email: "gayatri_salunke_comp@moderncoe.edu.in ",
  },
  {
    id: "14",
    name: "Yash Doke",
    role: "Event Manager",
    department: "Computer Engineering",
    image: "/images/yash_d.jpg",
    linkedin: "http://linkedin.com/in/yash-doke",
    email: "yash_doke_comp@moderncoe.edu.in",
  },
  {
    id: "15",
    name: "Om Khatavkar",
    role: "Event Manager",
    department: "Computer Engineering",
    image: "/images/om_k.jpg",
    linkedin: "https://www.linkedin.com/in/om-khatavkar-26204423b",
    email: "om_khatavkar_comp@moderncoe.edu.in",
  },
  {
    id: "16",
    name: "Arya Chandak",
    role: "Event Manager",
    department: "Computer Engineering",
    image: "/images/arya_c.jpg",
    linkedin: "https://linkedin.com/in/kabir.kumar",
    email: "arya_chandak_comp@moderncoe.edu.in",
  },
  {
    id: "17",
    name: "Shravan Pensalwar",
    role: "Volunteer",
    department: "Computer Engineering",
    image: "/images/shravan_p.jpg",
    linkedin: "https://www.linkedin.com/in/shravan-pensalwar",
    email: "shravan_pensalwar_comp@moderncoe.edu.in",
  },
  {
    id: "18",
    name: "Sakshi Patil",
    role: "Volunteer",
    department: "Computer Engineering",
    image: "/images/sakshi_patil.jpg",
    linkedin: "https://www.linkedin.com/in/sakshi-patil-71153b2b4/",
    email: "sakshi_patil_comp@moderncoe.edu.in",
  },
  
]

export const alumniNetwork = [
  {
    id: "1",
    name: "Safal Bhandari",
    role: "The Advisor",
    department: "Computer Engineering",
    year: "2024",
    image: "/images/safal_B.jpg",
    linkedin: "https://www.linkedin.com/in/safal-bhandari/",
  },
  {
    id: "2",
    name: "Advait Shinde",
    role: "The Advisor",
    department: "Computer Engineering",
    year: "2025",
    image: "/images/advait.heic",
    linkedin: "https://www.linkedin.com/in/advait-shinde/",
  },
  {
    id: "3",
    name: "Gayatri Kurulkar",
    role: "The Advisor",
    department: "Computer Engineering",
    year: "2025",
    image: "/images/gayatri.heic",
    linkedin: "https://www.linkedin.com/in/gayatri-kurulkar-13g/",
  },
  {
    id: "4",
    name: "Sakshi Ingale",
    role: "The Advisor",
    department: "Computer Engineering",
    year: "2025",
    image: "/images/sakshi.heic",
    linkedin: "https://www.linkedin.com/in/sakshi-ingale1801/",
  },
  
]

export const clubHighlights = [
  {
    title: "Innovative Projects",
    description: "Showcasing cutting-edge projects developed by our members.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Workshops & Seminars",
    description: "Providing hands-on learning experiences and expert insights.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Community Events",
    description: "Building a strong and supportive community of tech enthusiasts.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export const events = {
  "2024": [
    {
      id: "1",
      title: "Github Session",
      date: "January 15, 2024",
      time: "2:00 PM - 5:00 PM",
      description: "Comprehensive workshop on machine learning fundamentals and practical applications.",
      type: "Workshop",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "2",
      title: "Hackathon 2024",
      date: "February 22-24, 2024",
      time: "48 Hours",
      description: "Annual hackathon bringing together the brightest minds to solve real-world problems.",
      type: "Competition",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
  "2023": [
    {
      id: "3",
      title: "Web Development Bootcamp 2023",
      date: "October 10, 2023",
      time: "10:00 AM - 4:00 PM",
      description: "Intensive bootcamp covering modern web development technologies.",
      type: "Workshop",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
  "2022": [
    {
      id: "4",
      title: "Mobile App Development Workshop 2022",
      date: "December 15, 2022",
      time: "2:00 PM - 5:00 PM",
      description: "Introductory workshop on mobile app development.",
      type: "Workshop",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
}
