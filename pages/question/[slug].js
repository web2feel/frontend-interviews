import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Meta from "../../components/Question/Meta";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import { SmoothScrollProvider } from "../../context/SmootScroll.context";
function QuestionPage({
  frontmatter: { title, level, category },
  slug,
  content,
}) {
  const tech = (category) => {
    switch (category) {
      case "HTML":
        return "border-orange-600";
        break;
      case "CSS":
        return "border-blue-500";
        break;
      case "JS":
        return "border-yellow-400";
        break;
      case "ReactJS":
        return "border-purple-600";
        break;
      default:
        return "border-green-600";
        break;
    }
  };

  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Layout>
        <div className="my-6 ">
          <Link href={"/"}>
            <div className="my-4 font-bold hidden">
              <span className="cursor-pointer inline-flex gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-fuchsia-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  />
                </svg>
                <span className="text-gray-300 ">Back to Home</span>
              </span>
            </div>
          </Link>

          <div
            className={`p-6  bg-opacity-40 bg-black rounded border-t-4 shadow border-opacity-80 ${tech(
              category
            )}`}
          >
            <Meta category={category} level={level} />
            <h2
              className="prose text-xl text-indigo-200 "
              dangerouslySetInnerHTML={{ __html: marked(title) }}
            />
            <div className="prose mt-4 pt-2 max-w-4xl text-gray-300 border-t border-indigo-600 border-opacity-30">
              <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
            </div>
          </div>
        </div>
      </Layout>
    </SmoothScrollProvider>
  );
}

export default QuestionPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("questions"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const question = fs.readFileSync(
    path.join("questions", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(question);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
