import React from "react";
import {
  Box,
  Heading,
  Image,
  AspectRatio,
  Grid,
  Center,
  Checkbox,
  Text,
  Button,
  GridItem,
} from "@chakra-ui/react";
import {
  SiBmcsoftware,
  SiMaterialdesignicons,
  SiMarketo,
} from "react-icons/si";
import { GoProject, GoSettings } from "react-icons/go";
import { SiCivicrm } from "react-icons/si";
import { MdOutlineTaskAlt } from "react-icons/md";
import { GiHumanPyramid } from "react-icons/gi";
import { FcWorkflow } from "react-icons/fc";

import { ArrowForwardIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <div>
      <Box border="1px" backgroundColor="#0f1047">
        <Heading
          border="1px"
          size="4xl"
          noOfLines={2}
          maxW="80rem"
          color="white"
        >
          A platform Built for a new way of working
        </Heading>
        <Heading size="xl" border="1px" mt="4" color="white">
          What would you like to manage with friday.com Work OS?
        </Heading>
        <Box p="30px">
          <Grid
            templateColumns={{
              sm: "repeat(3, 1fr)",
              md: "repeat(5, 1fr)",
              lg: "repeat(9, 1fr)",
              base: "repeat(3, 1fr)",
            }}
            gap={3}
          >
            {/* <Flex justifyContent="space-between"> */}
            <Box
              p="10px"
              border="1px"
              borderColor={"primary.300"}
              borderRadius="10px"
              _hover={{ borderColor: "#df24a1" }}
            >
              <Checkbox size="lg" colorScheme="pink">
                <Center>
                  <SiMaterialdesignicons color="#df24a1" size="25" />
                </Center>
                <Text
                  mt="8px"
                  w="80px"
                  fontSize="md"
                  noOfLines={2}
                  color={"primary.300"}
                >
                  Creative & Design{" "}
                </Text>
              </Checkbox>
            </Box>
            <Box
              p="10px"
              border="1px"
              borderColor={"primary.300"}
              borderRadius="10px"
              _hover={{ borderColor: "#00c875" }}
            >
              <Checkbox size="lg" colorScheme="green">
                <Center>
                  <SiBmcsoftware color="#00c875" size="25" />
                </Center>
                <Text
                  mt="8px"
                  w="80px"
                  fontSize="md"
                  noOfLines={3}
                  color={"primary.300"}
                >
                  Software Development{" "}
                </Text>
              </Checkbox>
            </Box>
            <Box
              p="10px"
              border="1px"
              borderColor={"primary.300"}
              borderRadius="10px"
              _hover={{ borderColor: "#f04095" }}
            >
              <Checkbox size="lg" colorScheme="pink">
                <Center>
                  <SiMarketo color="#f04095" size="25" />
                </Center>
                <Text
                  mt="8px"
                  w="80px"
                  fontSize="md"
                  noOfLines={1}
                  color={"primary.300"}
                >
                  Marketing{" "}
                </Text>
              </Checkbox>
            </Box>
            <Box
              p="10px"
              border="1px"
              borderColor={"primary.300"}
              borderRadius="10px"
              _hover={{ borderColor: "#ff9900" }}
            >
              <Checkbox size="lg" colorScheme="orange">
                <Center>
                  <GoProject color="#ff9900" size="25" />
                </Center>
                <Text
                  mt="8px"
                  w="80px"
                  fontSize="md"
                  noOfLines={3}
                  color={"primary.300"}
                >
                  Project Management{" "}
                </Text>
              </Checkbox>
            </Box>
            <Box
              p="10px"
              border="1px"
              borderColor={"primary.300"}
              borderRadius="10px"
              _hover={{ borderColor: "#00d2d2" }}
            >
              <Checkbox size="lg" colorScheme="blue">
                <Center>
                  <SiCivicrm color="#00d2d2" size="25" />
                </Center>
                <Text
                  mt="8px"
                  w="80px"
                  fontSize="md"
                  noOfLines={3}
                  color={"primary.300"}
                >
                  Sales & CRM{" "}
                </Text>
              </Checkbox>
            </Box>
            <Box
              p="10px"
              border="1px"
              borderColor={"primary.300"}
              borderRadius="10px"
              _hover={{ borderColor: "#abcdfd" }}
            >
              <Checkbox size="lg" colorScheme="blue">
                <Center>
                  <MdOutlineTaskAlt color="#abcdfd" size="25" />
                </Center>
                <Text
                  mt="8px"
                  w="80px"
                  fontSize="md"
                  noOfLines={3}
                  color={"primary.300"}
                >
                  Task Management{" "}
                </Text>
              </Checkbox>
            </Box>
            <Box
              p="10px"
              border="1px"
              borderColor={"primary.300"}
              borderRadius="10px"
              _hover={{ borderColor: "#ff7575" }}
            >
              <Checkbox size="lg" colorScheme="brown">
                <Center>
                  <GiHumanPyramid color="#ff7575" size="25" />
                </Center>
                <Text
                  mt="8px"
                  w="80px"
                  fontSize="md"
                  noOfLines={3}
                  color={"primary.300"}
                >
                  HR{" "}
                </Text>
              </Checkbox>
            </Box>
            <Box
              p="10px"
              border="1px"
              borderColor={"primary.300"}
              borderRadius="10px"
              _hover={{ borderColor: "#569ec3" }}
            >
              <Checkbox size="lg" colorScheme="blue">
                <Center>
                  <GoSettings color="#569ec3" size="25" />
                </Center>
                <Text
                  mt="8px"
                  w="80px"
                  fontSize="md"
                  noOfLines={3}
                  color={"primary.300"}
                >
                  Operations{" "}
                </Text>
              </Checkbox>
            </Box>
            <Box
              p="10px"
              border="1px"
              borderColor={"primary.300"}
              borderRadius="10px"
              _hover={{ borderColor: "#569ec3" }}
            >
              <Checkbox size="lg" colorScheme="blue">
                <Center>
                  <FcWorkflow size="25" />
                </Center>
                <Text
                  mt="8px"
                  w="80px"
                  fontSize="md"
                  noOfLines={2}
                  color={"primary.300"}
                >
                  More Workflows
                </Text>
              </Checkbox>
            </Box>

            {/* </Flex> */}
          </Grid>
        </Box>

        <Button
          size="md"
          height="48px"
          width="200px"
          mt="40px"
          _hover={{ borderColor: "white", border: "2px" }}
          backgroundColor="#5034ff"
          color="white"
          rightIcon={<ArrowForwardIcon />}
          borderRadius="20px"
        >
          Get Started
        </Button>
        <Text mt="40px" color="white">
          No Credit Card Needed unlimited time on free plan
        </Text>
      </Box>
      <Image
        src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/image.png"
        alt="home1"
      />
     <Heading mt="90px" as='h2' size={{sm:"xs", md:"sm",lg:"md",base:"xs"}}>Trusted by 152,000+ customers worldwide</Heading>
     <Box maxW="900px" margin="auto">
     <Grid m="100px" gap={5} templateColumns={{
      sm: "repeat(3, 1fr)",
      md: "repeat(5, 1fr)",
      lg: "repeat(5, 1fr)",
      base: "repeat(3, 1fr)",
     }}>
      <Image w="150px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png" alt="hulu"/>
      <Image w="150px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png" alt="bd"/>
      <Image w="150px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png" alt="canva"/>
      <Image w="150px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png" alt="nhl"/>
      <Image  w="150px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png" alt="cocacola"/>
      <Image w="150px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hubspot.png" alt="hubspot"/>
      <Image w="150px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png" alt="ea"/>
      <Image w="150px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png" alt="nautika"/>
      <Image  w="150px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png" alt="universal"/>
     </Grid>
     </Box>
     
      <Grid
        h="600px"
        templateRows={{
          sm: "repeat(3, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(7, 1fr)",
          base: "repeat(3, 1fr)",
        }}
        templateColumns={{
          sm: "repeat(3, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(7, 1fr)",
          base: "repeat(3, 1fr)",
        }}
        gap={4}
        
      >
        <GridItem rowSpan={3} colSpan={1} >
          
          <video
            width="300px"
            h="300px"
            src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/MobileApp.mp4"
            autoPlay
            loop
            muted
          />
        </GridItem>

        <GridItem colSpan={2}>
          <video
            width="200px"
            height="200px"
            src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/Talk.mp4"
            autoPlay
            loop
            muted
          />{" "}
        </GridItem>
        <GridItem colSpan={2}>
          <video
            width="200px"
            height="200px"
            src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/Battery.mp4"
            autoPlay
            loop
            muted
          />
        </GridItem>
        <GridItem colSpan={2}>
          {" "}
          <video
            width="200px"
            height="200px"
            src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/Timeline_column.mp4"
            autoPlay
            loop
            muted
          />
        </GridItem>
        
        <GridItem colSpan={4} rowSpan={3}>
          {" "}
          <video
            width="700px"
            src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/Dash.mp4"
            autoPlay
            loop
            muted
          />
        </GridItem>
        <GridItem colSpan={2}><video
            width="200px"
            src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/Pie.mp4"
            autoPlay
            loop
            muted
          /></GridItem>
      </Grid>
    </div>
  );
};

export default Home;
