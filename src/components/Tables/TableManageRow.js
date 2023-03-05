import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

function TableManageRow(props) {
  const {
    logo,
    chief_name,
    team_name,
    email,
    phone,
    subdomain,
    domain,
    status,
    date,
    location,
    address,
  } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

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
 
//   Fisherman
cont [name,setName] = useState("")


  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {chief_name}
            </Text>
            {/* <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  {phone}
                </Text> */}
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Text> {phone} </Text>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {location}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {address}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Badge
          bg={status === "Online" ? "green.400" : bgStatus}
          color={status === "Online" ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status}
        </Badge>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {date}
        </Text>
      </Td>
    

      <Td>
        <Button
          p="0px"
          bg="transparent"
          variant="no-hover"
          onClick={onOpenEdit}
        >
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Edit
          </Text>
        </Button>
      </Td>

      {/* Edit Modals ChakraUI */}
      <Modal isOpen={isOpenEdit} onClose={onCloseEdit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Team Nelayan</ModalHeader>
          <ModalBody>
            <Input
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
            <Input placeholder="Age" value={age} onChange={handleAgeChange} />
            <Input
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button onClick={onCloseEdit}>Cancel</Button>
            <Button colorScheme="blue" ml={3}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Td>
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="gray"
            fontWeight="bold"
            cursor="pointer"
            bgColor="tomto"
          >
            Delete
          </Text>
        </Button>
      </Td>

      {/* Delete Modals ChakraUI */}
      <Modal isOpen={isOpenDelete} onClose={onCloseDelete}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Row</ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete this row?</p>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onCloseDelete}>Cancel</Button>
            <Button colorScheme="red" ml={3}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Tr>
  );
}

export default TableManageRow;

