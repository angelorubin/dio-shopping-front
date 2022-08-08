import { Backdrop, CircularProgress, useTheme } from "@mui/material";

const Loading = () => {
  const { zIndex } = useTheme()

  return (
    <Backdrop open={true}
      sx={{ color: '#fff', zIndex: zIndex.drawer + 1 }}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default Loading
