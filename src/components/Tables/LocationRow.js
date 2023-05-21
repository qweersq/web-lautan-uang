import { Tr, Td, Text, Button, Flex } from "@chakra-ui/react";

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

  return (
    <Tr>
      <Td p={0}>
        <Text fontSize="md" fontWeight="bold">{country_name}</Text>
      </Td>
      <Td>
        <Text fontSize="md" fontWeight="bold">{province_name}</Text>
      </Td>
      <Td>
        <Text fontSize="md" fontWeight="bold">{kota_kab_name}</Text>
      </Td>
      <Td>
        <Text fontSize="md" fontWeight="bold">{kecamatan_name}</Text>
      </Td>
      <Td>
        <Text fontSize="md" fontWeight="bold">{kelurahan_des_name}</Text>
      </Td>
      <Td>
        <Text fontSize="md" fontWeight="bold">{postal_code}</Text>
      </Td>
      <Td>
        <Flex flexDirection="column">
          <Button w="20" m="1" bg="yellow.300">
            <Text>Edit</Text>
          </Button>
          <Button w="20" m="1" bg="red.300">
            <Text>Delete</Text>
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
}

export default LocationRow;
