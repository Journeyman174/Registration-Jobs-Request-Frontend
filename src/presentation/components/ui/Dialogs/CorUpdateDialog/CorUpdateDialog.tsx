import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useCorUpdateDialogController } from "./CorUpdateDialog.controller";
import { CorUpdateForm } from "@presentation/components/forms/Cor/CorUpdateForm";
import { useIntl } from "react-intl";
import EditIcon from '@mui/icons-material/Edit';

/**
 * This component wraps the user add form into a modal dialog.
 */
export const CorUpdateDialog = (props:{pid:String}) => {
  const { open, close, isOpen } = useCorUpdateDialogController();
  const { formatMessage } = useIntl();

  return <div>
    <Button variant="outlined" onClick={open}>
      <EditIcon fontSize='small' />
    </Button>
    <Dialog
      open={isOpen}
      onClose={close}>
      <DialogTitle>
        {formatMessage({ id: "labels.updatecor" })}
      </DialogTitle>
      <DialogContent>
        <CorUpdateForm onSubmit={close} pid={props.pid}/>
      </DialogContent>
    </Dialog>
  </div>
};