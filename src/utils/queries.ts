import { groq } from "next-sanity";
import { lighthouses } from "../../sanity/schemas/builders/lighthouses";

export const LIGHTHOUSE_QUERY = groq`*[_type == "${lighthouses.name}"] `;
