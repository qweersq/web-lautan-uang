
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
import { modalEditFishermanTeamContext } from "components/Tables/TableFishermanTeam";

  import { useContext } from "react";

function ModalEditFishermanTeamContext() {

    const { isOpen, onOpen, onClose } = useContext(modalEditFishermanTeamContext)

    return(
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Transaction</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
};

export default ModalEditFishermanTeamContext;