import {
  Box,
  Stack,
  Heading,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Spacer,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  Link,
} from "@chakra-ui/react";
import Img from "gatsby-image";
import React from "react";

import { BiLinkExternal } from "@react-icons/all-files/bi/BiLinkExternal";
import { FiChevronRight } from "@react-icons/all-files/fi/FiChevronRight";

const Project = ({
  img,
  title,
  description,
  frontend,
  backend,
  linkText,
  link,
}) => {
  const frontendItems = frontend.map((item) => (
    <ListItem>
      <ListIcon as={FiChevronRight} />
      {item}
    </ListItem>
  ));

  let backendItems;
  if (backend) {
    backendItems = backend.map((item) => (
      <ListItem>
        <ListIcon as={FiChevronRight} />
        {item}
      </ListItem>
    ));
  }
  return (
    <Box boxShadow="dark-lg" bg="gray.700" w="480px">
      <Stack direction="column" spacing={0}>
        <Img fixed={img} style={{ width: "480px", height: "235px" }} />
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton w="480px" bg="secondary">
                <Flex align="center" w="100%">
                  <Heading>{title}</Heading>
                  <Spacer />
                  <AccordionIcon w="40px" h="40px" />
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Stack direction="column" w="480px" spacing={8}>
                <Stack direction="column" w="460px" spacing={0}>
                  <Text as="u">Description</Text>
                  <Text w="460px">{description}</Text>
                </Stack>
                {backend ? (
                  <Stack direction="row" w="480px">
                    <Stack direction="column" w="40%" spacing={1}>
                      <Text as="u">Frontend</Text>
                      <List>{frontendItems}</List>
                    </Stack>
                    <Stack direction="column" spacing={1}>
                      <Text as="u">Backend</Text>
                      <List>{backendItems}</List>
                    </Stack>
                  </Stack>
                ) : (
                  <Stack direction="column" w="480px" spacing={1}>
                    <Text as="u">Frontend</Text>
                    <List>{frontendItems}</List>
                  </Stack>
                )}
                <Link href={link} isExternal color="primary">
                  {linkText} <Icon as={BiLinkExternal} />
                </Link>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Box>
  );
};

export default Project;
