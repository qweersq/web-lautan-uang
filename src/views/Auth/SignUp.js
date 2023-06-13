import { Box, Button, Flex, FormControl, FormLabel, HStack, Icon, Input, Switch, Text, useColorModeValue, InputGroup, InputRightElement } from "@chakra-ui/react";
import BgSignUp from "assets/img/headerSignUp.jpg";
import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { URL_API } from "constant/data";
import Swal from "sweetalert2";

function SignUp() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [akunAdmin, setAkunAdmin] = useState({
    name: "",
    email: "",
    password: "",
    c_password: "",
  });

  const history = useHistory();

  const handleSubmit = async () => {
    try {
      const headers = {
        Status: "OK",
        Code: 200,
      };
      const response = await axios.post(
        `${URL_API}/api/auth/register`,
        { ...akunAdmin },
        { headers }
      );

      Swal.fire({
        title: "Good!",
        text: `Success Register Akun Admin`,
        icon: "success",
        confirmButtonText: "Ok",
      });
      
      // history.push("/admin/dashboard");
    } catch (error) {
      console.log(error);
      Swal.fire({
        // position: "top-end",
        title: `Oopss..`,
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Ok",
      });
      // window.location.reload();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAkunAdmin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
    >
      <Box
        position="absolute"
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={BgSignUp}
        bgSize="cover"
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
      ></Box>
      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        align="center"
        mt="6.5rem"
        mb="30px"
      ></Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="10rem">
        <Flex
          direction="column"
          w="445px"
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <Text
            fontSize="xl"
            color={textColor}
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            Selamat Datang Di Website Admin Nelayan Lautan Uang
          </Text>
          <form>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Name
              </FormLabel>
              <Input
                fontSize="sm"
                name="name"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Your full name"
                mb="24px"
                size="lg"
                onChange={handleChange}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                fontSize="sm"
                name="email"
                ms="4px"
                borderRadius="15px"
                type="email"
                placeholder="Your email address"
                mb="24px"
                size="lg"
                onChange={handleChange}
              />

              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  fontSize="sm"
                  ms="4px"
                  borderRadius="15px"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  mb="24px"
                  size="lg"
                  onChange={handleChange}
                />
                <InputRightElement width="4rem">
                  <Button h="2rem" size="md" onClick={handleTogglePassword}>
                    {showPassword ? (
                      <ViewIcon color="gray.700" />
                    ) : (
                      <ViewOffIcon color="gray.700" />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Confirm Password
              </FormLabel>
              <InputGroup>
                <Input
                  fontSize="sm"
                  name="c_password"
                  ms="4px"
                  borderRadius="15px"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  mb="24px"
                  size="lg"
                  onChange={handleChange}
                />
                <InputRightElement width="4rem">
                  <Button h="2rem" size="md" onClick={handleTogglePassword}>
                    {showPassword ? (
                      <ViewIcon color="gray.700" />
                    ) : (
                      <ViewOffIcon color="gray.700" />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Button
                type="button"
                bg="blue.300"
                fontSize="10px"
                color="white"
                fontWeight="bold"
                w="100%"
                h="45"
                mb="24px"
                _hover={{
                  bg: "blue.200",
                }}
                _active={{
                  bg: "blue.400",
                }}
                onClick={handleSubmit}
              >
                SIGN UP
              </Button>
            </FormControl>
          </form>

          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColor} fontWeight="medium">
              Sudah Memiliki akun ?
              <Button
                colorSceme="blue.300"
                mx={2}
                fontWeight="bold"
                variant="link"
              >
                <Link to="signin">Sign In</Link>
              </Button>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
