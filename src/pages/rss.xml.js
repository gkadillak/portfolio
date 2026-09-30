import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { site } from "../data/site";

export async function GET(context) {
  const writing = (await getCollection("writing")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  return rss({
    title: `${site.name} — writing`,
    description: "Essays & notes on building software.",
    site: context.site,
    items: writing.map((w) => ({
      title: w.data.title,
      description: w.data.dek,
      pubDate: w.data.pubDate,
      link: `/writing/${w.id}`,
    })),
  });
}
