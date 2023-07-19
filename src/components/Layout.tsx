import { useAppSelector } from "@/store/hooks";
import { Box } from "@mui/material";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

interface Props {
  title?: string;
  children: string | JSX.Element | JSX.Element[];
}

const Layout = (props: Props) => {
  const { isLoading } = useAppSelector((state) => state.app);
  if (isLoading) return null;

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

export default Layout;
