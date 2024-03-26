import { defineField, defineType } from "sanity";
import {
  city,
  country,
  description,
  image,
  title,
} from "../fields/sharedFields";

const lighthouseType = defineType({
  name: "lighthouse",
  title: "Lighthouse",
  type: "object",
  fields: [
    title,
    city,
    country,
    defineField({
      name: "lighthouseRanking",
      title: "Lighthouse Ranking",
      description: "Rate the beauty of this lighthouse on a scale from 1 to 10",
      type: "rating",
      validation: (rule) => rule.min(1).max(10),
    }),
    description,
    image,
  ],
});

export default lighthouseType;
