import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface ImageProps {
  src: SanityImageSource;
  alt?: string;
}

// Hook for converting an image from Sanity to Next.js image component
export function useConvertSanityImageToNextImageComponent(
  image?: ImageProps
): JSX.Element | null {
  let sanityImage = image || {};
  const imageSrc = useNextSanityImage(client, sanityImage);

  if (!imageSrc) {
    return null;
  }

  return (
    <Image
      alt={image?.alt || ""}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      {...imageSrc}
    />
  );
}
