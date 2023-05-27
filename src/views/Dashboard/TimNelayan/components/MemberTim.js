// Chakra imports
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
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import InvoicesRow from "components/Tables/InvoicesRow";
import React from "react";

const MemberTim = ({ title, data }) => {
  const textColor = useColorModeValue("gray.700", "white");

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
          <Button
            colorScheme="blue"
            borderColor="blue.300"
            color="blue.300"
            variant="outline"
            fontSize="xs"
            p="8px 32px"
          >
            VIEW ALL
          </Button>
        </Flex>
      </CardHeader>
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

                    <Box  color="gray.400" fontWeight="bold">
                    <Text fontSize="lg">
                      {row.name}
                    </Text>
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
    </Card>
  );
};

export default MemberTim;
