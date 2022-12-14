import React from 'react'
import { Box,Heading,Image,Flex, Spacer,Checkbox,Text } from '@chakra-ui/react'
import { SiBmcsoftware  } from "react-icons/si";
const Home = () => {
  return (
    <div>
        <Box border='1px' backgroundColor='#020336'>
        <Heading border='1px' size='4xl' noOfLines={2} maxW='80rem' color="white">A platform Built for a new way of working</Heading>
        <Heading size='xl' border='1px' mt="4" color="white">What would you like to manage with friday.com Work OS?</Heading>
        <Flex>
            <Box>
            <Checkbox>
            <SiBmcsoftware color="green" size="30" />
            <Text border='1px'  size='l' mx="auto" color="white">Software Development </Text>
            </Checkbox>
            </Box>
            
        </Flex>
        </Box>
        <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/image.png" alt="home1"/>
        
    </div>
  )
}

export default Home