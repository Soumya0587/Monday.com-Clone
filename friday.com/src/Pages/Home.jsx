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
  Flex,
  Spacer,
  HStack,
  Avatar,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  VStack,
  Link,
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
import { HiOutlineViewBoards } from "react-icons/hi";
import { BsViewStacked } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { GrIntegration } from "react-icons/gr";
import { TbSettingsAutomation } from "react-icons/tb";
import { TbApiApp } from "react-icons/tb";

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
      <Heading
        mt="90px"
        as="h2"
        size={{ sm: "xs", md: "sm", lg: "md", base: "xs" }}
      >
        Trusted by 152,000+ customers worldwide
      </Heading>
      <Box maxW="900px" margin="auto">
        <Grid
          mt="100px"
          mb="100px"
          gap={7}
          templateColumns={{
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(5, 1fr)",
            base: "repeat(3, 1fr)",
          }}
        >
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png"
            alt="hulu"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png"
            alt="bd"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png"
            alt="canva"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png"
            alt="nhl"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png"
            alt="cocacola"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hubspot.png"
            alt="hubspot"
          />
          <Image
            w="100px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png"
            alt="ea"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png"
            alt="nautika"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png"
            alt="universal"
          />
        </Grid>
      </Box>
      <Box w="80%" pb="150px" margin="auto">
        <Flex justifyContent="space-between">
          <Box w="40%">
            <Text fontSize="4xl">
              The Work OS that lets you shape workflows,<b>your way</b>
            </Text>
          </Box>
          <Spacer />
          <Box w="40%">
            <Text fontSize="2xl" color="grey">
              Boost your team’s alignment, efficiency, and productivity by
              customizing any workflow to fit your needs.
            </Text>

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
          </Box>
        </Flex>
      </Box>
      <Box w="100%" margin="auto">
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
          <GridItem rowSpan={3} colSpan={1}>
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
              width="300px"
              height="300px"
              src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/Timeline_column.mp4"
              autoPlay
              loop
              muted
            />
          </GridItem>

          <GridItem colSpan={5} rowSpan={2}>
            {" "}
            <video
              width="900px"
              src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/Dash.mp4"
              autoPlay
              loop
              muted
            />
          </GridItem>
          <GridItem colSpan={1}>
            <video
              width="200px"
              src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/Pie.mp4"
              autoPlay
              loop
              muted
            />
          </GridItem>
        </Grid>
      </Box>
      <Box
        backgroundColor="#0f1048"
        pt="30%"
        pl="30%"
        pr="30%"
        pb="10%"
        margin="auto"
      >
        <Box>
          <Box>
            {" "}
            <Text color="white" fontSize="5xl">
              Streamline your work for <b>maximum productivity</b>
            </Text>
            <Text color="white" fontSize="2xl">
              Centralize all your work, processes, tools, and files into one
              Work OS. Connect teams, bridge silos, and maintain one source of
              truth across your organization.
            </Text>
            <HStack spacing={5} mt="100px">
              <Avatar
                name="Dan Abrahmov"
                size="xl"
                src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/jane.jpeg"
              />
              <Text color="white" fontSize="l">
                “ We use monday.com for a plethora of use cases, the
                opportunities this platform provides are limitless.” <br />{" "}
                <b>Jane Tham | VP of Collaboration Technologies</b> <br />{" "}
                Universal Music Group
              </Text>
            </HStack>
          </Box>
          <Box mt="200px">
            <Text color="white" fontSize="5xl">
              Bring teams together to <b>drive business impact</b>
            </Text>

            <Text color="white" fontSize="2xl">
              Collaborate effectively organization-wide to get a clear picture
              of all your work. Stay in the loop with easy-to-use automations
              and real-time notifications.
            </Text>
            <HStack spacing={5} mt="100px">
              <Avatar
                name="Dan Abrahmov"
                size="xl"
                src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/sarah.jpeg"
              />
              <Text color="white" fontSize="l">
                “ Since adopting monday.com, our global marketing department has
                seen a 40% improvement in cross-team collaboration.”
                <br /> <b>Sarah Pharr | AVP Marketing</b> <br /> Genpact
              </Text>
            </HStack>
          </Box>
          <Box mt="150px">
            <Text color="white" fontSize="5xl">
              Stay on track to <b>reach your goals, faster</b>
            </Text>
            <Text color="white" fontSize="2xl">
              Get a high-level overview of your organization with customizable
              dashboards. Make confident decisions and easily scale workflows
              for your evolving needs.
            </Text>
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
          </Box>
          <Box>
            <HStack spacing={5} mt="100px">
              <Avatar
                name="Dan Abrahmov"
                size="xl"
                src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/baptiste.jpeg"
              />
              <Text color="white" fontSize="l">
                “ monday.com allows banks to be synchronized between the
                top-level management figures and local KPIs.”
                <br /> <b>Baptiste Ancey | Head of Innovation</b> <br />{" "}
                Indosuez Wealth Management
              </Text>
            </HStack>
          </Box>
        </Box>
      </Box>
      <Box mt="150px">
        <Text fontSize="5xl">
          {" "}
          <b>Everything</b> you need for <b>any workflow</b>
        </Text>
        <Text color="grey" fontSize="xl">
          Easily build your ideal workflow with monday.com building blocks.
        </Text>
      </Box>
      <Box mt="150px" pt="10%" backgroundColor="#f6f8ff">
        <Tabs variant="enclosed">
          <TabList w="50%" ml="25%" mr="25%">
            <Tab>
              <VStack>
                <HiOutlineViewBoards />
                <Text>Boards</Text>
              </VStack>
            </Tab>
            <Tab>
              <VStack>
                <BsViewStacked />
                <Text>views</Text>
              </VStack>
            </Tab>
            <Tab>
              <VStack>
                <RxDashboard />
                <Text>Dashboards</Text>
              </VStack>
            </Tab>
            <Tab>
              <VStack>
                <GrIntegration />
                <Text>Integrations</Text>
              </VStack>
            </Tab>
            <Tab>
              <VStack>
                <TbSettingsAutomation />
                <Text>Automations</Text>
              </VStack>
            </Tab>
            <Tab>
              <VStack>
                <TbApiApp />
                <Text>Apps</Text>
              </VStack>
            </Tab>
            <Tab>
              <VStack>
                <BsViewStacked />
                <Text>Docs</Text>
              </VStack>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box w="90%" m="auto">
                <Flex justifyContent="space-between">
                  <video
                    width="60%"
                    src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/7_status.mp4"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <Center w="35%">
                    <VStack>
                      <Text fontSize="xl" color="blue">
                        Boards
                      </Text>
                      <Text fontSize="l">
                        Everything starts with a visual board — the core of
                        monday.com Work OS. Tailor it your way and manage
                        anything from projects to departments
                      </Text>
                    </VStack>
                  </Center>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box w="90%" m="auto">
                <Flex justifyContent="space-between">
                  <video
                    width="60%"
                    src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/1_Views.mp4"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <Center w="35%">
                    <VStack>
                      <Text fontSize="xl" color="blue">
                        Views
                      </Text>
                      <Text fontSize="l">
                        Visualize and plan your work more efficiently with
                        multiple views: Kanban board, calendar, timeline, Gantt
                        chart, and more.
                      </Text>
                    </VStack>
                  </Center>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box w="90%" m="auto">
                <Flex justifyContent="space-between">
                  <video
                    width="60%"
                    src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/2_Dashboards.mp4"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <Center w="35%">
                    <VStack>
                      <Text fontSize="xl" color="blue">
                        Dashboards
                      </Text>
                      <Text fontSize="l">
                        Get the insights you need to make decisions with
                        confidence. Keep track of progress, timelines, and
                        budgets with custom dashboards.
                      </Text>
                      <Link color="blue">
                        Learn More {<ArrowForwardIcon />}
                      </Link>
                    </VStack>
                  </Center>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box w="90%" m="auto">
                <Flex justifyContent="space-between">
                  <video
                    width="60%"
                    src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/4_Integrations.mp4"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <Center w="35%">
                    <VStack>
                      <Text fontSize="xl" color="blue">
                        Integrations
                      </Text>
                      <Text fontSize="l">
                        Connect monday.com with all your favorite tools and get
                        more work done. Integrate Slack, Dropbox, Adobe Creative
                        Cloud, and more.
                      </Text>
                      <Link color="blue">
                        Learn More {<ArrowForwardIcon />}
                      </Link>
                    </VStack>
                  </Center>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box w="90%" m="auto">
                <Flex justifyContent="space-between">
                  <video
                    width="60%"
                    src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/3_Automations.mp4"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <Center w="35%">
                    <VStack>
                      <Text fontSize="xl" color="blue">
                        Automations
                      </Text>
                      <Text fontSize="l">
                        Streamline processes to focus on the work that matters.
                        Choose from a variety of automation recipes or create
                        your own in minutes.
                      </Text>
                      <Link color="blue">
                        Learn More {<ArrowForwardIcon />}
                      </Link>
                    </VStack>
                  </Center>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box w="90%" m="auto">
                <Flex justifyContent="space-between">
                  <video
                    width="60%"
                    src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/5_Apps.mp4"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <Center w="35%">
                    <VStack>
                      <Text fontSize="xl" color="blue">
                        Apps
                      </Text>
                      <Text fontSize="l">
                        Expand the capabilities of your Work OS with monday
                        apps. Enhance your workflows with custom views, widgets,
                        integrations, and more.
                      </Text>
                      <Link color="blue">
                        Learn More {<ArrowForwardIcon />}
                      </Link>
                    </VStack>
                  </Center>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box w="90%" m="auto">
                <Flex justifyContent="space-between">
                  <video
                    width="60%"
                    src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/6_Docs.mp4"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <Center w="35%">
                    <VStack>
                      <Text fontSize="xl" color="blue">
                        Docs
                      </Text>
                      <Text fontSize="l">
                        Transform text into action items, in just a few clicks.
                        Connect, collaborate, and execute ideas and workflows in
                        real-time from any doc.
                      </Text>
                      <Link color="blue">
                        Learn More {<ArrowForwardIcon />}
                      </Link>
                    </VStack>
                  </Center>
                </Flex>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box mt="150px" >
        <video
          src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/products_video.mp4"
          autoPlay
          loop
          muted
        ></video>
      </Box>
      <Box mt="200px">
        <Image m="auto" src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/stars.png"/>
        <Text fontSize="3xl" mt="30px">An <b>award-winning</b> platform. <b>Loved</b> by customers.</Text>
        <Text mt="20px">Based on 10,000+ customer reviews.</Text>
      </Box>
    </div>
  );
};

export default Home;
