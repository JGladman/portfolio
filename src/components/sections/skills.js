import {
  Stack,
  Center,
  Box,
  Heading,
  Text,
  Icon,
  Flex,
  Spacer,
  Circle,
} from "@chakra-ui/react";
import Img from "gatsby-image";
import React from "react";

import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiIonic } from "@react-icons/all-files/si/SiIonic";
import { BsFillLightningFill } from "@react-icons/all-files/bs/BsFillLightningFill";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { SiApollographql } from "@react-icons/all-files/si/SiApollographql";

const Skills = ({
  java,
  python,
  kotlin,
  cSharp,
  react,
  redux,
  gatsby,
  tailwindcss,
  node,
  mysql,
}) => {
  return (
    <Center>
      <Stack direction="column" color="white" spacing={35} w="900px">
        <Box rounded="2xl" p={10} boxShadow="dark-lg" bg="gray.700">
          <Heading mb={10}>Languages</Heading>
          <Flex>
            <Stack direction="column" align="center">
              <Icon as={SiJavascript} w="100px" h="100px" color="#E8D44D" />
              <Text>Javascript</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Icon as={SiTypescript} w="100px" h="100px" color="#2F74C0" />
              <Text>Typescript</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Img fixed={java} style={{ width: "74px", height: "100px" }} />
              <Text>Java</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Img fixed={python} style={{ width: "100px", height: "100px" }} />
              <Text>Python</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Img fixed={kotlin} style={{ width: "100px", height: "100px" }} />
              <Text>Kotlin</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Img fixed={cSharp} style={{ width: "90px", height: "100px" }} />
              <Text>C#</Text>
            </Stack>
          </Flex>
        </Box>
        <Box rounded="2xl" p={10} boxShadow="dark-lg" bg="gray.700">
          <Heading mb={10}>Frontend</Heading>
          <Flex>
            <Stack direction="column" align="center">
              <Img fixed={react} style={{ width: "113px", height: "100px" }} />
              <Text>React</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Img fixed={redux} style={{ width: "105px", height: "100px" }} />
              <Text>Redux</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Img fixed={gatsby} style={{ width: "100px", height: "100px" }} />
              <Text>Gatsby</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Icon as={SiNextDotJs} w="100px" h="100px" color="black" />
              <Text>Next.js</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Icon as={SiIonic} w="100px" h="100px" color="#4586F7" />
              <Text>Ionic</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Circle size="100px" bg="#3DC8BE">
                <Icon
                  as={BsFillLightningFill}
                  w="65px"
                  h="65px"
                  color="white"
                />
              </Circle>
              <Text>Chakra UI</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Img
                fixed={tailwindcss}
                style={{ width: "100px", height: "100px" }}
              />
              <Text>Tailwind CSS</Text>
            </Stack>
          </Flex>
        </Box>
        <Box rounded="2xl" p={10} boxShadow="dark-lg" bg="gray.700">
          <Heading mb={10}>Backend</Heading>
          <Flex>
            <Stack direction="column" align="center">
              <Img fixed={node} style={{ width: "162px", height: "100px" }} />
              <Text>Node.js + Express</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Icon as={SiApollographql} w="100px" h="100px" color="black" />
              <Text>Apollo</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Icon as={SiMongodb} w="100px" h="100px" color="#10AA50" />
              <Text>MongoDB</Text>
            </Stack>
            <Spacer />
            <Stack direction="column" align="center">
              <Img fixed={mysql} style={{ width: "148px", height: "100px" }} />
              <Text>MySQL</Text>
            </Stack>
          </Flex>
        </Box>
      </Stack>
    </Center>
  );
};

export default Skills;
