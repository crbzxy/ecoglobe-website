type PageSeo = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function pageHead({ title, description, path, noIndex }: PageSeo) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      ...(noIndex ? [{ name: "robots", content: "noindex" }] : [])
    ],
    links: [{ rel: "canonical", href: path }]
  };
}
