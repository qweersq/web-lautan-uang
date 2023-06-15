import { useState } from "react";
import { Heading, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader.js";

const FishermanCatchOrder = ({ data, captions, title }) => {
  return (
    <Card width="100%">
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Table>
          <Thead>
            <Tr>
              {captions.map((caption, idx) => {
                return (
                  <Th color="gray.400" key={idx} ps={idx === 0 ? "0px" : null}>
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
                  <Td minWidth={{ sm: "250px" }} pl="0px" >{row.name}</Td>
                  <Td>{row.weight}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default FishermanCatchOrder;
