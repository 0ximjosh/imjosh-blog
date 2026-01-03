import fsPromises from "fs/promises";
import Link from "next/link";
import path from "path";
import { filenameToTitle } from "~/utils/utils";

export default async function Page() {
  const filepath = path.join(process.cwd(), "src", "logs");
  const posts = await fsPromises.readdir(filepath, { withFileTypes: false });
  const orderedPosts = posts
    .map((f) => {
      return { slug: filenameToTitle(f.slice(0, -3)) };
    })
    .sort(
      (a, b) =>
        new Date(b.slug ?? "").getTime() - new Date(a.slug ?? "").getTime(),
    );
  return (
    <div className="prose dark:prose-invert">
      <h1>Logs</h1>
      <ul>
        {orderedPosts.map((p) => (
          <li className="text-xl capitalize" key={p.slug}>
            <Link
              href={`/logs/${p.slug}`}
              className="no-underline hover:underline"
            >
              {p.slug.replaceAll("-", " ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
