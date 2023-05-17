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
} from "@chakra-ui/react";
import React from "react";

import { createContext } from "react";
import ModalEditFishermanTeamContext from "views/Dashboard/Nelayan/components/ModalEditFishermanTeam";

export const modalEditFishermanTeamContext = createContext(null);

function TableFishermanTeam(data) {
  const { Name, Phone, Address, Balance, Quantity, TotalAssets, YearFormed, Location
  } = data.data;

  const { kota_kab_name, province_name } = Location;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: IsOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete } = useDisclosure();

  const cancelRef = React.useRef();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [transactionData, editTransactionData] = React.useState({
    fisherman_team: "",
    investor: "",
    quantity: "",
    status: "",
  });

  const NumberIDR = (num) => {
    const formattedNumber = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(num);

    return <div>{formattedNumber}</div>;
  };

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

  return (
    <modalEditFishermanTeamContext.Provider value={{ onOpen, isOpen, onClose }}>
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={"#"} w="50px" borderRadius="12px" me="18px" />
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {Name}
          </Text>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {Phone}
          </Text>
        </Flex>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {YearFormed}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {Address}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {NumberIDR(Balance)}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {kota_kab_name}, {province_name}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {Quantity}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {NumberIDR(TotalAssets)}
        </Text>
      </Td>

      <Td>
        <Flex direction="column" align="center">
          <Button
            p="0px"
            size="md"
            color="green.600"
            variant="ghost"
            onClick={onOpen}
          >
            Edit
          </Button>
          <Button
            p="0px"
            size="md"
            color="red.600"
            variant="ghost"
            onClick={onOpenDelete}
          >
            Delete
          </Button>
        </Flex>
      </Td>

      <ModalEditFishermanTeamContext />

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
              Are you sure? You can't undo this action afterwards.
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
    </modalEditFishermanTeamContext.Provider>
  );
}

export default TableFishermanTeam;
