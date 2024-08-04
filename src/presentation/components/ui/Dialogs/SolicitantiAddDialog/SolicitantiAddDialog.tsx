import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useSolicitantiAddDialogController } from "./SolicitantiAddDialog.controller";
import { SolicitantiAddForm } from "@presentation/components/forms/Solicitanti/SolicitantiAddForm";
import { useIntl } from "react-intl";


/**
 * This component wraps the user add form into a modal dialog.
 */
export const SolicitantiAddDialog = () => {
  const { open, close, isOpen } = useSolicitantiAddDialogController();
  const { formatMessage } = useIntl();

  return <div>
    <Button variant="outlined" onClick={open}>
      {formatMessage({ id: "labels.addSolicitanti" })}
    </Button>
    <Dialog
      open={isOpen}
      onClose={close}>
      <DialogTitle>
        {formatMessage({ id: "labels.addSolicitanti" })}
      </DialogTitle>
      <DialogContent>
        <SolicitantiAddForm onSubmit={close} />
      </DialogContent>
    </Dialog>
  </div>
};