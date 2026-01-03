import rehypeHighlight from "rehype-highlight";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
const options = {};
const withMDX = (await import("@next/mdx")).default({
  options: {
    rehypePlugins: [[rehypeHighlight(), options]],
  },
});
const { withAxiom } = await import("next-axiom");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withAxiom(withMDX(config));
