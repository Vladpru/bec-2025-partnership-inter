import { AdditionalOption } from "@/types/types";

const addOptions: AdditionalOption[] = [ 
  {
    id: "1",
    name: "Task for the TD category",
    price: "250$",
    description: "The opportunity to provide a task (the task is agreed with the organizers) for the TD category. This applies to the more technical implementation of an invention.",
    available: 1
  },
  {
    id: "2",
    name: "Task for the ID category",
    price: "250$",
    description: "Opportunity to submit a task (the task is agreed upon with the organizers) for the ID category. Applies to the implementation of a task in the form of a 3D model.",
    available: 1
  },
  {
    id: "3",
    name: "Logo on a T-shirt",
    price: "200$",
    description: "The company logo will be used on the event's branded T-shirt, which will be given to the winners and organizers.",
    available: 2
  },
  {
    id: "4",
    name: "Access to the participants' CV database",
    price: "150$",
    description: "The opportunity to access the database of competition participants' CVs.",
    available: 0
  },
  {
    id: "5",
    name: "Job postings in the Telegram bot",
    price: "100$",
    description: "Every month, for six months, your company's current job openings will be posted in the BEC'2025 Telegram bot.",
    available: 0
  },
  {
    id: "6",
    name: "A day with the company",
    price: "70$",
    description: "After the event, our Instagram stories will be filled with content from your company. You can send your videos or our team will help you create them. There will be up to 3 such stories.",
    available: 0
  },
];

export default addOptions;