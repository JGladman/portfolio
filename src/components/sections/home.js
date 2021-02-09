import { Box, Circle, Text, Stack, Spacer, Center } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Center>
      <Circle
        align="center"
        size="40rem"
        bgGradient="linear(to-tr, gray.200, gray.700)"
        boxShadow="dark-lg"
        padding={20}
        color="white"
      >
        <Stack>
          <Box>
            <Text fontSize="6xl" as="b">
              Hello
            </Text>
          </Box>
          <Text fontSize="3xl">
            My name is Jacob Gladman, and I am a{" "}
            <Text as="b">Full-Stack Developer</Text> working out of Vaughan ON,
            Canada
          </Text>
        </Stack>
      </Circle>
    </Center>
  );
};

export default Home;
