"use client";
import {
  Flex,
  Center,
  Button,
  Heading,
  Container,
  Text,
} from "@chakra-ui/react";
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
        <Container py={4}>
          <Heading size="md" py={2}>
            Errors:
          </Heading>
          <Text>
            {fileData == null
              ? "No errors to show"
              : "List of errors output here..."}
          </Text>
        </Container>
      </Flex>
    </Flex>
  );
}

// Headers should be retrieved from the validationMaps file
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
