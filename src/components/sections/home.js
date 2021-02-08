import { Box, Circle, Text, Stack, Spacer, Center } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Center>
      <Circle
        align="center"
        size="40rem"
        bgGradient="linear(to-tr, gray.100, gray.700)"
        boxShadow="dark-lg"
      >
        <Stack>
          <Box>
            <Text color="white" fontSize="6xl" as="b">
              Hello!
            </Text>
          </Box>
          <Text color="white" fontSize="3xl">
            My name is Jacob Gladman, and I am a Full-Stack Software Developer
            working out of Vaughan, Canada
          </Text>
        </Stack>
      </Circle>
    </Center>
  );
};

export default Home;
