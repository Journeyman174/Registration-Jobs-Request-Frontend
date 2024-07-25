import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useCorAddDialogController } from "./CorAddDialog.controller";
import { CorAddForm } from "@presentation/components/forms/Cor/CorAddForm";
import { useIntl } from "react-intl";

/**
 * This component wraps the user add form into a modal dialog.
 */
export const CorAddDialog = () => {
  const { open, close, isOpen } = useCorAddDialogController();
  const { formatMessage } = useIntl();

  return <div>
    <Button variant="outlined" onClick={open}>
      {formatMessage({ id: "labels.addCor" })}
    </Button>
    <Dialog
      open={isOpen}
      onClose={close}>
      <DialogTitle>
        {formatMessage({ id: "labels.addCor" })}
      </DialogTitle>
      <DialogContent>
        <CorAddForm onSubmit={close} />
      </DialogContent>
    </Dialog>
  </div>
};