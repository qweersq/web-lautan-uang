import { Heading, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader.js";
import TableInvestorDeclineRow from "components/Tables/TableInvestorDeclineRow";

const InvestorDecline = ({ title, data, list, captions }) => {
  return (
    <Card width="500px" >
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
                <TableInvestorDeclineRow name={row.name} email={row.email} />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default InvestorDecline;
