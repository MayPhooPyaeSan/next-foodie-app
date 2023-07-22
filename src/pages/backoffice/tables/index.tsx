import ItemCard from "@/components/ItemCard";
import Layout from "@/components/BackofficeLayout";
import { config } from "@/config";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";
import { addTable } from "@/store/slices/tablesSlice";
import { getSelectedLocationId } from "@/utils/client";
import AddIcon from "@mui/icons-material/Add";
import TableBarIcon from "@mui/icons-material/TableBar";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import NewTable from "./NewTable";

const Tables = () => {
  const { tables } = useAppSelector(appData);
  const [open, setOpen] = useState(false);
  const selectedLocationId = getSelectedLocationId();

  const validTables = tables.filter(
    (item) => item.locationId === Number(selectedLocationId)
  );

  return (
    <Layout title="Tables">
      <Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: "#4C4C6D",
              width: "fit-content",
              color: "#E8F6EF",
              mb: 2,
              ":hover": {
                bgcolor: "#1B9C85",
                color: "white",
              },
            }}
          >
            New table
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {validTables.map((table) => (
            <ItemCard
              key={table.id}
              href={`/backoffice/tables/${table.id}`}
              icon={
                <TableBarIcon
                  sx={{ fontSize: "60px", mb: 1.5, color: "#1B9C85" }}
                />
              }
              title={table.name}
            />
          ))}
        </Box>
      </Box>
      <NewTable open={open} setOpen={setOpen} />
    </Layout>
  );
};

export default Tables;
