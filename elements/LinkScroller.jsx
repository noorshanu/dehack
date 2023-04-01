import React from "react";
import Link from "next/link";
import { scroller } from "react-scroll";

function LinkScroller({
  id,
  to,
  className,
  other,
  children,
  scrollerOptions = { smooth: true },
  wait = 1000,
  onClick,
}) {
  return (
    <Link
      to={id}
      {...other}
      className={className}
      onClick={() => {
        setTimeout(() => {
          scroller.scrollTo(id, scrollerOptions);
          if (onClick) {
            onClick();
          }
        }, wait);
      }}
    >
      {children}
    </Link>
  );
}

export default LinkScroller;
