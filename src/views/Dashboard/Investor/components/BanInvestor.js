const { default: Card } = require("components/Card/Card");
const { default: CardBody } = require("components/Card/CardBody");
const { default: CardHeader } = require("components/Card/CardHeader");
import {
  Table,
  Text,
  Th,
  Thead,
  Td,
  Tr,
  Tbody,
  useColorModeValue,
  TableContainer,
  Avatar,
  Flex,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import React from "react";

import { NotAllowedIcon } from "@chakra-ui/icons";

function BanInvestor({ captions, data }) {
  const textColor = useColorModeValue("gray.700", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <Card>
      <CardHeader>
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          Ban Investor
        </Text>
      </CardHeader>
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
                  <Tr>
                    <Td>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Avatar
                          src={row.identity_photo}
                          w="50px"
                          borderRadius="12px"
                          me="18px"
                        />
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          {row.name}
                        </Text>
                      </Flex>
                    </Td>
                    <Td>
                      <Text>{row.phone}</Text>
                      <Text>{row.email}</Text>
                    </Td>
                    <Td>{row.gender}</Td>
                    <Td>
                      <Text>{row.location_id}</Text>
                      <Text>{row.address}</Text>
                    </Td>
                    <Td>{row.birth_date}</Td>
                    <Td>{row.nik}</Td>
                    <Td>{row.npwp}</Td>
                    <Td>{row.register_date}</Td>
                    <Td>{row.balance}</Td>
                    <Td>
                      <Button
                        colorScheme="red"
                        size="sm"
                        variant="solid"
                        w="40px"
                        onClick={onOpen}
                      >
                        <NotAllowedIcon />
                      </Button>
                    </Td>

                    {/* Modal Delete */}
                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                    >
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Ban Investor
                          </AlertDialogHeader>

                          <AlertDialogBody>
                           Apakah Anda Ingin Membanned Akun Berikut ?
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                              Cancel
                            </Button>
                            <Button colorScheme="red" onClick={onClose} ml={3}>
                              Delete
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                    {/* Modal Delete */}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </TableContainer>
    </Card>
  );
}

export default BanInvestor;
