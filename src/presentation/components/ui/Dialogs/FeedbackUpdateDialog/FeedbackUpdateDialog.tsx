import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useFeedbackUpdateDialogController } from "./FeedbackUpdateDialog.controller";
import { FeedbackUpdateForm } from "@presentation/components/forms/Feedback/FeedbackUpdateForm";
import { useIntl } from "react-intl";
import EditIcon from '@mui/icons-material/Edit';

/**
 * This component wraps the user add form into a modal dialog.
 */
export const FeedbackUpdateDialog = (props:{pid:String}) => {
  const { open, close, isOpen } = useFeedbackUpdateDialogController();
  const { formatMessage } = useIntl();

  return <div>
    <Button variant="outlined" onClick={open}>
      <EditIcon fontSize='small' />
    </Button>
    <Dialog
      open={isOpen}
      onClose={close}>
      <DialogTitle>
        {formatMessage({ id: "labels.updateFeedback" })}
      </DialogTitle>
      <DialogContent>
        <FeedbackUpdateForm onSubmit={close} pid={props.pid}/>
      </DialogContent>
    </Dialog>
  </div>
};