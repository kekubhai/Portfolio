export const BlogData: any = [
  {
    title: "Solana-CLI",
    description:
      "Learn how to install Solana in your local machine both for windows and mac folks",
    url: "https://www.notion.so/Solana-Cli-1392088ba6ae8019b7ead0854e0f0e80",
    imageSrc:
      "",
    hastags: ["Solana", "performance","Terminal"],
  },
  {
    title:
      "Graphs- from a beginner's POV",
    description:
      "Have a brief understanding of Graphs a data structure widely asked in interviews ",
    url: "https://www.notion.so/Graphs-1392088ba6ae8062b0d5f2e4d3917ce9",
    imageSrc:
      "",
    hastags: ["CPP", "Data Structure", "Leetcode",],
  },
  
]

export const TalkData = [
  {
    place: "",
    logoImage:
      "",
    link: "",
    title:
      ".",
    content_des:
      "",
    images: [
      "",
    ],
    twitter_embeds: [
      "",
    ],
  },
  {
    place: "",
    link: "",
    logoImage:
      "",
    title:
      "",
    content_des:
      "",
    images: [
      "",
    ],
    twitter_embeds: [
      "",
    ],
  },
]

export interface ProjectData {
  title: string
  titleLink: string
  description: string[]
  hastags: string[]
}

export const PersonalProjectData: Array<ProjectData> = [
  {
    title: "LinkRoom",
    titleLink: "https://linkroom-livid.vercel.app/",
    description: [
      "Welcome to LinkRoom! I created this platform to make sharing and discovering valuable resources within communities simple and efficient. With a clean interface and seamless functionality, LinkRoom is designed to foster collaboration and connect users with the information they need.",
    ],
    hastags: [
      "nextjs/reactjs",
      "solana",
      "blockchain",
      "security",
    ],
  }, {
    title: "Kakshya-Kul ",
    titleLink: "https://kakshya-kul.vercel.app/",
    description: [
      "Get Started with KakshyaKul to make efficient decisions for selection of your college. Try this and make your choices based on different parameters ,financial-aid your scores and more. ",
    ],
    hastags: ["reactjs/nextjs", "Education","AI" ,"User0Benefits"],
  },
  {
    title: "Orbit-X",
    titleLink: "https://orbitx-ecru.vercel.app/",
    description: [
      "Welcome to **OrbitX**! I created this web-based wallet to simplify managing your digital assets securely and efficiently. With an intuitive interface and robust features, OrbitX is designed to make your transactions smooth, reliable, and user-friendly.",
    ],
    hastags: ["reactjs/nextjs", "finance","#Blockchain" ,"productivity"],
  },
  {
    title: "Frame-FI(working on)",
    titleLink: "https://github.com/kekubhai/framefi/",
    description: [
      "Frame-Fi is our new age photo exhibition centre where you can share your photographs and vote for the best ones, ",
    ],
    hastags: ["reactjs/nextjs", "finance","#Blockchain" ,"Hobby", "Photography"],
  },
  {
    title: "Green-Lens_Ai",
    titleLink: "https://github.com/kekubhai/greenlens-ai",
    description: [
      "GreenLens-AI uses AI-driven image recognition to monitor plant health. It detects diseases, pests, and nutrient deficiencies in real-time, providing actionable insights to help maintain healthy plants. With a focus on sustainability, GreenLens-AI is designed for gardeners, farmers, and anyone interested in promoting plant well-being ",
    ],
    hastags: ["reactjs/nextjs", "finance","#Blockchain" ,"Nature", "Reuse-Resources"],
  },
]
