import LighthouseList from "@/components/lists/lighthouseList";
import { fetchSanityData } from "../../sanity/lib/client";
import { LIGHTHOUSE_QUERY } from "@/utils/queries";
import { SanityDocument } from "@sanity/react-loader/jsx";
import { loadQuery } from "../../sanity/lib/store";
import { draftMode } from "next/headers";
import LighthousePreview from "@/components/lists/lighthouseListPreview";

async function Home() {
  const query = LIGHTHOUSE_QUERY;
  const content = await fetchSanityData(query);
  const initial = await loadQuery<SanityDocument[]>(
    LIGHTHOUSE_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  return (
    <main>
      {draftMode().isEnabled ? (
        <LighthousePreview initial={initial} />
      ) : (
        <LighthouseList lighthouses={content} />
      )}
    </main>
  );
}

export default Home;
