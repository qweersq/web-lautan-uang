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
} from "@chakra-ui/react";
import React from "react";

function TableFisherman(props) {
  const {
    tim_id,
    name,
    phone,
    email,
    password,
    gender,
    birth_date,
    address,
    role,
    location_id,
    status,
    experience,
    nik,
    photo,
    identity_photo,
  } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: IsOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const cancelRef = React.useRef();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [transactionData, editTransactionData] = React.useState({
    fisherman_team: "",
    investor: "",
    quantity: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    editTransactionData((prevState) => ({
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
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={photo} w="50px" borderRadius="12px" me="18px" />
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
          bg={"blue.400"}
          color={"white"}
          fontSize="15px"
          p="3px 10px"
          borderRadius="8px"
          m={1}
        >
          {tim_id}
        </Badge>
        <Text fontSize="sm"  bg="gray.300" p="3px 10px"  borderRadius="8px" fontWeight="bold" fontSize="12px">
          {location_id}
        </Text>
        {/* </Flex> */}
      </Td>

      <Td>
        {/* <Flex direction="column"> */}
        <Badge
          bg={"blue.400"}
          color={"white"}
          fontSize="15px"
          p="3px 10px"
          borderRadius="8px"
          m={1}
        >
          {address}
        </Badge>
        <Text fontSize="sm" bg="gray.300" p="3px 10px"  borderRadius="8px" fontWeight="bold" fontSize="12px">
          {phone}
        </Text>
        {/* </Flex> */}
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {gender}
        </Text>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {role}
        </Text>
      </Td>
      <Td>
        <Badge
          bg={status === "Active" ? "green.400" : bgStatus}
          color={status === "Active" ? "white" : colorStatus}
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
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <Flex gap={5}>
                <FormControl>
                  <FormLabel>Fisherman Team</FormLabel>
                  <Input name="team-name" placeholder="Input Fisherman Team" />
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
                    // value={transactionData.amount}
                    // onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                </InputGroup>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Account</FormLabel>
                <InputGroup>
                  <InputLeftAddon children={<AtSignIcon color="gray.300" />} />
                  <Input name="email" type="email" placeholder="Enter Email" />
                </InputGroup>
                <InputGroup mt={2}>
                  <InputLeftAddon children={<UnlockIcon color="gray.300" />} />
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
              <Button colorScheme="red" onClick={onCloseDelete} ml={3}>
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
