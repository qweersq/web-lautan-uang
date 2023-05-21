// Chakra imports
import {
  AtSignIcon,
  PhoneIcon,
  SearchIcon,
  UnlockIcon,
  ViewIcon,
  ViewOffIcon,
  EditIcon,
  InfoOutlineIcon
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
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TableFisherman from "components/Tables/TableFisherman";
import TableFishermanTeam from "components/Tables/TableFishermanTeam";
import TablesTableRow from "components/Tables/TablesTableRow";
import TableTransactionRow from "components/Tables/TableTransactionRow";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Fisherman = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [transactionData, setTransactionData] = React.useState({
    name: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransactionData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(transactionData); // contoh, untuk sementara hanya menampilkan data pada console
    onClose();
  };

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
            <form onSubmit={handleSubmit}>
              <ModalBody pb={10}>
                <Flex gap={5}>
                  <FormControl>
                    <FormLabel>Fisherman Team</FormLabel>
                    <Input
                      name="team-name"
                      placeholder="Input Fisherman Team"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Fisherman Name</FormLabel>
                    <Input name="name" placeholder="Input Fisherman Name" />
                  </FormControl>
                </Flex>

                <FormControl mt={4}>
                  <FormLabel>Phone</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<PhoneIcon color="gray.300" />}
                    />
                    <Input
                      type="tel"
                      name="phone"
                      value={transactionData.amount}
                      onChange={handleChange}
                      placeholder="Enter phone number"
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
                    >
                      {selectedGender || "Select gender"}
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => handleGenderSelect("Male")}>
                        Male
                      </MenuItem>
                      <MenuItem onClick={() => handleGenderSelect("Female")}>
                        Female
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Birt-Date</FormLabel>
                  <Input
                    name="date"
                    type="datetime-local"
                    value={transactionData.date}
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
                    >
                      {selectedLoc || "Select Location"}
                    </MenuButton>
                    <MenuList>
                      {/* Map Location */}
                      <MenuItem onClick={() => handleLocSelect("Loc 1")}>
                        Loc 1
                      </MenuItem>
                      <MenuItem onClick={() => handleLocSelect("Loc 2")}>
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
                  <FormControl mt={4}>
                    <FormLabel>Role</FormLabel>
                    <Menu size="sm">
                      <MenuButton
                        isActive={selectedRole !== ""}
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                      >
                        {selectedRole || "Select Role"}
                      </MenuButton>
                      <MenuList>
                        {/* Map Location */}
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
                    <Input name="experience" type="number" />
                  </InputGroup>
                </FormControl>
                <Flex gap={4}>
                  <FormControl mt="4">
                    <FormLabel>Photo</FormLabel>
                    <Input type="file" name="photo" isFullWidth size="md" />
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Identify Photo</FormLabel>
                    <Input
                      type="file"
                      name="identify-photo"
                      isFullWidth
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
                      type="number"
                      name="nik"
                      value={transactionData.amount}
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
                <Button colorScheme="blue" type="submit">
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

      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px" color="gray.400">
              {captions.map((caption, idx) => {
                return (
                  <Th color="gray.400" key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => {
              return (
                <TableFisherman
                  key={`${row.email}-${row.name}`}
                  name = {row.name}
                  location_id = {row.location_id}
                  address = {row.address}
                  gender = {row.gender}
                  phone = {row.phone}
                  role = {row.role}
                  tim_id={row.tim_id}
                  logo={row.logo}
                  email={row.email}
                  subdomain={row.subdomain}
                  domain={row.domain}
                  status={row.status}
                  date={row.date}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Fisherman;
