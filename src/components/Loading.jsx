import { Html } from "@react-three/drei";
import React from "react";
import { RevolvingDot } from "react-loader-spinner";

const Loading = () => {
  return (
    <Html color="#022027" position={[0, 1.5, 0]}>
      <RevolvingDot
        radius="45"
        strokeWidth="3"
        color="white"
        secondaryColor="#1bfaff"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{ width: 150, height: "150px", background: "#022027" }}
        wrapperClass=""
        visible={true}
      />
    </Html>
  );
};

export default Loading;
