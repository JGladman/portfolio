import React from "react";
import { Box } from "@chakra-ui/react";
import { Element } from "react-scroll";
import Banner from "./banner";

const Section = ({ element, title, children }) => {
  return (
    <Element name={element}>
      <Banner title={title} />
      <Box mb={130} />
      {children}
      <Box mb={130} />
    </Element>
  );
};

export default Section;
