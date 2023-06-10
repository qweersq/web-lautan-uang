// Chakra imports
import {
  AddIcon,
  Button,
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
  TableContainer,
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
import TableFishermanCatch from "components/Tables/TableFishermanCatch";
import TablesTableRow from "components/Tables/TablesTableRow";
import TableTransactionRow from "components/Tables/TableTransactionRow";
import React from "react";
import { fishermanTeamCatchDetail } from "variables/general";

const FishermanCatch = ({ title, captions, data }) => {
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
                  <FormLabel>Fisherman Team Name</FormLabel>
                  <Input
                    name="name"
                    // ref={initialRef}
                    // value={transactionData.name}
                    // onChange={handleChange}
                    placeholder="Enter fisherman team name"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel> Weight</FormLabel>
                  <Input
                    name="weight"
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
            <Tbody mt={4}>
              {data.map((row) => {
                // console.log(data)
                return (
                  <TableFishermanCatch
                    // key={`${row.name}`}
                    captions = {[
                      "Name",
                      "Animal-type",
                      "Price",
                    ]}
                  // fishing_cath_id = {}
                  date= {row.date}
                    name={row.name}
                    weight = {row.weight}
                    key={row.id}
                    // dataFishCatch = {fishermanTeamCatchDetail}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </TableContainer>
    </Card>
  );
};

export default FishermanCatch;
