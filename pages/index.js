import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Layout from "../components/Layout";
import Question from "../components/Question";
import { SmoothScrollProvider } from "../context/SmootScroll.context";
export default function Home({ questions }) {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Head>
        <title>Frontend Development: Interview Questions</title>

      </Head>
      <Layout>
        <div className="my-6 ">
          {questions.map((item, i) => {
            return <Question key={i} question={item} />;
          })}
        </div>
      </Layout>
    </SmoothScrollProvider>
  );
}

export async function getStaticProps() {
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

  return {
    props: {
      questions,
    },
  };
}
