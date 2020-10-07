import React from "react";
import { Link } from "gatsby";

export default function Banner() {
  return (
    <div className="bg-blue-500 text-white p-4 text-center">
      <Link to="/ticket">Tickets are on sale now for X Conf!</Link>
    </div>
  );
}
