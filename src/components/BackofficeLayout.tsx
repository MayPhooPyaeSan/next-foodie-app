import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAppData } from "@/store/slices/appSlice";
import { Box } from "@mui/material";
import { useEffect } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

interface Props {
  title?: string;
  children: string | JSX.Element | JSX.Element[];
}

const BackofficeLayout = (props: Props) => {
  const { init } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!init) {
      dispatch(fetchAppData({ locationId: undefined }));
    }
  }, [dispatch, init]);

  return (
    <Box sx={{ width: "100%" }}>
      <TopBar title={props.title} />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <SideBar />
        <Box sx={{ p: 3, width: "100%" }}>{props.children}</Box>
      </Box>
    </Box>
  );
};

export default BackofficeLayout;
