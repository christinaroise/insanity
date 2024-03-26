import { defineType } from "sanity";
import { RatingInput } from "../../components/ratingComponent";

export const sharedTypesName = {
  rating: "rating",
};

export const ratingType = defineType({
  name: "rating",
  title: "Rating",
  type: "number",
  components: { input: RatingInput },
});
