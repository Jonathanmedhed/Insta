import React, { useState } from "react";

export const Hover = ({ action, children }) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
    action();
  };

  return (
    <span onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      {children}
    </span>
  );
};
