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
import {  MeseriiProps } from '../../Tables/SolicitantiTable';
import { useIntl } from "react-intl";
import { useGetMeseriiDialogController } from "./GetMeseriiDialog.controller";

//const meserii= ['username@gmail.com', 'user02@gmail.com'];
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string , meserie: string[]) => void;
  meserii: string[];
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, meserii} = props;

  const handleClose = () => {
    onClose(selectedValue,[]);
  };

  const handleListItemClick = (value: string) => {
    onClose(value,[]);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Calificari Solicitant</DialogTitle>
      <List sx={{ pt: 0 }}>
        {props.meserii.map((job:string) => (
          <ListItem disableGutters key={job}>
            <ListItemButton onClick={() => handleListItemClick(job)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={job} />
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
            <ListItemText primary="Add Jobs" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

export  function GetMeseriiDialog (props:MeseriiProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(props.meserii[1]);
  const [meserii, setMeserii] = React.useState(props.meserii);
//  const { open, close, isOpen } = useGetMeseriiDialogController();
//  const { formatMessage } = useIntl();

 const handleClickOpen = () => {
   setOpen(true);
  };

  const handleClose = (value: string ,meserii:string[]) => {
    setOpen(false);
    setSelectedValue(value);
    setMeserii(meserii);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
       {selectedValue}
      </Typography>
      <br />

      <Button variant="outlined" onClick={handleClickOpen} >
        Meserii 
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose} 
        meserii={meserii} />
    </div>
  );
}


