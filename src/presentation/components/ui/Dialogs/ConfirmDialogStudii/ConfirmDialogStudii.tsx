import {
    Button, IconButton,Dialog, DialogActions,
    DialogContent, DialogContentText, DialogTitle,
  } from '@mui/material';
  import { useState } from 'react';
  import { useConfirm } from "material-ui-confirm";

  import { useConfirmDialogStudiiController } from "./ConfirmDialogStudii.controller";
  import { useIntl } from "react-intl";
  import DeleteIcon from '@mui/icons-material/Delete';
  import { useStudiiTableController } from  "../../Tables/StudiiTable/StudiiTable.controller";

  export const ConfirmDialogStudii = (props:{pid: string}) => {
    const { open, close, isOpen } = useConfirmDialogStudiiController();
    const { formatMessage } = useIntl();
    const { handleChangePage, handleChangePageSize, pagedData, isError, isLoading, tryReload, labelDisplay , remove} = useStudiiTableController(); // Use the controller hook.
    const confirm = useConfirm();

    const handleClick = () => {
      confirm({ description: "This action is permanent!" })
        .then(() => {
          remove(props.pid);
        })
        .catch(() => {

        });
    };
    return <IconButton color="error"  onClick={handleClick}> <DeleteIcon color="error" fontSize='small' /></IconButton>;
  };
