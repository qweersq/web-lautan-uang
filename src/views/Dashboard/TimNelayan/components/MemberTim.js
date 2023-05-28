// Chakra imports
import {
  AtSignIcon,
  PhoneIcon,
  SearchIcon,
  UnlockIcon,
  ViewIcon,
  ViewOffIcon,
  EditIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Text,
  useColorModeValue,
  Tr,
  Td,
  Table,
  Avatar,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";

import { useState } from "react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Pagination from "components/Pagination/Pagination";
import InvoicesRow from "components/Tables/InvoicesRow";
import React from "react";

const MemberTim = ({ title, data }) => {
  const textColor = useColorModeValue("gray.700", "white");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Menghitung index data pertama dan terakhir yang akan ditampilkan
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = data.slice(firstIndex, lastIndex);

  // Menghitung jumlah total halaman yang tersedia
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Fungsi yang akan dipanggil ketika currentPage berubah
  const handleCurrentPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Card
      // p="22px"
      my={{ sm: "24px", lg: "0px" }}
      ms={{ sm: "0px", lg: "24px" }}
    >
      <CardHeader>
        <Flex justify="space-between" align="center" mb="1rem" w="100%">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            {title}
          </Text>
        </Flex>
      </CardHeader>

      <InputGroup width="100%">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="blue.300" />}
        />
        <Input placeholder="Find Member" borderRadius="md" />
      </InputGroup>
      <CardBody>
        <Table>
          {data.map((row) => {
            return (
              <Tr>
                <Td>
                  <Flex>
                    <Avatar
                      src={row.photo}
                      w="50px"
                      borderRadius="12px"
                      me="18px"
                    />

                    <Box color="gray.400" fontWeight="bold">
                      <Text fontSize="lg">{row.name}</Text>
                      <Text fontSize="md" m="2px">
                        {row.email}
                      </Text>
                    </Box>
                  </Flex>
                </Td>
              </Tr>
            );
          })}
        </Table>
      </CardBody>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onCurrentPageChange={handleCurrentPageChange}
      />
    </Card>
  );
};

export default MemberTim;
