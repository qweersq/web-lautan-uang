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
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TableFishermanTeam from "components/Tables/TableFishermanTeam";
import TablesTableRow from "components/Tables/TablesTableRow";
import TableTransactionRow from "components/Tables/TableTransactionRow";
import React from "react";

const FishermanTeam = ({ title, captions, data }) => {
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

  const [selectedLoc, setSelectedLoc] = React.useState("");
  const handleLocSelect = (location) => {
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
            <form onSubmit={handleSubmit}>
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Fisherman Team Name</FormLabel>
                  <Input
                    name="name"
                    ref={initialRef}
                    value={transactionData.name}
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
                      placeholder="Enter phone number"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Year Formed</FormLabel>
                  <Input
                    name="yearformed"
                    type="number"
                    placeholder="Enter Year Formed"
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
                  <FormLabel>Balance</FormLabel>
                  <Input
                    name="balance"
                    type="number"
                    placeholder="Enter Balance"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Divident Yield</FormLabel>
                  <Input
                    name="dividentyield"
                    type="number"
                    placeholder="Enter Divident Yield"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Debt To Equity Ratio</FormLabel>
                  <Input
                    name="debequityratio"
                    type="number"
                    placeholder="Enter Debt To Equity Ratio"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Market Cap</FormLabel>
                  <Input
                    name="marketcap"
                    type="number"
                    placeholder="Enter Market Cap"
                  />
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

        {/* Card Table */}
      </CardHeader>

      <InputGroup width="50%">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="blue.300" />}
        />
        <Input placeholder="Find fisherman team" />
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
            {/* <Tr>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
            </Tr> */}

            {data.map((row) => {
              // console.log(row)
              // console.log(row.name)
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
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default FishermanTeam;
