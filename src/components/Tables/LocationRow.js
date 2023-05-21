import {
  Tr,
  Td,
  Text,
  Button,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  AlertDialogOverlay,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import React from "react";

function LocationRow(props) {
  const {
    id,
    country_name,
    province_name,
    kota_kab_name,
    kecamatan_name,
    kelurahan_des_name,
    postal_code,
  } = props;

  // Modal Edit & Delete
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: IsOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const cancelRef = React.useRef();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Tr>
      <Td p={0}>
        <Text fontSize="md" fontWeight="bold">
          {country_name}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" fontWeight="bold">
          {province_name}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" fontWeight="bold">
          {kota_kab_name}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" fontWeight="bold">
          {kecamatan_name}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" fontWeight="bold">
          {kelurahan_des_name}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" fontWeight="bold">
          {postal_code}
        </Text>
      </Td>
      <Td>
        <Flex flexDirection="column">
          <Button w="20" m="1" bg="yellow.300" onClick={onOpen}>
            Edit
          </Button>
          {/* Edit Modal Button */}
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Location</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Country Name</FormLabel>
                  <Input ref={initialRef} placeholder="Enter Country name" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Province name</FormLabel>
                  <Input placeholder="Enter Province name" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Kota/Kab name</FormLabel>
                  <Input placeholder="Enter Kota/Kab name" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Kecamatan name</FormLabel>
                  <Input placeholder="Enter Kecamatan name" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Kelurahan name</FormLabel>
                  <Input placeholder="Enter Kelurahan name" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Postal code</FormLabel>
                  <Input placeholder="Enter Postal code" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {/* Edit Modal Button */}

          <Button w="20" m="1" bg="red.300" onClick={onOpenDelete}>
            Delete
          </Button>
          {/* Delete Modal Button */}
          <AlertDialog
            isOpen={IsOpenDelete}
            leastDestructiveRef={cancelRef}
            onClose={onCloseDelete}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Location
                </AlertDialogHeader>

                <AlertDialogBody>
                  Apakah Anda Yakin Menghapus Location Ini ?
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
          {/* Delete Modal Button */}
        </Flex>
      </Td>
    </Tr>
  );
}

export default LocationRow;
