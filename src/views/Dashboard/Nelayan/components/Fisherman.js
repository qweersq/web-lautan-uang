// Chakra imports
import {
  AtSignIcon,
  PhoneIcon,
  SearchIcon,
  UnlockIcon,
  ViewIcon,
  ViewOffIcon,
  EditIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import {
  AddIcon,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
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
  Tr,
  useColorModeValue,
  useDisclosure,
  MenuList,
  MenuItem,
  InputLeftAddon,
  InputRightElement,
  Textarea,
  Box,
  Image,
  TableContainer,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TableFisherman from "components/Tables/TableFisherman";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import { URL_API } from "constant/data";

const Fisherman = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [fishermanData, setFishermanData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(`${URL_API}/api/fisherman`, { headers });
      setFishermanData(response.data.data);
      // console.log(response.data);
      // console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleAddFisherman = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        Status: `OK`,
        Code: 200,
        Accept: `application/json`,
      };
      console.log(newFisherman);

      const response = await axios.post(
        `${URL_API}/api/fisherman`,
        // { ...newFisherman },
        {
          name: newFisherman.name,
          tim_id: newFisherman.tim_id,
          phone: newFisherman.phone,
          email: newFisherman.email,
          password: newFisherman.password,
          gender: newFisherman.gender,
          birth_date: newFisherman.birth_date,
          location_id: newFisherman.location_id,
          status: newFisherman.status,
          experience: newFisherman.experience,
          nik: newFisherman.nik,
          image: newFisherman.image,
          identity_photo: newFisherman.identity_photo,
        },
        { headers }
      );
      console.log(response.data);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Refresh halaman
      window.location.reload();

      // fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const [newFisherman, setNewFisherman] = useState({
    name: "",
    tim_id: 0,
    phone: "",
    email: "",
    password: "",
    gender: "",
    birth_date: "",
    location_id: 0,
    status: "",
    experience: 0,
    nik: "",
    image: "",
    identity_photo: "",
    role: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    event.preventDefault();

    if (name === "tim_id" || name === "location_id" || name === "experience") {
      setNewFisherman((prevFisherman) => ({
        ...prevFisherman,
        [name]: parseInt(value),
      }));
    } else {
      setNewFisherman((prevFisherman) => ({
        ...prevFisherman,
        [name]: value,
      }));
    }
    console.log(newFisherman);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onClose();
  // };

  const [selectedGender, setSelectedGender] = React.useState("");
  const handleGenderSelect = (gender) => {
    setNewFisherman((prevState) => ({
      ...prevState,
      gender: gender,
    }));
    setSelectedGender(gender);
  };

  const [selectedLoc, setSelectedLoc] = React.useState("");
  const handleLocSelect = (location) => {
    setNewFisherman((prevState) => ({
      ...prevState,
      location_id: location,
    }));
    setSelectedLoc(location);
  };

  const [selectedRole, setSelectedRole] = React.useState("");
  const handleRoleSelect = (role) => {
    setNewFisherman((prevState) => ({
      ...prevState,
      role: role,
    }));
    setSelectedRole(role);
  };

  const [selectedStatus, setSelectedStatus] = React.useState("");
  const handleStatusSelect = (status) => {
    setNewFisherman((prevState) => ({
      ...prevState,
      status: status,
    }));
    setSelectedStatus(status);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p="6px 0px 22px 0px">
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          {title}
        </Text>
        <Spacer />
        <Button size="lg" color="blue.600" variant="solid" onClick={onOpen}>
          Add
        </Button>

        {/* Modal */}
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="lg"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Fisherman</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={(e) => handleAddFisherman(e)}>
              <ModalBody pb={10}>
                <Flex gap={5}>
                  <FormControl>
                    <FormLabel>Fisherman Team</FormLabel>
                    <Input
                      name="tim_id"
                      placeholder="Input Fisherman Team"
                      type="number"
                      value={newFisherman.tim_id}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Fisherman Name</FormLabel>
                    <Input
                      name="name"
                      placeholder="Input Fisherman Name"
                      value={newFisherman.name}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Flex>

                <FormControl mt={4}>
                  <FormLabel>Phone</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      children={<PhoneIcon color="gray.300" />}
                    />
                    <Input
                      type="tel"
                      name="phone"
                      value={newFisherman.phone}
                      placeholder="Enter phone number"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Account</FormLabel>
                  <InputGroup>
                    <InputLeftAddon
                      children={<AtSignIcon color="gray.300" />}
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      value={newFisherman.email}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup mt={2}>
                    <InputLeftAddon
                      children={<UnlockIcon color="gray.300" />}
                    />
                    <Input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={newFisherman.password}
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
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Gender</FormLabel>
                  <Menu size="sm">
                    <MenuButton
                      isActive={selectedGender !== ""}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      name="gender"
                      value={newFisherman.gender}
                      onChange={handleChange}
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
                    name="birth_date"
                    type="datetime-local"
                    value={newFisherman.birth_date}
                    onChange={handleChange}
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
                      name="location_id"
                      value={newFisherman.location_id}
                      onChange={handleChange}
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
                    // value = {newFisherman.add}
                    // onChange={handleChange}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Role</FormLabel>
                  <Menu size="sm">
                    <MenuButton
                      isActive={selectedRole !== ""}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      name="role"
                      value={newFisherman.role}
                      onChange={handleChange}
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
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Status</FormLabel>
                  <Menu size="sm">
                    <MenuButton
                      isActive={selectedStatus !== ""}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      name="status"
                      value={newFisherman.status}
                      onChange={handleChange}
                    >
                      {selectedStatus || "Select Status"}
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => handleStatusSelect("aktif")}>
                        Aktif
                      </MenuItem>
                      <MenuItem onClick={() => handleStatusSelect("Non Aktif")}>
                        Non Aktif
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
                      type="number"
                      value={newFisherman.experience}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormControl>
                <Flex gap={4}>
                  <FormControl mt="4">
                    <FormLabel>Photo</FormLabel>
                    <Input
                      type="file"
                      name="image"
                      value={newFisherman.image}
                      onChange={handleChange}
                      isFullWidth
                      size="md"
                    />
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Identify Photo</FormLabel>
                    <Input
                      type="file"
                      name="identity_photo"
                      isFullWidth
                      value={newFisherman.identity_photo}
                      onChange={handleChange}
                      size="md"
                    />
                  </FormControl>
                </Flex>
                <FormControl mt={4}>
                  <FormLabel>NIK</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<InfoOutlineIcon color="gray.300" />}
                    />
                    <Input
                      type="text"
                      name="nik"
                      value={newFisherman.nik}
                      onChange={handleChange}
                      placeholder="Enter NIK"
                    />
                  </InputGroup>
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="blue"
                  type="button"
                  onClick={handleAddFisherman}
                >
                  Add
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </CardHeader>

      <TableContainer>
        <InputGroup width="50%">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="blue.300" />}
          />
          <Input placeholder="Find fisherman" />
        </InputGroup>

        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                {captions.map((caption, idx) => {
                  return (
                    <Th
                      color="gray.400"
                      key={idx}
                      ps={idx === 0 ? "0px" : null}
                    >
                      {caption}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {fishermanData ? (
                fishermanData.map((fisherman) => (
                  <TableFisherman
                    key={fisherman.id}
                    id = {fisherman.id}
                    tim_id={fisherman.tim_id}
                    name={fisherman.name}
                    phone={fisherman.phone}
                    email={fisherman.email}
                    location_id={fisherman.location_id}
                    address={fisherman.address}
                    gender={fisherman.gender}
                    role={fisherman.role}
                    logo={fisherman.logo}
                    photo={fisherman.identity_photo}
                    password={fisherman.password}
                    nik = {fisherman.nik}
                    birth_date = {fisherman.birth_date}
                    status={fisherman.status}
                    // date={row.date}
                  />
                ))
              ) : (
                <p>Loading...</p>
              )}
            </Tbody>
          </Table>
        </CardBody>
      </TableContainer>
    </Card>
  );
};

export default Fisherman;
