import fsPromises from "fs/promises";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { filenameToTitle, titleToFilename } from "~/utils/utils";

function capitalize(s: string) {
  return s
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  const filepath = path.join(process.cwd(), "src", "logs");
  return await fsPromises.readdir(filepath, { withFileTypes: false });
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: capitalize(params.slug.replaceAll("-", " ")),
    description: "An article by Josh",
  };
}

const toMarkdown = (md: string) => {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .processSync(md).value;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const filespath = path.join(process.cwd(), "src", "logs");
  const posts = await fsPromises.readdir(filespath, { withFileTypes: false });
  const orderedPosts = posts
    .map((f) => {
      return { slug: filenameToTitle(f.slice(0, -3)) };
    })
    .sort(
      (a, b) =>
        new Date(b.slug ?? "").getTime() - new Date(a.slug ?? "").getTime(),
    );
  const idx = orderedPosts.findIndex((v) => v.slug === params.slug);

  const filename = titleToFilename(params.slug);
  const filepath = path.join(process.cwd(), "src", "logs", filename + ".md");
  const file = await fsPromises.readFile(filepath, "utf8");
  const data = matter(file);
  return (
    <div className="prose dark:prose-invert">
      <div className="mb-5">
        Posted {new Date(params.slug).toLocaleString().split(",")[0]}
      </div>
      <div dangerouslySetInnerHTML={{ __html: toMarkdown(data.content) }}></div>
      <hr />
      <div className="mb-5 flex w-full justify-between text-lg">
        {idx !== orderedPosts.length - 1 ? (
          <Link
            className="no-underline hover:text-orange-600 dark:hover:text-orange-500"
            href={"/logs/" + orderedPosts[idx + 1]!.slug}
          >
            Previous Day
          </Link>
        ) : (
          <div />
        )}
        {idx !== 0 && (
          <Link
            className="no-underline hover:text-orange-600 dark:hover:text-orange-500"
            href={"/logs/" + orderedPosts[idx - 1]!.slug}
          >
            Next Day
          </Link>
        )}
      </div>
    </div>
  );
}
