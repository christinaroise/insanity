import { ImageProps } from "@/utils/sanity";
import { TypedObject } from "sanity";

export interface ICard {
  title: string;
  image: ImageProps;
  description: TypedObject | TypedObject[];
}
