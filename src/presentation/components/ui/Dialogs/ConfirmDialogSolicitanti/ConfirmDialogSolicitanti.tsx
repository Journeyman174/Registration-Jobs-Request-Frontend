import {
    Button, IconButton,Dialog, DialogActions,
    DialogContent, DialogContentText, DialogTitle,
  } from '@mui/material';
  import { useState } from 'react';
  import { useConfirm } from "material-ui-confirm";

  import { useConfirmDialogSolicitantiController } from "./ConfirmDialogSolicitanti.controller";
  import { useIntl } from "react-intl";
  import DeleteIcon from '@mui/icons-material/Delete';
  import { useSolicitantiTableController } from  "../../Tables/SolicitantiTable/SolicitantiTable.controller";

  export const ConfirmDialogSolicitanti = (props:{pid: string}) => {
    const { open, close, isOpen } = useConfirmDialogSolicitantiController();
    const { formatMessage } = useIntl();
    const { handleChangePage, handleChangePageSize, pagedData, isError, isLoading, tryReload, labelDisplay , deleteSolicitanti} = useSolicitantiTableController(); // Use the controller hook.
    const confirm = useConfirm();

    const handleClick = () => {
      confirm({ description: "This action is permanent!" })
        .then(() => {
          deleteSolicitanti(props.pid);
        })
        .catch(() => {

        });
    };
    return <IconButton color="error"  onClick={handleClick}> <DeleteIcon color="error" fontSize='small' /></IconButton>;
  };
