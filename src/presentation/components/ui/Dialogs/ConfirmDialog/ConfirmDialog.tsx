import {
    Button, IconButton,Dialog, DialogActions,
    DialogContent, DialogContentText, DialogTitle,
  } from '@mui/material';
  import { useState } from 'react';
  import { useConfirm } from "material-ui-confirm";
  //import { remove } from 'lodash';
  import { useConfirmDialogController } from "./ConfirmDialog.controller";
  import { useIntl } from "react-intl";
  import DeleteIcon from '@mui/icons-material/Delete';
  import { useCorTableController } from  "../../Tables/CorTable/CorTable.controller";

  export const ConfirmDialog = (props:{pid: string}) => {
    const { open, close, isOpen } = useConfirmDialogController();
    const { formatMessage } = useIntl();
    const { handleChangePage, handleChangePageSize, pagedData, isError, isLoading, tryReload, labelDisplay , remove} = useCorTableController(); // Use the controller hook.
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
