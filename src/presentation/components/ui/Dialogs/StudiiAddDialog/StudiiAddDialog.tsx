import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useStudiiAddDialogController } from "./StudiiAddDialog.controller";
import { StudiiAddForm } from "@presentation/components/forms/Studii/StudiiAddForm";
import { useIntl } from "react-intl";

/**
 * This component wraps the Studii add form into a modal dialog.
 */
export const StudiiAddDialog = () => {
  const { open, close, isOpen } = useStudiiAddDialogController();
  const { formatMessage } = useIntl();

  return <div>
    <Button variant="outlined" onClick={open}>
      {formatMessage({ id: "labels.addStudii" })}
    </Button>
    <Dialog
      open={isOpen}
      onClose={close}>
      <DialogTitle>
        {formatMessage({ id: "labels.addStudii" })}
      </DialogTitle>
      <DialogContent>
        <StudiiAddForm onSubmit={close} />
      </DialogContent>
    </Dialog>
  </div>
};