import React from "react";
import "../styles/index.css";
import "focus-visible/dist/focus-visible";

import customTheme from "../gatsby-plugin-chakra-ui/theme";
import { ThemeProvider, Flex, Stack, Box } from "@chakra-ui/react";
import Banner from "../components/banner";
import Navbar from "../components/navbar";
import Section from "../components/section";
import Home from "../components/sections/home";
import About from "../components/sections/about";
import Experience from "../components/sections/experience";
import Skills from "../components/sections/skills";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";

function IndexPage({ data }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Flex w="100%" bg="gray.700">
        <Navbar fixed={data.logo.childImageSharp.fixed} />
        <Stack ml="210px" w="100%" spacing={0}>
          <Section element="home" title="Home">
            <Home />
          </Section>
          <Section element="about" title="About Me">
            <About fixed={data.headshot.childImageSharp.fixed} />
          </Section>
          <Section element="projects" title="Projects">
            <Projects seekr={data.seekr.childImageSharp.fixed} />
          </Section>
          <Section element="experience" title="Experience">
            <Experience fixed={data.queens.childImageSharp.fixed} />
          </Section>
          <Section element="skills" title="Skills">
            <Skills
              java={data.javaLogo.childImageSharp.fixed}
              python={data.pythonLogo.childImageSharp.fixed}
              kotlin={data.kotlinLogo.childImageSharp.fixed}
              cSharp={data.cSharpLogo.childImageSharp.fixed}
              react={data.reactLogo.childImageSharp.fixed}
              redux={data.reduxLogo.childImageSharp.fixed}
              gatsby={data.gatsbyLogo.childImageSharp.fixed}
              tailwindcss={data.tailwindcssLogo.childImageSharp.fixed}
              node={data.nodeLogo.childImageSharp.fixed}
              mysql={data.mysqlLogo.childImageSharp.fixed}
            />
          </Section>

          <Section element="contact" title="Contact">
            <Contact />
          </Section>
          <Banner />
        </Stack>
      </Flex>
    </ThemeProvider>
  );
}

export default IndexPage;

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "images/circle-headshot.png" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    queens: file(relativePath: { eq: "images/queens-logo.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    logo: file(relativePath: { eq: "images/logo-cropped.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    javaLogo: file(relativePath: { eq: "images/logos/skills/java-logo.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    pythonLogo: file(
      relativePath: { eq: "images/logos/skills/python-logo.png" }
    ) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    kotlinLogo: file(
      relativePath: { eq: "images/logos/skills/kotlin-logo.png" }
    ) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    cSharpLogo: file(
      relativePath: { eq: "images/logos/skills/c-sharp-logo.png" }
    ) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    reactLogo: file(
      relativePath: { eq: "images/logos/skills/react-logo.png" }
    ) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    reduxLogo: file(
      relativePath: { eq: "images/logos/skills/redux-logo.png" }
    ) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    gatsbyLogo: file(
      relativePath: { eq: "images/logos/skills/gatsby-logo.png" }
    ) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    tailwindcssLogo: file(
      relativePath: { eq: "images/logos/skills/tailwind-logo.png" }
    ) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    nodeLogo: file(relativePath: { eq: "images/logos/skills/node-logo.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    mysqlLogo: file(
      relativePath: { eq: "images/logos/skills/mysql-logo.png" }
    ) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    seekr: file(relativePath: { eq: "images/projects/seekr.png" }) {
      childImageSharp {
        fixed(width: 480, height: 235) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
