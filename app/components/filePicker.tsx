import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";

export default function FilePicker({ onFileSelected }: any) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleDrop = (acceptedFiles: any) => {
    if (acceptedFiles.length === 1) {
      const file = acceptedFiles[0];
      if (file.type === "text/csv") {
        parseCSV(file);
      } else {
        setErrorMessage("Please upload a valid CSV file.");
      }
    } else {
      setErrorMessage("Please upload only one file.");
    }
  };

  const parseCSV = (file: any) => {
    Papa.parse(file, {
      complete: (result) => {
        // Process the CSV data
        onFileSelected(result.data);
      },
      error: (error) => {
        console.error("Error parsing CSV:", error);
        setErrorMessage("Error parsing CSV file.");
      },
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: { "text/csv": [".csv"] },
    multiple: false,
  });

  return (
    <Box
      {...getRootProps()}
      border="2px"
      borderColor={isDragActive ? "blue.400" : "gray.300"}
      borderRadius="md"
      p={4}
      cursor="pointer"
      textAlign="center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the CSV file here...</p>
      ) : (
        <>
          <p>Drag and drop a CSV file here, or click to select a file.</p>
          <p>Accepted file type: .csv</p>
        </>
      )}
      {errorMessage && <Box color="red.500">{errorMessage}</Box>}
    </Box>
  );
}
