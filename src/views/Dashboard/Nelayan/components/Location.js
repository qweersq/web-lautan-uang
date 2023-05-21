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
} from "@chakra-ui/react";
import CardHeader from "components/Card/CardHeader.js";
import LocationRow from "components/Tables/LocationRow";

const Location = ({ title, captions, data }) => {


  return (
    <Card ml="2" p="5">
      <CardHeader>
        <Heading size="md">{title}</Heading>
        <Spacer />
        <Button w={20}>Add</Button>
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
    </Card>
  );
};

export default Location;