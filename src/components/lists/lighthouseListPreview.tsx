"use client";
import LighthouseCard, { ILighthouse } from "@/components/cards/lighthouseCard";
import styles from "./lighthouseList.module.css";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { LIGHTHOUSE_QUERY } from "@/utils/queries";

const titleId = "lighthouse-list-title";

function LighthousePreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument[]>;
}) {
  const { data } = useQuery<SanityDocument[] | null>(
    LIGHTHOUSE_QUERY,
    {},
    { initial }
  );
  return data ? (
    <div>
      <h2 id={titleId}>Worlds most beautiful lighthouses</h2>
      <ol className={styles.list} aria-labelledby={titleId}>
        {data.map((lighthouse) => {
          return (
            <li key={lighthouse._id}>
              <LighthouseCard
                lighthouse={lighthouse as unknown as ILighthouse}
              />
            </li>
          );
        })}
      </ol>
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

export default LighthousePreview;
