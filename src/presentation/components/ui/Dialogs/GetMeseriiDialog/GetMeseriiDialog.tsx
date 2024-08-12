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
import { CorAddFormSol } from '@presentation/components/forms/Cor/CorAddFormSol';




//const meserii= ['username@gmail.com', 'user02@gmail.com'];
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string , meserie: string[]) => void;
  meserii: string[];
  cnp:string; 
  uid:string; 
  sid:string;

}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, meserii} = props;
  const [showForm, setShowForm] = React.useState(false); // State to control form visibility

  const handleClose = () => {
    onClose(selectedValue, meserii);
  };

  const handleListItemClick = (value: string) => {
    onClose(value, meserii);
  };

  const handleAddItemClick = () => {
    setShowForm(true); // Show the form when the button is clicked
  };

  const closeForm = () => {
    setShowForm(false); // Hide the form after submission
    onClose(selectedValue, meserii); // Close the dialog as well
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Calificari Solicitant</DialogTitle>
      <List sx={{ pt: 0 }}>
        {props.meserii.map((job: string) => (
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
          <ListItemButton autoFocus onClick={handleAddItemClick}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Adauga Meserie" />
          </ListItemButton>
        </ListItem>
      </List>

      {/* Conditionally render the CorAddFormSol form */}
      {showForm && (
        <CorAddFormSol
          onSubmit={closeForm} // Pass the close function to handle form submission
          uid={props.uid}
          sid={props.sid}
          cnp={props.cnp}
        />
      )}
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
        meserii={meserii} 
        uid={props.uid}
        sid={props.sid}
        cnp={props.cnp}
        />
    </div>
  );
}


