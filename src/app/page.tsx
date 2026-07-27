import Link from "next/link";

export default function Page() {
  return (
    <div className="prose dark:prose-invert">
      <h1 className="">
        Hey there! <br className="sm:hidden" /> I{"'"}m josh.
      </h1>
      <div className="max-w-2xl">
        <p>
          I{"'"}m a software engineer based out of Austin TX. I{"'"}m currently
          Community Engineer at{" "}
          <a href="https://planetscale.com/" className="hover:underline">
            PlanetScale
          </a>{" "}
          spreading the word about the fastest and most reliable databases
          available in the cloud built by the brightest people around.
        </p>
        <h3>Past Work</h3>
        <p>
          From 2024 to early 2026 I was CTO at{" "}
          <a href="https://manifold.inc">Manifold</a>, building a decentralized
          permission-less compute marketplace. We wrote a joint paper with Intel
          on{" "}
          <a href="https://community.intel.com/t5/Blogs/Products-and-Solutions/Security/Decentralized-Compute-on-Untrusted-Hardware-Using-Intel-TDX-and/post/1741192">
            decentralized compute on untrusted hardware
          </a>
          .
        </p>
        <p>
          From mid 2022 to early 2024 I was proudly the CTO at{" "}
          <a href="https://biblish.com">Biblish</a>, where we built the home of
          literature for the 21st century. During my time at Biblish we launched{" "}
          <a href="https://papertrail.biblish.com">Papertrail</a> and{" "}
          <a href="https://submissions.biblish.com">Submissions</a>.
        </p>
        <p>
          In 2023 I formed my own LLC called Brunus Labs to take on contract
          work. During my time at Brunus we built internal time tracking
          applications, lightweight POS systems, discord bots, marketing sites
          and more.
        </p>
        <p>
          Before Brunus Labs I was a Web and Application Developer at{" "}
          <a href="https://my.clevelandclinic.org/">Cleveland Clinic</a>. I
          created multiple web applications and moved all of our teams projects
          from TFVC to git (that wasn{"'"}t fun) amongst other things.
        </p>
        <h3>People I Love</h3>
        Checkout some of my favorite people I{"'"}ve met over the past few years
        on my journey:
        <ul>
          <li>
            <a href="https://darwich.dev">Ahmed Darwich</a>
            {", "}My right hand man
          </li>
          <li>
            <a href="https://dhruvbindra.com/">Dhruv Bindra</a>
            {", "}One of the most talented Kubernetes people I{"'"}ve ever met
          </li>
        </ul>
      </div>
    </div>
  );
}
