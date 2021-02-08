import {
  Stack,
  Heading,
  Text,
  Center,
  Box,
  Link,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import Img from "gatsby-image";

import { BiLinkExternal } from "@react-icons/all-files/bi/BiLinkExternal";

const About = ({ fixed }) => {
  return (
    <Center>
      {/* Make column for responsive design */}
      <Stack
        direction="row"
        spacing={10}
        boxShadow="dark-lg"
        p={10}
        rounded="2xl"
        bg="gray.700"
      >
        <Img
          style={{ height: "325px", width: "325px", borderRadius: "50%" }}
          fixed={fixed}
        />
        <Stack color="white">
          <Heading color="white" size="2xl">
            About Me
          </Heading>
          <Box w="500px" fontSize="lg">
            <Text>
              My name is{" "}
              <Text color="white" as="em">
                Jacob Gladman{" "}
              </Text>
              and I am a{" "}
              <Text color="white" as="em">
                Full-Stack Developer{" "}
              </Text>{" "}
              working out of Canada. I am passionate about developing beautiful
              and performant web applications. I am currently studying{" "}
              <Text color="white" as="em">
                Computer Science
              </Text>{" "}
              at Queen's University and am graduating in 2023. My passions
              extend outside of the professional world through my hobbies such
              as Basketball, Brazilian Jiu Jitsu, and Chess
              {/* <Text color="secondary" as="b">
                Basketball
              </Text>
              ,{" "}
              <Text color="primary" as="b">
                Brazilian Jiu Jitsu
              </Text>
              , and{" "}
              <Text color="secondary" as="b">
                Chess
              </Text> */}
              . I am always looking to learn and develop skills in new areas
              both in and out of the technology industry! You can find out more
              about my professional experiences by checking out my{" "}
              <Link
                href="https://drive.google.com/file/d/1p5moAiHou_mAUeCdkJgXnT1CY7LaKvHq/view"
                isExternal
                color="tertiary"
              >
                resume <Icon as={BiLinkExternal} />
              </Link>
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Center>
  );
};

export default About;
