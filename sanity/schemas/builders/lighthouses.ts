import { defineType } from "sanity";
import lighthouseType from "../types/lighthouse";
import { sharedFieldName } from "../fields/sharedFields";

export const lighthouses = {
  name: "lighthouseList",
  title: "Lighthouses",
};

export const lighthousesBuilder = defineType({
  name: lighthouses.name,
  title: lighthouses.title,
  type: "document",
  fields: [...lighthouseType.fields],
  preview: {
    select: {
      title: sharedFieldName.title,
      city: sharedFieldName.city,
      country: sharedFieldName.country,
      image: sharedFieldName.image,
    },
    prepare({ title, city, country, image }) {
      return {
        title,
        subtitle: `${city}, ${country}`,
        media: image,
      };
    },
  },
});

export default lighthousesBuilder;
