import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  // These settings will be overridden in
  // ./sanity/lib/store.ts when draftMode is enabled
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});

/**
 * Fetch data from Sanity using the configured client.
 *
 * @param {string} query - The Sanity query to execute.
 * @param {object} params - Optional query parameters.
 * @returns {Promise<any>} - A Promise that resolves with the fetched data.
 */
export async function fetchSanityData(query: string, params = {}) {
  try {
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from Sanity");
  }
}
