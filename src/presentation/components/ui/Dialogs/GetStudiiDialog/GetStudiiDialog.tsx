import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import {  StudiiProps } from '../../Tables/SolicitantiTable';
import { useIntl } from "react-intl";
import { useGetStudiiDialogController } from "./GetStudiiDialog.controller";
import FactoryIcon from '@mui/icons-material/Factory';
import SchoolIcon from '@mui/icons-material/School';
import IconButton  from "@mui/material";

//const meserii= ['username@gmail.com', 'user02@gmail.com'];
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string , meserie: string[]) => void;
  studii: string[];
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, studii} = props;

  const handleClose = () => {
    onClose(selectedValue,[]);
  };

  const handleListItemClick = (value: string) => {
    onClose(value,[]);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Studii Solicitant</DialogTitle>
      <List sx={{ pt: 0 }}>
        {props.studii.map((stud:string) => (
          <ListItem disableGutters key={stud}>
            <ListItemButton onClick={() => handleListItemClick(stud)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={stud} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add Studies" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

export  function GetStudiiDialog (props:StudiiProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(props.studii[1]);
  const [studii, setStudii] = React.useState(props.studii);
//  const { open, close, isOpen } = useGetStudiiDialogController();
//  const { formatMessage } = useIntl();

 const handleClickOpen = () => {
   setOpen(true);
  };

  const handleClose = (value: string ,studii:string[]) => {
    setOpen(false);
    setSelectedValue(value);
    setStudii(studii);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
         {selectedValue}
      </Typography>
      <br />

      <Button color="error" onClick={handleClickOpen} >
          Studii
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose} 
        studii={studii} />
    </div>
  );
}


