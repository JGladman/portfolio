import { Center, Icon, Stack, Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

import { GrMail } from "@react-icons/all-files/gr/GrMail";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";

const Contact = () => {
  return (
    <Box>
      <Center>
        <Stack
          direction="column"
          boxShadow="dark-lg"
          p={10}
          rounded="2xl"
          bg="gray.700"
          color="white"
          spacing={20}
        >
          <Link href="mailto:jacob@gladman.org" fontSize="24px">
            <Icon as={GrMail} mr="10px" />
            jacob@gladman.org
          </Link>
          <Link href="https://github.com/JGladman" isExternal fontSize="24px">
            <Icon as={AiFillGithub} mr="10px" />
            https://github.com/JGladman
          </Link>
          <Link
            href="https://www.linkedin.com/in/jacob-gladman/"
            isExternal
            fontSize="24px"
          >
            <Icon as={AiFillLinkedin} mr="10px" />
            https://www.linkedin.com/in/jacob-gladman/
          </Link>
          <Link
            href="https://www.instagram.com/jacobgladman32/"
            isExternal
            fontSize="24px"
          >
            <Icon as={AiOutlineInstagram} mr="10px" />
            https://www.instagram.com/jacobgladman32/
          </Link>
        </Stack>
      </Center>

      <Box h="11vh" />
    </Box>
  );
};

export default Contact;
