import React, { useState, useEffect, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { authError } from "views/Dashboard/Dashboard/index.js";

// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

import axios from "axios";
import { URL_API } from "constant/data";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dashboardError = useContext(authError);
  const [error, setError] = useState(dashboardError);

  const navigate = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${URL_API}/api/auth/login`, {
      email,
      password,
    }).then((response) => {
      console.log(response);
      localStorage.setItem("token", response.data.access_token);
      navigate.push("/admin/dashboard");
    }).catch((error) => {
      console.log(error);
      setError("Email or password is incorrect");
    });

  };


  return (
    <Flex align="center" justify="center" h="100vh">
      <Box w="400px" borderWidth="1px" borderRadius="20px" p="6" sx={{ backgroundColor: "white" }}>
        <Box className="login__logo" sx={{ display: "flex", justifyContent: "center" }}>
          <img src="https://s2-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/918/500/original/sea_money_logo_h.png?1598495961" alt="logo" style={{ width: "300px" }} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", margin: "20px 0 20px 0", bg: "red.700" }}>
          {/* Massage error */}
          <Text fontSize="sm" color="white" fontWeight="bold" >
            {error}
          </Text>
        </Box>

        <form onSubmit={(e) => handleSubmit(e)}>
          <FormControl>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal' color="black">
              Email
            </FormLabel>
            <Input
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borderRadius='15px'
              mb='24px'
              fontSize='sm'
              type='text'
              size='lg'
              colorScheme="blackAlpha"
              color="gray.900"
              variant="outline"
              borderColor="gray.500"
              _hover={{ color: 'gray.900', borderColor: 'gray.900' }}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal' color="black">
              Password
            </FormLabel>
            <Input
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              borderRadius='15px'
              mb='24px'
              fontSize='sm'
              type='password'
              size='lg'
              colorScheme="blackAlpha"
              color="gray.900"
              variant="outline"
              borderColor="gray.500"
              _hover={{ color: 'gray.900', borderColor: 'gray.900' }}
            />
            <Button fontSize='10px' type='submit' bg='blue.500' w='100%' h='45' mb='20px' color='white' mt='20px'
              _hover={{
                bg: "blue.600",
              }}
              _active={{
                bg: "blue.600",
              }}>
              Sign In
            </Button>
          </FormControl>
        </form>
      </Box>
    </Flex>
  );
}

export default SignIn;
