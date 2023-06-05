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
  Text,
} from "@chakra-ui/react";
import CardHeader from "components/Card/CardHeader.js";
import LocationRow from "components/Tables/LocationRow";
import React, { useEffect, useState } from "react";
import { URL_API } from "constant/data";
import axios from "axios";

const Location = ({ title, captions, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const [locationData, setLocationData] = useState(null);

  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(`${URL_API}/api/location`, { headers });
      setLocationData(response.data.data);
      // console.log(response.data);
      // console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

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
              {locationData ? (
                locationData.map((location) => (
                  <LocationRow
                    country_name={location.country_name}
                    province_name={location.province_name}
                    kota_kab_name={location.kota_kab_name}
                    kecamatan_name={location.kecamatan_name}
                    kelurahan_des_name={location.kelurahan_des_name}
                    postal_code={location.postal_code}
                  />
                ))
              ) : (
                <p>Loading...</p>
              )}
            </Tbody>
          </Table>
        </CardBody>
      </TableContainer>
    </Card>
  );
};

export default Location;
