import { Stack, Button, Text } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevPage = () => {
    onChangePage(currentPage - 1);
  };

  const handleNextPage = () => {
    onChangePage(currentPage + 1);
  };



  return (
    <Stack direction="row" justify="center" spacing={4} align="center" m="12px" >
      <Button
        disabled={isFirstPage}
        onClick={handlePrevPage}
        variant="solid"
        bgColor="transparent"
      >
        Prev
      </Button>
      <Text>{`${currentPage} / ${totalPages}`}</Text>
      <Button
        disabled={isLastPage}
        onClick={handleNextPage}
        variant="solid"
        bgColor="transparent"
      >
        Next
      </Button>
    </Stack>
  );
};

export default Pagination;