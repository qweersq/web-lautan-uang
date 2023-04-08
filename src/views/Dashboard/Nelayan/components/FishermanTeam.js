// Chakra imports
import { SearchIcon } from "@chakra-ui/icons";
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
  useColorModeValue,
  useDisclosure,
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
            <ModalHeader>Add Transaction</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit}>
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Fisherman Team</FormLabel>
                  <Input
                    name="name"
                    ref={initialRef}
                    value={transactionData.name}
                    onChange={handleChange}
                    placeholder="Enter transaction fisherman team name"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Amount</FormLabel>
                  <Input
                    name="amount"
                    value={transactionData.amount}
                    onChange={handleChange}
                    placeholder="Enter transaction amount"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Date</FormLabel>
                  <Input
                    name="date"
                    value={transactionData.date}
                    onChange={handleChange}
                    placeholder="Enter transaction date"
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

      <InputGroup   width="50%">
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
            {data.map((row) => {
              console.log(row)
              return (
                <TableFishermanTeam
                  data={row}
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
