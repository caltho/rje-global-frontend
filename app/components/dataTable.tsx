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
} from "@chakra-ui/react";
export default function DataTable({ headers, data }: any) {
  //validate data//
  //console.log(data);
  console.log("data?", data ? "truey" : "falsey");
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
            data.map((row: any, rowIndex: number) => (
              <Tr key={rowIndex}>
                {row.map((item: string, colIndex: number) => (
                  <Td key={colIndex}>{item}</Td>
                ))}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
