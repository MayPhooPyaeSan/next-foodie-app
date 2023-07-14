import { config } from "@/config";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const BackofficeApp = () => {
  const [companyName, setCompanyName] = useState("");

  const handleCreateNewCompany = async () => {
    const isValid = companyName;
    if (!isValid) return alert("Name and email are required.");
    await fetch(`${config.apiBaseUrl}/company`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: companyName }),
    });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: 400,
          margin: "0 auto",
          mt: 3,
        }}
      >
        <TextField
          placeholder="Name"
          sx={{ mb: 2 }}
          onChange={(evt) => setCompanyName(evt.target.value)}
        ></TextField>
        <Button
          variant="contained"
          sx={{ width: "fit-content" }}
          onClick={handleCreateNewCompany}
        >
          Create new company
        </Button>
      </Box>
    </Box>
  );
};

export default BackofficeApp;
