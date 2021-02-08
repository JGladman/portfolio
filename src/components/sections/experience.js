import {
  Box,
  Circle,
  Text,
  Stack,
  Spacer,
  Center,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import Img from "gatsby-image";

const Experience = ({ fixed }) => {
  return (
    <Center>
      <Stack direction="column" spacing={35}>
        <Stack direction="column" spacing={10}>
          <Stack
            color="white"
            p={10}
            boxShadow="dark-lg"
            rounded="2xl"
            bg="gray.700"
          >
            <Heading>Full-Stack Developer</Heading>
            <Heading fontSize="lg">Royal York Property Management</Heading>
            <Flex>
              <Text>May 2020 - Aug 2020</Text>
              <Spacer />
              <Text>Toronto, ON</Text>
            </Flex>
          </Stack>
          <Stack
            color="white"
            p={10}
            boxShadow="dark-lg"
            rounded="2xl"
            bg="gray.700"
          >
            <Heading>Android Developer</Heading>
            <Heading fontSize="lg">Beta Lab</Heading>
            <Flex>
              <Text>May 2019 - Aug 2020</Text>
              <Spacer />
              <Text>Kingston, ON</Text>
            </Flex>
          </Stack>
          <Stack
            color="white"
            p={10}
            boxShadow="dark-lg"
            rounded="2xl"
            bg="gray.700"
          >
            <Heading>Teaching Assistant</Heading>
            <Heading fontSize="lg">Queen's University</Heading>
            <Flex>
              <Text>January 2021 - Present</Text>
              <Spacer />
              <Text>Kingston, ON</Text>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default Experience;
