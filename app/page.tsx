"use client";
import { Flex, Center, Button } from "@chakra-ui/react";
import Nav from "./components/navbar";
import Navbar from "./components/navbar";
import FilePicker from "./components/filePicker";
import { useState, useEffect } from "react";
import DataTable from "./components/dataTable";
export default function Home() {
  const [fileData, setFileData] = useState(null);

  return (
    <Flex height="100vh" flexDirection="column">
      <Navbar />
      <Flex flexDirection="column">
        <Center py={4}>
          <FilePicker onFileSelected={setFileData} />
        </Center>
        <Center py={4}>
          <Button
            size="md"
            colorScheme="teal"
            onClick={() => setFileData(null)}
          >
            Clear Data
          </Button>
        </Center>
        <Center py={4}>
          <DataTable data={fileData} headers={headers} />
        </Center>
      </Flex>
    </Flex>
  );
}

const headers = [
  "Not A Field",
  " Project",
  "Item No.",
  "Subsystem",
  "PLU",
  "Parent Equipment Number",
  "Equipment Number",
  "Update To",
  "Description",
  "Supplier",
  "Manufacturer",
  "Model Number",
  "Test Code",
  "Comments",
  "Drawings",
  "Docnumber",
];
