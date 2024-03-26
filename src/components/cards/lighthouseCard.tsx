"use client";
import { Key } from "react";
import { useConvertSanityImageToNextImageComponent } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";
import styles from "./lighthouseCard.module.css";
import { ICard } from "@/interfaces/cards";

export interface ILighthouse extends ICard {
  _id: Key | null | undefined;
  city: string;
  country: string;
  lighthouseRanking: number;
}

function LighthouseCard({ lighthouse }: { lighthouse: ILighthouse }) {
  const { title, city, country, image, description } = lighthouse;
  const renderedImage = useConvertSanityImageToNextImageComponent(image);
  return (
    <div className={styles.card}>
      {renderedImage && (
        <div className={styles.imageWrapper}>{renderedImage}</div>
      )}
      <div className={styles.infoWrapper}>
        <div>
          <h3>{title}</h3>
          <small>
            {city}, {country}
          </small>
        </div>
        <PortableText value={description} />
      </div>
    </div>
  );
}

export default LighthouseCard;
