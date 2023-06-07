// Chakra imports
import { SearchIcon, PhoneIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  AddIcon,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
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
  Td,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Textarea,
  TableContainer,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TableFishermanTeam from "components/Tables/TableFishermanTeam";
import TablesTableRow from "components/Tables/TablesTableRow";
import TableTransactionRow from "components/Tables/TableTransactionRow";
import React, { useEffect, useState } from "react";
import { URL_API } from "constant/data";
import axios from "axios";
import Swal from "sweetalert2";

const FishermanTeam = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  //! STATE
  const [fishermanTeamData, setFishermanTeamData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [newFishermanTeam, setNewFishermanTeam] = useState({
    name: "",
    phone: "",
    year_formed: 2001,
    address: "",
    balance: 1000,
    location_id: 0,
    location_name: "", // Apa bila dibutuhkan
    quantity: 0,
    total_assets: 4000,
    divident_yield: 0,
    debt_to_equity_ratio: 0,
    market_cap: 3000000000,
  });

  //! HOOK
  useEffect(() => {
    fetchData();
  }, []);

  //! FETCH DATA
  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const [fishermanTeamResponse, locationResponse] = await Promise.all([
        axios.get(`${URL_API}/api/fisherman-tim`, { headers }),
        axios.get(`${URL_API}/api/location`, { headers }),
      ]);
      setFishermanTeamData(fishermanTeamResponse.data.data);
      setLocationData(locationResponse.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Handler Function
  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();

    if (
      name === "year_formed" ||
      name === "balance" ||
      name === "location_id" ||
      name === "quantity" ||
      name === "total_assets" ||
      name === "divident_yield" ||
      name === "market_cap"
    ) {
      setNewFishermanTeam((prevFisherman) => ({
        ...prevFisherman,
        [name]: parseInt(value),
      }));
    } else {
      setNewFishermanTeam((prevFisherman) => ({
        ...prevFisherman,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        Status: `OK`,
        Code: 200,
        Accept: `application/json`,
      };

      const { location_name, ...newFishermanTeamWithoutLocationName } = newFishermanTeam;
      const response = await axios.post(
        `${URL_API}/api/fisherman-tim`,
        { ...newFishermanTeamWithoutLocationName },
        { headers }
      );
      onClose();
      Swal.fire({
        title: "Good Job!",
        text: `Success Add Fisherman Team`,
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
          // position: "top-end",
          title: `Oopss..`,
          text: `${errMes}`,
          icon: "error",
          confirmButtonText: "OK",
        });
        // window.location.reload();
        // console.log(error.request)
      } else {
        // console.error(error.response);
        // console.error(error);
        onClose();
        Swal.fire({
          position: "top-end",
          title: "Error!",
          text: `${error}`,
          icon: "error",
          confirmButtonText: "Ok",
        });
        // window.location.reload();
        // onClose();
      }
    }
  };

  const [selectedLoc, setSelectedLoc] = React.useState("");
  const handleLocSelect = (id, kecName) => {
    setNewFishermanTeam((prevState) => ({
      ...prevState,
      location_id: id,
      location_name: kecName,
    }));
    setSelectedLoc(location);
  };
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }} mt={2}>
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
            <ModalHeader>Add New Fisherman Team</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={(e) => handleSubmit(e)}>
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
                      value={newFishermanTeam.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
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
                  <FormLabel>Address/Location</FormLabel>
                   <Menu size="sm">
                    <MenuButton
                      isActive={selectedLoc !== ""}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      name = "location_id"
                      value = {newFishermanTeam.location_id}
                      onChange= {handleChange}
                    >
                      {newFishermanTeam.location_name || "Select Location"}
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
                  <Textarea
                    mt={2}
                    name="address"
                    placeholder="Input Detail Address"
                    onChange={handleChange}
                    value={newFishermanTeam.address}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Balance</FormLabel>
                  <Input
                    name="balance"
                    type="number"
                    placeholder="Enter Balance"
                    onChange={handleChange}
                    value={newFishermanTeam.balance}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Divident Yield</FormLabel>
                  <Input
                    name="divident_yield"
                    type="number"
                    placeholder="Enter Divident Yield"
                    onChange={handleChange}
                    value={newFishermanTeam.divident_yield}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Debt To Equity Ratio</FormLabel>
                  <Input
                    name="debt_to_equity_ratio"
                    type="number"
                    placeholder="Enter Debt To Equity Ratio"
                    onChange={handleChange}
                    value={newFishermanTeam.debt_to_equity_ratio}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Market Cap</FormLabel>
                  <Input
                    name="market_cap"
                    type="number"
                    placeholder="Enter Market Cap"
                    onChange={handleChange}
                    value={newFishermanTeam.market_cap}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button variant="ghost" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue" type="button" onClick={handleSubmit}>
                  Add
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>

        {/* Card Table */}
      </CardHeader>

      <InputGroup width="50%">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="blue.300" />}
        />
        <Input placeholder="Find fisherman team" />
      </InputGroup>

      <TableContainer>
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
              {fishermanTeamData ? (
                fishermanTeamData.map((row) => (
                  <TableFishermanTeam
                    key = {row.id}
                    id = {row.id}
                    name={row.name}
                    phone={row.phone}
                    yearFormed={row.year_formed}
                    address={row.address}
                    location={row.location_id}
                    balance={row.balance}
                    quantity={row.quantity}
                    totalAssets={row.total_assets}
                    dividentYield={row.divident_yield}
                    debt_to_equity_ratio={row.debt_to_equity_ratio}
                    marketCap={row.market_cap}
                  />
                ))
              ) : (
                <p>Loading...</p>
              )}
              {/* {data.map((row) => {
              return (
                <TableFishermanTeam
                  name={row.name}
                  phone={row.phone}
                  yearFormed={row.year_formed}
                  address={row.address}
                  location={row.location_id}
                  balance={row.balance}
                  quantity={row.quantity}
                  totalAssets={row.total_assets}
                  dividentYield={row.divident_yield}
                  debt_to_equity_ration={row.debt_to_equity_ration}
                  marketCap={row.market_cap}
                />
              );
            })} */}
            </Tbody>
          </Table>
        </CardBody>
      </TableContainer>
    </Card>
  );
};

export default FishermanTeam;
