import Logo from "./logo";
import BasicUsage from "../modal"
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
      <Box bg={useColorModeValue("white", "white")} px={4} border='1px'>
        <Flex h={16} alignItems="center" justifyContent="space-between" border='1px'>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}border='1px'>
            <Box>
              <HStack spacing={0}>
              <Image w="50%" src="https://i0.wp.com/mainestartupsinsider.com/wp-content/uploads/2020/02/friday-logo-read.png?resize=300%2C90&ssl=1" alt="hg"/>
              <Text color="#f06f43" fontWeight="extrabold" fontSize="25px">.com</Text>
              </HStack>
              
            </Box>
            <HStack
              as={"nav"}
              spacing={9}
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
                <BasicUsage/>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  color={["primary.500"]}
                  variant="solid"
                  
                >
                  Login
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
