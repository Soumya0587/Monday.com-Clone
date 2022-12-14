import React from "react";
import { Box, Image } from "@chakra-ui/react";
import image from "../img/Friday.com (1).jpg"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image borderRadius='full' boxSize='50px' src={image}/>
    </Box>
  );
}