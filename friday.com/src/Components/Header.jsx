import Logo from "./logo";
import BasicUsage from "../modal"
import Login from "../Pages/login"
import { Link as RouterLink, } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  Spacer,
  MenuList,
  MenuItem,
  ButtonGroup,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const Links = ["Projects", "UseCases", "Features", "Resources"];
const Links1 = ["Pricing", "Contact Sales"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white", "white")} px={4} >
        <Flex h={16} alignItems="center" justifyContent="space-around" >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={3} alignItems={"center"}>
            <Box>
              <HStack spacing={0}>
              <Image w="50%" src="https://i0.wp.com/mainestartupsinsider.com/wp-content/uploads/2020/02/friday-logo-read.png?resize=300%2C90&ssl=1" alt="hg"/>
              <Text color="#f06f43" fontWeight="extrabold" fontSize="25px">.com</Text>
              </HStack>
              
            </Box>
            <HStack
              as={"nav"}
              spacing={2}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            </HStack>
            <Spacer />

            <HStack>
              <ButtonGroup gap="2">
                {/* <Button color={["primary.500"]} variant="outline" w="50">
                  Create New Account
                </Button> */}
                {Links1.map((link) => (
                <NavLink key={link}>
                  <Text>{link}</Text>
                  
                  </NavLink>
              ))}
                <BasicUsage/>
                
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  color="white"
                  variant="solid"
                  backgroundColor="#5034ff"
                  _hover={{ borderColor: "white", border: "2px" }}
                >
                  <RouterLink to="/login"> Login</RouterLink>
                  
                </Button>
              </ButtonGroup>
            </HStack>
          
        </Flex>

        {isOpen ? (
          <Box pb={10} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
