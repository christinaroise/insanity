import LighthouseCard, { ILighthouse } from "@/components/cards/lighthouseCard";
import styles from "./lighthouseList.module.css";

const titleId = "lighthouse-list-title";

function LighthouseList({ lighthouses }: { lighthouses: ILighthouse[] }) {
  return (
    <div>
      <h2 id={titleId}>World's most beautiful lighthouses</h2>
      <ol className={styles.list} aria-labelledby={titleId}>
        {lighthouses.map((lighthouse: ILighthouse) => {
          return (
            <li key={lighthouse._id}>
              <LighthouseCard lighthouse={lighthouse} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default LighthouseList;
