import React from "react";
import { Link } from "react-router-dom";

export const LinkComponent = ({ className, content, link, isOuterLink }) => {
  return (
    <>
      {isOuterLink ? (
        <a
          className={className ? className : ""}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {content}
        </a>
      ) : (
        <Link className={className} to="/contact">
          {content}
        </Link>
      )}
    </>
  );
};
