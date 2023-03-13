import { useState } from "react";
import { Heading, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader.js";
import TableInvestorDeclineRow from "components/Tables/TableInvestorDeclineRow";
import Pagination from "components/Pagination/Pagination";
import TableTopInvestorRow from "components/Tables/TableTopInvestorRow";

const TopFisherman = ({ title, data, list, captions }) => {
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
    <Card width="600px" >
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
            {currentData.map((row) => {
              return (
                <TableTopInvestorRow name={row.name} email={row.email} />
              );
            })}
          </Tbody>
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

export default TopFisherman;
