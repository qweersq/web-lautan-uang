import { DeleteIcon, EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
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
  Link,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import React from "react";
import { fishermanTeamCatchDetail } from "variables/general";

function TableFishermanCatch(props) {
  const { logo, name, weight, dataFishCatch, captions, date } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const cancelRef = React.useRef();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [, edit] = React.useState({
    fisherman_team: "",
    investor: "",
    quantity: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    edit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(); // contoh, untuk sementara hanya menampilkan data pada console
    onClose();
  };

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
          <Flex direction="column">
            <Button variant="link" size="lg" onClick={onOpenDetail}>
              {date} <ExternalLinkIcon mx="2px" />
            </Button>
          </Flex>
        </Flex>
      </Td>

      {/* Modal DetailCatch */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={IsOpenDetail}
        onClose={onCloseDetail}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fisherman Catch Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* <FormControl>
              <FormLabel fontWeight="bold">Fisherman Team</FormLabel>
              <Input name="name" value={name} variant="filled" />
            </FormControl> */}

            <FormControl my={2}>
              <FormLabel fontWeight="bold">Weight</FormLabel>
              <InputGroup>
                <Input name="weight" variant="filled" value={weight} />
                <InputRightAddon children="kg" bgColor="gray.400" />
              </InputGroup>
            </FormControl>
            <Table variant="striped" colorScheme="gray">
              <Thead>
                <Tr fontWeight="bold">Fisherman Catch Detail</Tr>
                {captions.map((caption) => {
                  return <Th>{caption}</Th>;
                })}
              </Thead>
              <Tbody>
                {fishermanTeamCatchDetail.map((row) => {
                  return (
                    <Tr>
                      <Td>{row.name}</Td>
                      <Td>{row.animal_type}</Td>
                      <Td>{row.price}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
            <FormControl my={4}>
              <FormLabel fontWeight="bold">Date</FormLabel>
              <Input
                name="date"
                // type="datetime-local"
                variant="filled"
                value="01-04-2023"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onCloseDetail}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Modal Detail */}

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {weight}
          </Text>
        </Flex>
      </Td>

      <Td>
        <Button w="20" m="1" bg="yellow.300" onClick={onOpen}>
          Edit
        </Button>
        <br />
        <Button w="20" m="1" bg="red.300" onClick={onOpenDelete}>
          Delete
        </Button>
      </Td>

      {/* Modal Edit  */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Fisherman Catch - {name} </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel fontWeight="bold">Weight</FormLabel>
                <InputGroup>
                  <Input name="weight" type="number" placeholder="Input Number"/>
                  <InputRightAddon children="kg" bgColor="gray.400" />
                </InputGroup>
              </FormControl>
              <Table variant="striped" colorScheme="gray" my={4}>
                <Thead>
                  <Tr fontWeight="bold">Fisherman Catch Detail</Tr>
                  {captions.map((caption, index) => (
                    <Th key={index}>{caption}</Th>
                  ))}
                  <Th>Actions</Th>
                </Thead>
                <Tbody>
                  {fishermanTeamCatchDetail.map((row) => {
                    return (
                      <Tr>
                        <Td>{row.name}</Td>
                        <Td>{row.animal_type}</Td>
                        <Td>{row.price}</Td>
                        <Td>
                          <Flex gap={1}>
                            <Button
                              colorScheme="red"
                              size="sm"
                              variant="outline"
                            >
                              <DeleteIcon />
                            </Button>
                            <Button
                              colorScheme="yellow"
                              size="sm"
                              variant="outline"
                            >
                              <EditIcon />
                            </Button>
                          </Flex>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
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
      {/* Modal Edit  */}

      {/* Modal Delete */}
      <AlertDialog
        isOpen={IsOpenDelete}
        leastDestructiveRef={cancelRef}
        onClose={onCloseDelete}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete FishermanCatch
            </AlertDialogHeader>

            <AlertDialogBody>
             Apakah Anda Yakin Dengan Hal Ini ?
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
      {/* Modal Delete */}
    </Tr>
  );
}

export default TableFishermanCatch;
