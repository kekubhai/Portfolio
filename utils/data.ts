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
      "https://pbs.twimg.com/profile_images/1671952285730238464/SJ9ev-00_400x400.jpg",
    link: "/talks/generics-in-typescript",
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
    place: "React Pune",
    link: "/talks/building-frameworky-things",
    logoImage:
      "https://pbs.twimg.com/profile_images/1628286577482018817/P2qjUGx5_400x400.jpg",
    title:
      "Building frameworky things in react from scratch. SSR, file-based routing and server-side data fetching like next.js",
    content_des:
      "Spoke at React Pune about Building Server side rendering, server side data fetching and file based routing. Did a live demo building all of that from scratch.",
    images: [
      "/assets/react_pune/IMG_3684.jpg",
      "/assets/react_pune/IMG_3685.jpg",
      "/assets/react_pune/IMG_3695.jpg",
    ],
    twitter_embeds: [
      "1682638222206316545",
      "1682796601025392640",
      "1682678900621492224",
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
    title: "Frame-FI",
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
