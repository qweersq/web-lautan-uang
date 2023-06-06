import {
  AtSignIcon,
  PhoneIcon,
  SearchIcon,
  UnlockIcon,
  ViewIcon,
  ViewOffIcon,
  EditIcon,
  InfoOutlineIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Tr,
  Box,
  useColorModeValue,
  useDisclosure,
  AddIcon,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  InputGroup,
  Menu,
  MenuButton,
  InputLeftElement,
  InputLeftAddon,
  InputRightElement,
  Textarea,
  MenuList,
  MenuItem,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_API } from "constant/data";
import { token } from "stylis";
import Swal from "sweetalert2";

function TableFisherman(props) {
  const {
    id,
    name,
    phone,
    email,
    tim_id,
    team_name,
    location,
    city,
    kecamatan,
    kelurahan,
    province,
    gender,
    birth_date,
    status,
    password,
    experience,
    nik,
    image,
    identity_photo,
    address,
    role,
    location_id,
    photo,
  } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("blue.600", "white");
  const colorStatus = useColorModeValue("gray.700", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: IsOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const cancelRef = React.useRef();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [fishermanData, setFishermanData] = useState({
    tim_id: props.tim_id,
    name: props.name,
    phone: props.phone,
    email: props.email,
    password: props.password,
    gender: props.gender,
    birth_date: props.birth_date,
    address: props.address,
    role: props.role,
    location_id: props.location_id,
    status: props.status,
    experience: props.experience,
    nik: props.nik,
    // photo: props.photo,
    identity_photo: props.identity_photo,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFishermanData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(fishermanData);
  };

  const handleDeleteFisherman = async (id) => {
    console.log(id);
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.delete(`${URL_API}/api/fisherman/${id}`, {
        headers,
      });
      // console.log(response.data);

      onCloseDelete();
      Swal.fire({
        title: "Delete!",
        text: `Success Delete Fisherman`,
        icon: "success",
        confirmButtonText: "Ok",
      });

      await new Promise((r) => setTimeout(r, 500));
      window.location.reload();
    } catch (error) {
      const errMes = JSON.stringify(error.response.data.message);
      Swal.fire({
        position: "top-end",
        title: `Oopss..`,
        text: `${errMes}`,
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(error);
    }
  };

  const handleEditFisherman = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        Status: `OK`,
        Code: 200,
        Accept: `application/json`,
      };

      const response = await axios.put(
        `${URL_API}/api/fisherman`,
        // { ...newFisherman },
        {
          name: fishermanData.name,
          tim_id: fishermanData.tim_id,
          phone: fishermanData.phone,
          email: fishermanData.email,
          password: fishermanData.password,
          gender: fishermanData.gender,
          birth_date: newFisherman.birth_date,
          location_id: fishermanData.location_id,
          status: fishermanData.status,
          experience: parseInt(fishermanData.experience),
          nik: fishermanData.nik,
          image: fishermanData.image,
          identity_photo: fishermanData.identity_photo,
        },
        { headers }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   editTransactionData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(transactionData); // contoh, untuk sementara hanya menampilkan data pada console
  //   onClose();
  // };

  const [selectedGender, setSelectedGender] = React.useState("");
  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const [selectedLoc, setSelectedLoc] = React.useState("");
  const handleLocSelect = (location) => {
    setSelectedLoc(location);
  };

  const [selectedRole, setSelectedRole] = React.useState("");
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const [selectedStatus, setSelectedStatus] = React.useState("");
  const handleStatusSelect = (role) => {
    setSelectedStatus(role);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Tr>
      <Td pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={image} w="50px" borderRadius="12px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        {/* <Flex direction="column"> */}
        <Badge
          color={bgStatus}
          fontSize="15px"
          p="3px 10px"
          borderRadius="8px"
          my={2}
        >
          {team_name}
        </Badge>
        <Text
          color={textColor}
          fontSize="sm"
          p="3px 10px"
          borderRadius="8px"
          fontWeight="bold"
        >
          {city}
        </Text>
        {/* </Flex> */}
      </Td>

      <Td>
        {/* <Flex direction="column"> */}
        {location == null ? (
          // <p>Hello</p>
          <Text>None</Text>
        ) : (
          <Badge
            color={bgStatus}
            fontSize="15px"
            p="3px 10px"
            borderRadius="8px"
            my={1}
          >
            {location}
          </Badge>
        )}
        <Text
          fontSize="sm"
          // bg="gray.300"
          p="3px 10px"
          borderRadius="8px"
          fontWeight="bold"
        >
          Phone : {phone}
        </Text>
        {/* </Flex> */}
      </Td>
      <Td>
        <Badge fontSize="md" color={bgStatus} fontWeight="bold" p="3px 10px">
          {gender}
        </Badge>
      </Td>

      {/* <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {role}
        </Text>
      </Td> */}
      <Td>
        <Badge
          bg={status === "aktif" ? "green.400" : "white"}
          color={status === "aktif" ? "white" : "black"}
          // color = {"white"}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status}
        </Badge>
      </Td>

      <Td>
        {/* <Flex direction="column" align="center"> */}
        <Button
          p="0px"
          w="20"
          size="md"
          bg="yellow.300"
          variant="ghost"
          onClick={onOpen}
          m={1}
        >
          Edit
        </Button>
        <br />
        <Button
          p="0px"
          w="20"
          m={1}
          size="md"
          bg="red.300"
          variant="ghost"
          onClick={onOpenDelete}
        >
          Delete
        </Button>
        {/* </Flex> */}
      </Td>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Fisherman</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={() => handleEditFisherman(id)}>
            <ModalBody pb={6}>
              <Flex gap={5}>
                <FormControl>
                  <FormLabel>Fisherman Team</FormLabel>
                  <Input
                    name="tim_id"
                    type="number"
                    value={fishermanData.tim_id}
                    placeholder="Input Fisherman Team"
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Fisherman Name</FormLabel>
                  <Input
                    name="name"
                    value={fishermanData.name}
                    onChange={handleInputChange}
                    placeholder="Input Fisherman Name"
                  />
                </FormControl>
              </Flex>

              <FormControl mt={4}>
                <FormLabel>Phone</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                    // value={phone}
                  />
                  <Input
                    type="tel"
                    name="phone"
                    // value={phone}
                    value={fishermanData.phone}
                    onChange={handleInputChange}
                    // onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                </InputGroup>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Account</FormLabel>
                <InputGroup>
                  <InputLeftAddon children={<AtSignIcon color="gray.300" />} />
                  <Input
                    name="email"
                    // value={email}
                    value={fishermanData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Enter Email"
                  />
                </InputGroup>
                <InputGroup mt={2}>
                  <InputLeftAddon children={<UnlockIcon color="gray.300" />} />
                  <Input
                    name="password"
                    // value={password}
                    value={fishermanData.password}
                    onChange={handleInputChange}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
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
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Gender</FormLabel>
                <Menu size="sm">
                  <MenuButton
                    isActive={selectedGender !== ""}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    // value={gender}
                    value={fishermanData.gender}
                    onChange={handleInputChange}
                  >
                    {selectedGender || "Select gender"}
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => handleGenderSelect("male")}>
                      Male
                    </MenuItem>
                    <MenuItem onClick={() => handleGenderSelect("female")}>
                      Female
                    </MenuItem>
                  </MenuList>
                </Menu>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Birt-Date</FormLabel>
                <Input
                  name="date"
                  value={fishermanData.birth_date}
                  onChange={handleInputChange}
                  type="datetime-local"
                  placeholder="Enter Date"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Menu size="sm">
                  <MenuButton
                    isActive={selectedLoc !== ""}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    {selectedLoc || "Select Location"}
                  </MenuButton>
                  <MenuList>
                    {/* Map Location */}
                    <MenuItem onClick={() => handleLocSelect(1)}>
                      Loc 1
                    </MenuItem>
                    <MenuItem onClick={() => handleLocSelect(2)}>
                      Loc 2
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Textarea
                  mt={2}
                  name="address"
                  placeholder="Input Detail Address"
                />
              </FormControl>
              {/* 
              <FormControl mt={4}>
                <FormLabel>Role</FormLabel>
                <Menu size="sm">
                  <MenuButton
                    isActive={selectedRole !== ""}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    // value={role}
                    value={fishermanData.role}
                    onChange={handleInputChange}
                  >
                    {selectedRole || "Select Role"}
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => handleRoleSelect("Leader")}>
                      Leader
                    </MenuItem>
                    <MenuItem onClick={() => handleRoleSelect("Member")}>
                      Member
                    </MenuItem>
                  </MenuList>
                </Menu>
              </FormControl> */}

              <FormControl mt={4}>
                <FormLabel>Status</FormLabel>
                <Menu size="sm">
                  <MenuButton
                    isActive={selectedStatus !== ""}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    value={fishermanData.status}
                    onChange={handleInputChange}
                  >
                    {selectedStatus || "Select Status"}
                  </MenuButton>
                  <MenuList>
                    {/* Map Location */}
                    <MenuItem onClick={() => handleStatusSelect("Aktif")}>
                      Aktif
                    </MenuItem>
                    <MenuItem onClick={() => handleStatusSelect("Non Active")}>
                      Non Active
                    </MenuItem>
                  </MenuList>
                </Menu>
              </FormControl>
              <FormControl>
                <FormLabel>Experience</FormLabel>
                <InputGroup>
                  <InputLeftAddon children={<EditIcon color="gray.300" />} />
                  <Input
                    name="experience"
                    // value={experience}
                    value={fishermanData.experience}
                    onChange={handleInputChange}
                    type="number"
                  />
                </InputGroup>
              </FormControl>
              <Flex gap={4}>
                <FormControl mt="4">
                  <FormLabel>Photo</FormLabel>
                  <Input
                    type="file"
                    name="image"
                    value={fishermanData.image}
                    onChange={handleInputChange}
                    isFullWidth
                    size="md"
                  />
                </FormControl>
                <FormControl mt="4">
                  <FormLabel>Identify Photo</FormLabel>
                  <Input
                    type="file"
                    name="identity-photo"
                    value={fishermanData.identity_photo}
                    onChange={handleInputChange}
                    isFullWidth
                    size="md"
                  />
                </FormControl>
              </Flex>
              <FormControl mt={4}>
                <FormLabel>NIK</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    // pointerEvents="none"
                    children={<InfoOutlineIcon color="gray.300" />}
                  />
                  <Input
                    type="number"
                    name="nik"
                    value={fishermanData.nik}
                    onChange={handleInputChange}
                    placeholder="Enter NIK"
                  />
                </InputGroup>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" type="submit">
                Edit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      {/* <Td>
         
        </Td> */}
      <AlertDialog
        isOpen={IsOpenDelete}
        leastDestructiveRef={cancelRef}
        onClose={onCloseDelete}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Apakah Anda Yakin Menghapus Nelayan Ini ?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onCloseDelete}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => handleDeleteFisherman(id)}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Tr>
  );
}

export default TableFisherman;
