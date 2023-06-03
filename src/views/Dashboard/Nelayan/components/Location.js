import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import {
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Button,
  Spacer,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  TableContainer,
} from "@chakra-ui/react";
import CardHeader from "components/Card/CardHeader.js";
import LocationRow from "components/Tables/LocationRow";
import React from "react";

const Location = ({ title, captions, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Card ml="2" p="5">
      <CardHeader>
        <Heading size="md">{title}</Heading>
        <Spacer />
        <Button w={20} onClick={onOpen}>
          Add
        </Button>
      </CardHeader>

      {/* Add Modal Button */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Location</ModalHeader>
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
      {/* Add Modal Button */}
      <TableContainer>
        <CardBody>
          <Table>
            <Thead>
              <Tr>
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
            <Tbody>
              {data.map((row) => {
                return (
                  <LocationRow
                    country_name={row.country_name}
                    province_name={row.province_name}
                    kota_kab_name={row.kota_kab_name}
                    kecamatan_name={row.kecamatan_name}
                    kelurahan_des_name={row.kelurahan_des_name}
                    postal_code={row.postal_code}
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

export default Location;
