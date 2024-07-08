import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Style } from "@mui/icons-material";
import { styleText } from "util";
import styles from "../styles/Home.module.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


export default function TemporaryDrawer() {
  
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
    
  React.useEffect(() => {
      if (isDesktop) {
        setOpen(false);
      }
    }, [isDesktop]);

  const DrawerList = (
    <Box
      sx={{ width: "auto", paddingTop: "20px", paddingBottom: "20px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {["Home", "Cervezas", "Contactanos", "Nosotros", "Tienda om line"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Loguin", "Registrarme"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="Burguer">
      <Button onClick={toggleDrawer(true)}>☰</Button>

      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            height: "auto",
            backgroundColor: "#000000",
            color: "white"
          },
        }}
        >
        {DrawerList}
      </Drawer>
    </div>
  );
}
