// Chakra imports
import {
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
    Td,
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
  import React from "react";
  import { AddIcon } from "@chakra-ui/icons";
  
  const AnimalType = ({ title, captions, data }) => {
    const textColor = useColorModeValue("gray.700", "white");
  
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
  
    const {
      isOpen: isOpenEdit,
      onOpen: onOpenEdit,
      onClose: onCloseEdit,
    } = useDisclosure();
  
    const {
      isOpen: isOpenDelete,
      onOpen: onOpenDelete,
      onClose: onCloseDelete,
    } = useDisclosure();
  
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
  
    const handleEdit = (rowData) => {
      // Lakukan logika penyuntingan data
      console.log("Edit data:", rowData);
      onOpenEdit();
    };
  
    const handleDelete = (rowData) => {
      // Lakukan logika penghapusan data
      console.log("Delete data:", rowData);
      onOpenDelete();
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
  
          {/* Modal Add Animal Type*/}
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size="lg"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Animal Type</ModalHeader>
              <ModalCloseButton />
              <form onSubmit={handleSubmit}>
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Animal Type Name</FormLabel>
                    <Input name="animal_type" placeholder="Enter Animal Type" />
                  </FormControl>
  
                  <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Input name="description" placeholder="Enter Desc" />
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
          {/* Modal Add Animal Type*/}
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
              <Tbody mt={2}>
                {data.map((row) => {
                  return (
                    <Tr key={row.id}>
                      <Td minWidth={{ sm: "20px" }} pl="0px">
                        {row.animal_type}
                      </Td>
                      <Td m={0}>{row.description}</Td>
                      <Td>
                        <Button
                          my={1}
                          bg="yellow.300"
                          onClick={() => handleEdit(row)}
                        >
                          Edit
                        </Button>
                        <br />
                        <Button
                          my={1}
                          bg="red.300"
                          onClick={() => handleDelete(row)}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
        </TableContainer>
        {/* Modal Edit Animal Type */}
        <Modal
          isOpen={isOpenEdit}
          onClose={onCloseEdit}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          size="lg"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Animal Type</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit}>
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Animal Type Name</FormLabel>
                  <Input
                    name="animal_type"
                    placeholder="Enter Animal Type"
                    defaultValue={transactionData.name} // Isi dengan data yang ingin disunting
                    onChange={handleChange}
                  />
                </FormControl>
  
                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Input
                    name="description"
                    placeholder="Enter Desc"
                    defaultValue={transactionData.amount} // Isi dengan data yang ingin disunting
                    onChange={handleChange}
                  />
                </FormControl>
              </ModalBody>
  
              <ModalFooter>
                <Button variant="ghost" mr={3} onClick={onCloseEdit}>
                  Cancel
                </Button>
                <Button colorScheme="blue" type="submit">
                  Save
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
        {/* Modal Edit Animal Type */}
        {/* Modal Delete Animal Type */}
        <Modal isOpen={isOpenDelete} onClose={onCloseDelete} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Animal Type</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Text>Are you sure you want to delete this animal type?</Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onCloseDelete}>
                Cancel
              </Button>
              <Button colorScheme="red">Delete</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* Modal Delete Animal Type */}
      </Card>
    );
  };
  
  export default AnimalType;
  