import { type SchemaTypeDefinition } from "sanity";
import lighthousesBuilder from "./schemas/builders/lighthouses";
import lighthouseType from "./schemas/types/lighthouse";
import { ratingType } from "./schemas/types/sharedTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [lighthousesBuilder, lighthouseType, ratingType],
};
