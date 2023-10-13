import { Html } from "@react-three/drei";
import React from "react";
import { RevolvingDot } from "react-loader-spinner";

const Loading = () => {
  return (
    <Html color="#1b1b1b" position={[0, 1.5, 0]}>
      <RevolvingDot
        radius="45"
        strokeWidth="3"
        color="red"
        secondaryColor="green"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{ width: 150, height: "150px", background: "#1b1b1b" }}
        wrapperClass=""
        visible={true}
      />
    </Html>
  );
};

export default Loading;
