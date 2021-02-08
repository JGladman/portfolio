import {
  Flex,
  Button,
  Heading,
  Text,
  Center,
  Stack,
  Spacer,
  Square,
  Box,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
import Img from "gatsby-image";

import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaBasketballBall } from "@react-icons/all-files/fa/FaBasketballBall";
import { ImOffice } from "@react-icons/all-files/im/ImOffice";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaLaptopCode } from "@react-icons/all-files/fa/FaLaptopCode";
import { GrMail } from "@react-icons/all-files/gr/GrMail";

const Navbar = ({ fixed }) => {
  const [contact, setContact] = React.useState(false);
  return (
    <Flex
      pos="fixed"
      h="100vh"
      w="210px"
      direction="column"
      bg="gray.700"
      boxShadow="dark-lg"
    >
      <Box>
        <Center mt="3rem">
          <Img fixed={fixed} style={{ width: "173px", height: "68px" }} />
        </Center>
        <Center mt="2rem" pl="2rem">
          <Heading size="lg" color="white">
            Jacob Gladman
          </Heading>
        </Center>
        <Center align="center">
          <Text fontSize="16px" color="tertiary" mb={3}>
            Full-Stack Developer
          </Text>
        </Center>
      </Box>
      <Spacer />
      <Stack px="2rem" mb="10rem">
        <Button
          className="nav-item"
          variant="link"
          mr={10}
          size="lg"
          w="min-content"
          color="gray.200"
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={300}
            isDynamic={true}
          >
            <Flex direction="row" alignItems="center">
              <Icon as={FaHome} mr={2} />
              <Text>Home</Text>
            </Flex>
          </Link>
        </Button>
        <Button
          className="nav-item"
          variant="link"
          mr={10}
          size="lg"
          w="min-content"
          color="gray.200"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={300}
            isDynamic={true}
          >
            <Flex direction="row" alignItems="center">
              <Icon as={FaBasketballBall} mr={2} />
              <Text>About Me</Text>
            </Flex>
          </Link>
        </Button>
        <Button
          className="nav-item"
          variant="link"
          mr={10}
          size="lg"
          w="min-content"
          color="gray.200"
        >
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={300}
            isDynamic={true}
          >
            <Flex direction="row" alignItems="center">
              <Icon as={ImOffice} mr={2} />
              <Text>Experience</Text>
            </Flex>
          </Link>
        </Button>
        <Button
          className="nav-item"
          variant="link"
          mr={10}
          size="lg"
          w="min-content"
          color="gray.200"
        >
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={300}
            isDynamic={true}
          >
            <Flex direction="row" alignItems="center">
              <Icon as={FaCode} mr={2} />
              <Text>Skills</Text>
            </Flex>
          </Link>
        </Button>
        <Button
          className="nav-item"
          variant="link"
          mr={10}
          size="lg"
          w="min-content"
          color="gray.200"
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={300}
            isDynamic={true}
          >
            <Flex direction="row" alignItems="center">
              <Icon as={FaLaptopCode} mr={2} />
              <Text>Projects</Text>
            </Flex>
          </Link>
        </Button>
        <Button
          className="nav-item"
          variant="link"
          mr={10}
          size="lg"
          w="min-content"
          color="gray.200"
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={300}
            isDynamic={true}
            onClick={() => console.log("click")}
          >
            <Flex direction="row" alignItems="center">
              <Icon as={GrMail} mr={2} />
              <Text>Contact</Text>
            </Flex>
          </Link>
        </Button>
      </Stack>
      <Spacer />
      <Flex>
        {/* <Square bg="gray.200" size="70px" />
        <Square bg="gray.400" size="70px" />
        <Square bg="gray.600" size="70px" /> */}
      </Flex>
    </Flex>
  );
};

export default Navbar;
