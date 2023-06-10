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
  ExternalLinkIcon,
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
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_API } from "constant/data";
// import { token } from "stylis";
import Swal from "sweetalert2";

export default function TableFishermanTeam(props) {
  const {
    id,
    name,
    phone,
    year_formed,
    address,
    location,
    location_id,
    balance,
    quantity,
    total_assets,
    divident_yield,
    debt_to_equity_ratio,
    market_cap,
    location_data,
    fisherman_total,
  } = props;

  const textColor = useColorModeValue("gray.700", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const cancelRef = React.useRef();
  const navigate = useHistory();

  const {
    isOpen: IsOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const {
    isOpen: IsOpenDetail,
    onOpen: onOpenDetail,
    onClose: onCloseDetail,
  } = useDisclosure();

  useEffect(() => {
    // fetchLocation();
  }),
    [];

  const [newFishermanTeam, setNewFishermanTeam] = useState({
    name: props.name,
    phone: props.phone,
    year_formed: props.year_formed,
    address: props.address,
    location_id: props.location_id,
    location_name: "",
    balance: props.balance, // Add the missing property if necessary
    quantity: props.quantity,
    total_assets: props.total_assets,
    divident_yield: props.divident_yield,
    debt_to_equity_ratio: props.debt_to_equity_ratio,
    market_cap: props.market_cap,
  });
  const [locationData, setLocationData] = useState(null);

  // const fetchLocation = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //     };

  //     const response = await axios.get(`${URL_API}/api/location`, { headers });
  //     // console.log(response.data.data);
  //     setLocationData(response.data.data);
  //     // console.log(locationData);
  //     e.preventDefault();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleEdit = async (id) => {
    try {
      // e.preventDefault();
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        `${URL_API}/api/fisherman-tim/${id}`,
        {
          name: newFishermanTeam.name,
          phone: newFishermanTeam.phone,
          year_formed: newFishermanTeam.year_formed,
          address: newFishermanTeam.address,
          balance: newFishermanTeam.balance,
          location_id: newFishermanTeam.location_id,
          quantity: newFishermanTeam.quantity,
          total_assets: newFishermanTeam.total_assets,
          divident_yield: newFishermanTeam.divident_yield,
          debt_to_equity_ratio: newFishermanTeam.debt_to_equity_ratio,
          market_cap: newFishermanTeam.market_cap,
        },
        { headers }
      );
      onClose();
      Swal.fire({
        title: "Good Job!",
        text: `Success Edit Fisherman`,
        icon: "success",
        confirmButtonText: "Ok",
      });

      setTimeout(() => {
        window.location.reload();
      }, 5000);
      // window.location.reload();
    } catch (error) {
      const errMes = JSON.stringify(error.response.data.message);
      onClose();
      Swal.fire({
        // position: "top-end",
        title: `Oopss..`,
        text: `${errMes}`,
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.delete(
        `${URL_API}/api/fisherman-tim/${id}`,
        { headers }
      );

      onCloseDelete();
      Swal.fire({
        title: "Delete!",
        text: `Success Delete Fisherman Team`,
        icon: "success",
        confirmButtonText: "Ok",
      });

      await new Promise((r) => setTimeout(r, 500));
      window.location.reload();
    } catch (error) {
      const errMes = JSON.stringify(error.response.data.message);
      onCloseDelete();
      Swal.fire({
        // position: "top-end",
        title: `Oopss..`,
        text: `${errMes}`,
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    event.preventDefault();

    setNewFishermanTeam((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(newFishermanTeam);
  };

  const [selectedLoc, setSelectedLoc] = React.useState("");
  const handleLocSelect = (id, kecName) => {
    setNewFishermanTeam((prevState) => ({
      ...prevState,
      location_id: id,
      location_name: kecName,
    }));
    // setSelectedLoc(location);
  };

  const handleDetailFishermanTeam = () => {
    // const linkToDetail = `/admin/detail-fisherman/1`;
    navigate.push("/admin/detail-fisherman/1");
  };

  return (
    <Tr>
      <Td p={0}>
        <Flex direction="column" justifyContent="flex-start" alignItems="start">
          <Button
            variant="link"
            size="lg"
            // onClick={() => handleDetailFishermanTeam()}
          >
            <Link to={`/admin/detail-fisherman/${id}`}>
            {name} <ExternalLinkIcon mx="2px" />
            </Link>
          </Button>
          <Badge
            colorScheme="blue"
            fontSize="17px"
            my="3px"
            p="5px"
            borderRadius="8px"
          >
            Total Anggota : {fisherman_total}
          </Badge>
          {/* </Text> */}
        </Flex>
      </Td>
      <Td>
        <Badge colorScheme="blue" fontSize="20px" p="5px" borderRadius="8px">{year_formed}</Badge>
      </Td>
      <Td>{phone}</Td>
      <Td>
        <Text as="b">{location}</Text>
        <Text>{address}</Text>
      </Td>
      <Td>
        <Flex flexDirection="column" gap={2}>
          <Tr>
            <Text>
              Balance : <Badge>{balance}</Badge>
            </Text>
          </Tr>
          <Tr>
            <Text>
              Quantity : <Badge>{quantity}</Badge>
            </Text>
          </Tr>
          <Tr>
            <Text>
              Divident : <Badge>{divident_yield}</Badge>
            </Text>
          </Tr>
          <Tr>
            <Text>
              Debt Equity Ratio : <Badge>{debt_to_equity_ratio}</Badge>
            </Text>
          </Tr>
          <Tr>
            <Text>
              Market Cap : <Badge>{market_cap}</Badge>
            </Text>
          </Tr>
        </Flex>
      </Td>
      {/* <Td>{quantity}</Td>
      <Td>{total_assets}</Td>
      <Td>{divident_yield}</Td>
      <Td>{debt_to_equity_ratio}</Td>
      <Td>{market_cap}</Td> */}
      <Td>
        <Button
          p="0px"
          w="20"
          size="md"
          bg="yellow.300"
          variant="ghost"
          onClick={() => onOpen(id)}
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
          <ModalHeader>Edit Fisherman Team</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={(e) => handleEdit(e)}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Fisherman Team Name</FormLabel>
                <Input
                  name="name"
                  ref={initialRef}
                  value={newFishermanTeam.name}
                  onChange={handleChange}
                  placeholder="Enter New Fisherman Team Name"
                />
              </FormControl>

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
                    placeholder="Enter New Phone Number"
                    value={newFishermanTeam.phone}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Year Formed</FormLabel>
                <Input
                  name="year_formed"
                  type="number"
                  placeholder="Enter Year Formed"
                  value={newFishermanTeam.year_formed}
                  onChange={handleChange}
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
                    value={newFishermanTeam.location_id}
                    onChange={handleChange}
                  >
                    {newFishermanTeam.location_name || "Select Location"}
                  </MenuButton>
                  <MenuList>
                    {location_data ? (
                      location_data.map((loc) => {
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
                <Textarea
                  mt={2}
                  name="address"
                  placeholder="Input Detail Address"
                  value={newFishermanTeam.address}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Balance</FormLabel>
                <Input
                  name="balance"
                  type="number"
                  placeholder="Enter Balance"
                  value={newFishermanTeam.balance}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Divident Yield</FormLabel>
                <Input
                  name="divident_yield"
                  type="number"
                  placeholder="Enter Divident Yield"
                  value={newFishermanTeam.divident_yield}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Debt To Equity Ratio</FormLabel>
                <Input
                  name="debt_to_equity_ratio"
                  type="number"
                  placeholder="Enter Debt To Equity Ratio"
                  value={newFishermanTeam.debt_to_equity_ratio}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Market Cap</FormLabel>
                <Input
                  name="market_cap"
                  type="number"
                  placeholder="Enter Market Cap"
                  value={newFishermanTeam.market_cap}
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                type="submit"
                onClick={() => handleEdit(id)} // Tambahkan baris ini
              >
                Edit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      <AlertDialog
        isOpen={IsOpenDelete}
        leastDestructiveRef={cancelRef}
        onClose={onCloseDelete}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Fisherman Team
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete Fisherman Team?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onCloseDelete}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={() => handleDelete(id)} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Tr>
  );
}
