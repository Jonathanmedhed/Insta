import React, { Suspense, useRef } from 'react';
import useFirstViewportEntry from '../utils/useFirstViewportEntry';

const RenderOnViewportEntry = ({
  children,
  threshold = 0, // default for Intersection Observer
  root = null, // default for Intersection Observer
  rootMargin = '0px 0px 0px 0px', // default for Intersection Observer
  ...wrapperDivProps // for the div rendered bellow
}) => {
  const ref = useRef();
  const entered = useFirstViewportEntry(ref, { threshold, root, rootMargin });
  return (
    <div {...wrapperDivProps} ref={ref}>
      {entered && (
        <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
      )}
    </div>
  );
};

export default RenderOnViewportEntry;
