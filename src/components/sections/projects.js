import { Center, Stack } from "@chakra-ui/react";
import React from "react";
import Project from "../project";

const Projects = ({ seekr }) => {
  const seekrDesc =
    "Allows users to track jobs they have applied to. Stores information about company, job title, interview dates and more. Created in 36 hours for QHacks 2021. Participated as Full-Stack Developer and Team Lead.";
  const seekrFrontend = ["React", "Redux", "Tailwind CSS"];
  const seekrBackend = ["Node.js", "Express", "MongoDB", "Mongoose"];
  return (
    <Center>
      <Stack direction="column" color="white" spacing={35}>
        <Project
          img={seekr}
          title="Job Seekr"
          description={seekrDesc}
          frontend={seekrFrontend}
          backend={seekrBackend}
          linkText="Visit Website"
          link="https://drive.google.com/file/d/1p5moAiHou_mAUeCdkJgXnT1CY7LaKvHq/view"
        />
      </Stack>
    </Center>
  );
};

export default Projects;
