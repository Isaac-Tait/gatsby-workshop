import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function Banner() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="bg-blue-500 text-white p-4 text-center">
      <Link to="/ticket">
        Tickets are on sale now for {data.site.siteMetadata.title}!
      </Link>
    </div>
  );
}
