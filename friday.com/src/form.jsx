import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState,useContext,useEffect } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link as RouterLink,useNavigate } from "react-router-dom";

import { AuthContext } from "./AuthContext/Context";



  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [text,settext]=useState({email:"",password:""})
    const {isAuth,loginUser}= useContext(AuthContext)
    const navigate=useNavigate()
    const getdata=async(e)=>{
      e.preventDefault()
      let res= await fetch(`https://reqres.in/api/register`,{
        method :"POST",
        body : JSON.stringify(text),
        headers:{
          "Content-Type":"application/json"
        }
      })
      let data = await res.json()
      if(data.token){
        loginUser(data.token)
        navigate("/login")
      }
        
     
    }
    
    
    const handlechage=(e)=>{
    
    settext({...text,[e.target.name]:e.target.value})
    console.log(text)
    }
    console.log(isAuth)
    return (
        <form onSubmit={getdata}>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
                
            <Stack spacing={4}>
              <HStack>
              
                <Box>
                    
                    <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' onChange={handlechage}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name='password' onChange={handlechage} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
                    
               
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  type='submit'
                  
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
          
        </Stack>
        
      </Flex>
      </form>
    );
  }