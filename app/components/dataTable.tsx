"use client";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Box,
} from "@chakra-ui/react";
export default function DataTable({ headers, data }: any) {
  //validate data//
  //the mapping may need to change to ensure that the order of the headers in the CSV file matches the order of headers in the validationMaps
  const errorMessage = "This is an example error message";

  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            {headers.map((header: string, index: number) => (
              <Th key={index}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.slice(1).map(
              (
                row: any,
                rowIndex: number //the slice method ensures that the first row of the data (headers) is not printed to the table
              ) => (
                <Tr key={rowIndex}>
                  {row.map((item: string, colIndex: number) =>
                    rowIndex == 2 && colIndex == 2 ? (
                      <Error
                        item={item}
                        message={errorMessage}
                        key={colIndex}
                      />
                    ) : (
                      <Td key={colIndex}>{item}</Td>
                    )
                  )}
                </Tr>
              )
            )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

interface ErrorType {
  item: string;
  message: string;
}
const Error = ({ item, message }: ErrorType) => {
  return (
    <Td bgColor="red.100" role="button">
      <Popover>
        <PopoverTrigger>
          <Box w="full" h="full">
            {item}
          </Box>
        </PopoverTrigger>
        <PopoverContent bg="tomato" color="white">
          <PopoverHeader fontWeight="semibold">Data Error</PopoverHeader>
          <PopoverArrow bg="black" />
          <PopoverCloseButton bg="black" />
          <PopoverBody>{message}</PopoverBody>
        </PopoverContent>
      </Popover>
    </Td>
  );
};
