
import { Package } from "@/types/types";

const packages: Package[] = [
  {
    id: "1",
    name: "Basic",
    price: "350$",
    features: [
      "Logo on the brand wall",
      "Logo on the event website",
      "Logo in the post-event video",
      "Promotion on social media (post digest on LinkedIn, 1 story on Instagram)",
      "Company video presentation",
    ],
    descriptions: [
      "During the event, a large banner with the logos of all our competition partners will be displayed.",
      "Your company logo will be displayed on the event website.",
      "Addition of the logo to the post-event video, which will be posted on the @best_lviv Instagram page after the competition.",
      "Placement of information about the company on social media: mention in 1 Instagram story on the @best_lviv page, post digest on LinkedIn BEST Lviv (information about your company will be posted in a post about all partners).",
      "The opportunity to present your company to participants before networking in the form of a video lasting up to 5 minutes.",
    ],
  },
  {
    id: "2",
    name: "Explorer",
    price: "400$",
    features: [
      "Video message to participants",
      "Post on LinkedIn",
      "Interactive contests",
      "Instagram interactive “Day with the company”",
      "Job postings in the Telegram bot",
    ],
    descriptions: [
      "Your company can reach out to contest participants with a video (up to 5 minutes long). The video is provided by the company.",
      "Posting information about the company on LinkedIn in a separate post.",
      "The opportunity to hold a raffle from the company — it can be Kahoot, Quiz, or you can join our company's charity raffle, and your participation will be announced on stage.",
      "After the event, our Instagram stories will be filled with content from your company. You can send your videos or our team will help you create them. There will be up to 3 such stories.",
      "Every month, for six months, the BEC'2025 Telegram bot will post your company's current job openings.",
    ],
  },
  {
    id: "3",
    name: "Engineer",
    price: "700$",
    features: [
      "Video message to participants",
      "Instagram Reels",
      "Job postings in the Telegram bot",
      "Access to the participant CV database",
      "Article on the BEST Lviv website",
      "Logo on merchandise",
    ],
    descriptions: [
      "Your company can reach out to contest participants with a video (up to 5 minutes long). The video is provided by the company.",
      "Instagram Reels post about your company.",
      "Every month for six months, your company's current job openings will be posted in the BEC'2025 Telegram bot.",
      "The opportunity to access the CV database of competition participants.",
      "An article about your company and its contribution to the organization of the event will be posted on the official website of the organization. The article will be provided by the company or we will help with its writing and it will be posted on the website for a period of",
      "The company logo will be used on event merchandise (posters, T-shirts (for winners + volunteers).",
    ],
  },
];

export default packages;