import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState,useContext,useEffect } from 'react';

import { Link as RouterLink,useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/Context";
export default function Login() {
  
  const [text,settext]=useState({email:"",password:""})
  const {loginisAuth,loginuser}= useContext(AuthContext)
  const navigate=useNavigate()
  const getdata=async(e)=>{
    e.preventDefault()
    let res= await fetch(`https://reqres.in/api/login`,{
      method :"POST",
      body : JSON.stringify(text),
      headers:{
        "Content-Type":"application/json"
      }
    })
    let data = await res.json()
    if(data.token){
      loginuser(data.token)
      navigate("/plan")
    }
      
   
  }
  
  
  const handlechage=(e)=>{
  
  settext({...text,[e.target.name]:e.target.value})
  console.log(text)
  }
  console.log(loginisAuth)
  return (
    <form onSubmit={getdata}>

    
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' onChange={handlechage} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password' onChange={handlechage} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              type='submit'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </form>
  );
}