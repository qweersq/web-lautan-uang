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

export default function TableFishermanTeam(props) {
  const {
    id,
    name,
    phone,
    yearFormed,
    address,
    location,
    balance,
    quantity,
    totalAssets,
    dividentYield,
    debt_to_equity_ratio,
    marketCap,
  } = props;

  const textColor = useColorModeValue("gray.700", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const cancelRef = React.useRef();

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

  

  const [selectedLoc, setSelectedLoc] = React.useState("");
  const handleLocSelect = (location) => {
    setSelectedLoc(location);
  };

const linkToDetail = `/detail-fisherman/${id}`;

  return (
    <Tr>
      <Td p={0}>
        <Flex direction="column" justifyContent="flex-start" alignItems="start">
          <Link to={linkToDetail}>
            <Button variant="link" size="lg">
              {name} <ExternalLinkIcon mx="2px" />
            </Button>
          </Link>
        </Flex>
      </Td>
      <Td>{phone}</Td>
      <Td>{yearFormed}</Td>
      <Td>
        <Text>{address}</Text>
        <Text>{location}</Text>
      </Td>
      <Td>{balance}</Td>
      <Td>{quantity}</Td>
      <Td>{totalAssets}</Td>
      <Td>{dividentYield}</Td>
      <Td>{debt_to_equity_ratio}</Td>
      <Td>{marketCap}</Td>
      <Td>
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
          <form>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Fisherman Team Name</FormLabel>
                <Input
                  name="name"
                  ref={initialRef}
                  // value={transactionData.name}
                  // onChange={handleChange}
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
                Save
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
