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
  Select,
  TableContainer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
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
import Swal from "sweetalert2";

const Fisherman = ({ title, captions, data }) => {
  // ColorMode
  const textColor = useColorModeValue("gray.700", "white");

  // helpModal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  // State
  const [fishermanData, setFishermanData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [newFisherman, setNewFisherman] = useState({
    name: "",
    tim_id: 0,
    tim_name: "",
    phone: "",
    email: "",
    password: "",
    gender: "",
    birth_date: "",
    location_id: 0,
    location_name: "",
    status: "",
    experience: 0,
    nik: "",
    image: "",
    identity_photo: "",
    role: "",
  });

  // Hook
  useEffect(() => {
    fetchData();
    fetchLocation();
    fetchFishermanTeam();
  }, []);

  // Request Api
  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(`${URL_API}/api/fisherman`, { headers });
      setFishermanData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  const fetchLocation = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(`${URL_API}/api/location`, { headers });
      // console.log(response.data.data);
      setLocationData(response.data.data);
      // console.log(locationData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFishermanTeam = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(`${URL_API}/api/fisherman-tim`, {
        headers,
      });
      setFishermanTeamData(response.data.data);
      // console.log(fishermanTeamData)
    } catch (error) {
      console.log(error);
    }
  };

  //! HANDLEERR
  const handleAddFisherman = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        // Status: `OK`,
        // Code: 200,
        // Accept: `application/json`,
      };

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
      onClose();
      Swal.fire({
        title: "Good Job!",
        text: `Success Add Fisherman`,
        icon: "success",
        confirmButtonText: "Ok",
      });

      await new Promise((r) => setTimeout(r, 500));
      window.location.reload();
    } catch (error) {
      if (error.response) {
        onClose();
        const errMes = JSON.stringify(error.response.data.message);
        Swal.fire({
          position: "top-end",
          title: `Oopss..`,
          text: `${errMes}`,
          icon: "error",
          confirmButtonText: "OK",
        });
        // console.log(error.request)
      } else {
        // console.error(error.response);
        // console.error(error);
        Swal.fire({
          position: "top-end",
          title: "Error!",
          text: `${error}`,
          icon: "error",
          confirmButtonText: "Ok",
        });
        // onClose();
      }
    }
  };

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

  const [fishermanTeamData, setFishermanTeamData] = useState(null);
  const handleTimSelect = (id, name) => {
    setNewFisherman((prevState) => ({
      ...prevState,
      tim_id: id,
      tim_name: name,
    }));
    // console.log(tim);
    // setSelectedGender(gender);
  };

  const [selectedGender, setSelectedGender] = React.useState("");
  const handleGenderSelect = (gender) => {
    setNewFisherman((prevState) => ({
      ...prevState,
      gender: gender,
    }));
    setSelectedGender(gender);
  };

  const [selectedLoc, setSelectedLoc] = React.useState("");
  const handleLocSelect = (id, kecName) => {
    setNewFisherman((prevState) => ({
      ...prevState,
      location_id: id,
      location_name: kecName,
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
                  <FormControl isRequired>
                    <FormLabel>Fisherman Team</FormLabel>
                    <Menu size="sm">
                      <MenuButton
                        // isActive={selectedLoc !== ""}
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        name="tim_id"
                        value={newFisherman.location_id}
                        onChange={handleChange}
                      >
                        {newFisherman.tim_name || "Select Fisherman Team"}
                      </MenuButton>
                      <MenuList>
                        {fishermanTeamData ? (
                          fishermanTeamData.map((e) => {
                            return (
                              <MenuItem
                                onClick={() => handleTimSelect(e.id, e.name)}
                              >
                                {e.name}
                              </MenuItem>
                            );
                          })
                        ) : (
                          <p>Loading...</p>
                        )}
                      </MenuList>
                    </Menu>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Fisherman Name</FormLabel>
                    <Input
                      name="name"
                      placeholder="Input Fisherman Name"
                      value={newFisherman.name}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                </Flex>

                <FormControl mt={4} isRequired>
                  <FormLabel>Phone</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children={<PhoneIcon color="gray.300" />} />
                    <Input
                      type="tel"
                      name="phone"
                      value={newFisherman.phone}
                      placeholder="Enter phone number"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl mt={4} isRequired>
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

                <FormControl mt={4} isRequired>
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

                <FormControl mt={4} isRequired>
                  <FormLabel>Birt-Date</FormLabel>
                  <Input
                    name="birth_date"
                    type="date"
                    value={newFisherman.birth_date}
                    onChange={handleChange}
                    placeholder="Enter Date"
                    isRequired
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Address / Location</FormLabel>
                  <Menu size="sm">
                    <MenuButton
                      isActive={selectedLoc !== ""}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      name="location_id"
                      value={newFisherman.location_id}
                      onChange={handleChange}
                    >
                      {newFisherman.location_name || "Select Location"}
                    </MenuButton>
                    <MenuList>
                      {locationData ? (
                        locationData.map((loc) => {
                          return (
                            <MenuItem
                              onClick={() =>
                                handleLocSelect(loc.id, loc.kecamatan_name)
                              }
                            >
                              {loc.kecamatan_name}
                            </MenuItem>
                          );
                        })
                      ) : (
                        <p>Loading...</p>
                      )}
                    </MenuList>
                  </Menu>
                </FormControl>
                <FormControl mt={4} isRequired>
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
                      <MenuItem onClick={() => handleStatusSelect("non-aktif")}>
                        Non Aktif
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Experience</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children={<EditIcon color="gray.300" />} />
                    <Input
                      name="experience"
                      type="number"
                      defaultValue={newFisherman.experience}
                      // value={newFisherman.experience}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormControl>
                <Flex gap={4}>
                  <FormControl mt="4" isRequired>
                    <FormLabel>Image</FormLabel>
                    <Input
                      type="file"
                      name="image"
                      accept="image/jpeg, image/png, image/png"
                      value={newFisherman.image}
                      onChange={handleChange}
                      isFullWidth
                      size="md"
                    />
                  </FormControl>
                  <FormControl mt="4" isRequired>
                    <FormLabel>Identity Photo</FormLabel>
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
                <FormControl mt={4} isRequired>
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

      <InputGroup width="50%">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="blue.300" />}
        />
        <Input placeholder="Find fisherman" />
      </InputGroup>

      <TableContainer>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my="0.8rem" pl="0px" color="gray.400">
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
                fishermanData.map((row) => {
                  return (
                    <TableFisherman
                      key={row.id}
                      id={row.id}
                      image={row.image}
                      name={row.name}
                      email={row.email}
                      team_name={row.team_name}
                      city={row.city}
                      location={row.location}
                      phone={row.phone}
                      gender={row.gender}
                      status={row.status}
                    />
                  );
                })
              ) : (
                <p>Loading</p>
              )}
            </Tbody>
          </Table>
        </CardBody>
      </TableContainer>
    </Card>
  );
};

export default Fisherman;
