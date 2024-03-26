import { defineField } from "sanity";

export const sharedFieldName = {
  title: "title",
  city: "city",
  country: "country",
  description: "description",
  image: "image",
};

export const title = defineField({
  name: sharedFieldName.title,
  title: "Title",
  type: "string",
});

export const city = defineField({
  name: sharedFieldName.city,
  title: "City",
  type: "string",
});

const countries = [
  { title: "Australia", value: "Australia" },
  { title: "Argentina", value: "Argentina" },
  { title: "Canada", value: "Canada" },
  { title: "Germany", value: "Germany" },
  { title: "India", value: "India" },
  { title: "Irland", value: "Irland" },
  { title: "Scotland", value: "Scotland" },
  { title: "USA", value: "USA" },
];

export const country = defineField({
  name: sharedFieldName.country,
  title: "Country",
  type: "string",
  options: {
    list: [...countries],
  },
});

export const description = defineField({
  name: sharedFieldName.description,
  title: "Description",
  type: "array",
  of: [
    {
      type: "block",
    },
  ],
});

export const image = defineField({
  name: sharedFieldName.image,
  title: "Image",
  type: "image",
  options: { hotspot: true },
});
