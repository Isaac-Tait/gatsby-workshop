import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TalkCard from "../components/talkCard";

import BareTree from "../images/bare-tree.svg";

const Hero = ({ talks }) => (
  <div className="text-center">
    <p className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter">
      August 2nd, 2021
      <br />
    </p>
    <p className="mt-6 ml-24 text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter">
      Boulder, Colorado
    </p>
    <br />
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4...">
        <img src={BareTree} alt="illustrated woman doodling" />
      </div>
      <div className="text-lg text-gray-700 col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-2...">
        <h2 className="text-3xl font-bold text-gray-800 leading-8 tracking-tight">
          Join Us!
        </h2>{" "}
        We're looking forward to gathering virtually in October 2020 for our
        inaugural conference! Below you can find our schedule and learn more
        about our dynamic lineup. Be sure to secure a ticket before we sell out
        as tickets are limited.
      </div>
    </div>
    <br />
    <h2 className="mb-6 items-center text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter">
      Schedule
    </h2>
    {talks.map((talk) => {
      return <TalkCard talk={talk.node} key={talk.node.name} />;
    })}
  </div>
);

function IndexPage() {
  const data = useStaticQuery(graphql`
    query FetchSpeakers {
      allSpeakersYaml {
        edges {
          node {
            id
            avatar
            name
            title
            time
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <Hero talks={data.allSpeakersYaml.edges} />
    </Layout>
  );
}

export default IndexPage;
