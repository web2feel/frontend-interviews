import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Layout from "../../components/Layout";
import Question from "../../components/Question";
import { SmoothScrollProvider } from "../../context/SmootScroll.context";
import { useRouter } from "next/router";
function CategoryPage({ categoryQs }) {
  const router = useRouter();
  const {
    query: { category },
  } = router;
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Head>
        <title>{` ${category} Questions`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="my-6 ">
          {categoryQs.map((x, i) => {
            return <Question key={i} question={x} />;
          })}
        </div>
      </Layout>
    </SmoothScrollProvider>
  );
}

export default CategoryPage;

export async function getStaticPaths() {
  const categories = ["CSS", "HTML", "JS", "ReactJS"];
  const paths = categories.map((category) => ({
    params: {
      category,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category } }) {
  const files = fs.readdirSync(path.join("questions"));
  const questions = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markDownQuestion = fs.readFileSync(
      path.join("questions", filename),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(markDownQuestion);
    return { slug, frontmatter, content };
  });
  const categoryQs = questions.filter(
    (item) => item.frontmatter.category === category
  );
  return {
    props: {
      categoryQs,
    },
  };
}
