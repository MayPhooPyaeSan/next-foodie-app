import Layout from "@/components/Layout";
import { config } from "@/config";
import { useAppDispatch } from "@/store/hooks";
import { fetchAppData } from "@/store/slices/appSlice";
import { Box, Button, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BackofficeApp = () => {
  const { data, status } = useSession();
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data && status !== "loading") {
      router.push("auth/signin");
    } else {
      dispatch(fetchAppData("4"));
    }
  }, [data]);

  const handleCreateNewCompany = async () => {
    const isValid = companyName;
    if (!isValid) return alert("Name and email are required.");
    await fetch(`${config.apiBaseUrl}/company`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: companyName }),
    });
  };

  if (status === "loading") return null;

  return (
    <Layout>
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
    </Layout>
  );
};

export default BackofficeApp;
