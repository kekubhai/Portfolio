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
  {
    title:
      "Why should you use tRPCs in your next Project",
    description:
      " Learn about protocols and backend services that can be used in your next project",
    url: "https://medium.com/@anirbanghosh060/why-should-you-use-trpc-in-your-typescript-project-fd519b0948c4",
    imageSrc:
      "",
    hastags: ["tRPCs", "Graphql", "RestAPIs",],
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
  images?: string[]
  
}

export const PersonalProjectData: Array<ProjectData> = [
  {
    title: "Calibrate-01",
    titleLink: "https://github.com/kekubhai/calibrate-o1",
    description: [
      "Calibrate-01 is a mobile based platform which optimised web socket implementation real time stock data and trading.  "],
    hastags: [
      "react-native",
      "GOLANG",
      "websocket",
      "stock-market",
      "trading",
      "EXPO",
      "security",
    ],
    images: [
      "https://ik.imagekit.io/4q9e0khee/ChatGPT%20Image%20Apr%2027,%202025,%2011_39_57%20AM.png?updatedAt=1745734348514",        
    ]  
  },
  {
title:"Agent-01",
titleLink:"https://github.com/kekubhai/agents1", 
description:[
  "Agent-01 is a web-based platform that allows users to create and manage their own agents. It provides a user-friendly interface for creating agents, setting their parameters, and monitoring their performance. The platform is designed to be flexible and scalable, making it suitable for a wide range of applications.",
],
hastags:[
  "reactjs/nextjs",
  "puppeterjs"
  ,"web-scraping",
  "productivity",],
  
  images:[
    "https://ik.imagekit.io/4q9e0khee/ChatGPT%20Image%20Apr%2027,%202025,%2012_13_10%20PM.png?updatedAt=1745736226745"
  ],
},
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
    title: "Her-Birthday25",
    titleLink: "https://her-birthday25.vercel.app/",
    description: [
      "This is just a basic frontend website to gift to my girlfriend on her birthday. This is to brush up my skills and make her feel special.",
    ],
    hastags: ["reactjs/nextjs", "love","Anime" ,"She", "Memories"],
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
