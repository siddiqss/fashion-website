"use client";
import React from "react";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function LocomotiveProvider({ children }) {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      innerRef={containerRef}
      options={{
        smooth: true,
      }}
      watch={[]}
    >
      {/* Pass containerRef as a prop to children */}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { containerRef })
      )}
    </LocomotiveScrollProvider>
  );
}

export default LocomotiveProvider;
