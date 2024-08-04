import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useStudiiUpdateDialogController } from "./StudiiUpdateDialog.controller";
import { StudiiUpdateForm } from "@presentation/components/forms/Studii/StudiiUpdateForm";
import { useIntl } from "react-intl";
import EditIcon from '@mui/icons-material/Edit';

/**
 * This component wraps the user add form into a modal dialog.
 */
export const StudiiUpdateDialog = (props:{pid:String}) => {
  const { open, close, isOpen } = useStudiiUpdateDialogController();
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
        <StudiiUpdateForm onSubmit={close} pid={props.pid}/>
      </DialogContent>
    </Dialog>
  </div>
};