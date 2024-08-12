import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useFeedbackAddDialogController } from "./FeedbackAddDialog.controller";
import { FeedBackAddForm } from "@presentation/components/forms/Feedback/FeedBackAddForm";
import { useIntl } from "react-intl";

/**
 * This component wraps the user add form into a modal dialog.
 */
export const FeedbackAddDialog = () => {
  const { open, close, isOpen } = useFeedbackAddDialogController();
  const { formatMessage } = useIntl();

  return <div>
    <Button variant="outlined" onClick={open}>
      {formatMessage({ id: "labels.addFeedback" })}
    </Button>
    <Dialog
      open={isOpen}
      onClose={close}>
      <DialogTitle>
        {formatMessage({ id: "labels.addFeedback" })}
      </DialogTitle>
      <DialogContent>
        <FeedbackAddForm onSubmit={close} />
      </DialogContent>
    </Dialog>
  </div>
};