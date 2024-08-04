import { useIntl } from "react-intl";
import { isUndefined } from "lodash";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { DataLoadingContainer } from "../../LoadingDisplay";
import { useSolicitantiTableController } from "./SolicitantiTable.controller";
import { CorDTO, SolicitantiDTO, UserDTO } from "@infrastructure/apis/client";
import DeleteIcon from '@mui/icons-material/Delete';
import FactoryIcon from '@mui/icons-material/Factory';
import SchoolIcon from '@mui/icons-material/School';
import { useAppSelector } from "@application/store";
import { SolicitantiAddDialog } from "../../Dialogs/SolicitantiAddDialog";
//import { SolicitantiUpdateDialog} from "../../Dialogs/SolicitantiUpdateDialog"
//import {UserUpdateDialog} from "../../Dialogs/UserUpdateDialog"
import { GetMeseriiDialog } from "../../Dialogs/GetMeseriiDialog";
import { GetStudiiDialog } from "../../Dialogs/GetStudiiDialog";

/**
 * 
 * This hook returns a header for the table with translated columns.
 */


export interface MeseriiProps {
    meserii:string[]; 
}

export interface StudiiProps {
    studii:string[]; 
}
const useHeader = (): { key: keyof SolicitantiDTO, name: string }[] => {
    const { formatMessage } = useIntl();

    return [
//        { key: "dataInregistare", name: formatMessage({ id: "globals.dataInregistare" }) },
        { key: "cnpSolicitant", name: formatMessage({ id: "globals.cnpSolicitant" }) },
        { key: "nume", name: formatMessage({ id: "globals.nume" }) },
        { key: "prenume", name: formatMessage({ id: "globals.prenume" }) },
        { key: "adresa", name: formatMessage({ id: "globals.adresa" }) }
    ]
};

/**
 * The values in the table are organized as rows so this function takes the entries and creates the row values ordering them according to the order map.
 */
const getRowValues = (entries: SolicitantiDTO[] | null | undefined, orderMap: { [key: string]: number }) =>
    entries?.map(
        entry => {
            return {
                entry: entry,
                data: Object.entries(entry).filter(([e]) => !isUndefined(orderMap[e])).sort(([a], [b]) => orderMap[a] - orderMap[b]).map(([key, value]) => { return { key, value } })
            }
        });

/**
 * Creates the user table.
 */
export const SolicitantiTable = () => {
    const { userId: ownUserId } = useAppSelector(x => x.profileReducer);
    const { formatMessage } = useIntl();
    const header = useHeader();
    const orderMap = header.reduce((acc, e, i) => { return { ...acc, [e.key]: i } }, {}) as { [key: string]: number }; // Get the header column order.
    const { handleChangePage, handleChangePageSize, pagedData, isError, isLoading, tryReload, labelDisplay ,getMeserii,getStudii,removeCorFromsolicitant,removeStudiiFromsolicitant,deleteSolicitanti,CorData,StudiiData} = useSolicitantiTableController(); // Use the controller hook.
    const rowValues = getRowValues(pagedData?.data, orderMap); // Get the row values.
    let  mes:string[] = CorData?.data.map((jobs) => { const job=jobs.meserie; return job})!; 
    let  stud:string[] = StudiiData?.data.map((studs) => { const stud=studs.denStudii; return stud})!; 
    return <DataLoadingContainer isError={isError} isLoading={isLoading} tryReload={tryReload}> {/* Wrap the table into the loading container because data will be fetched from the backend and is not immediately available.*/}
        <SolicitantiAddDialog /> {/* Add the button to open the Solicitanti add modal. */}
        {!isUndefined(pagedData) && !isUndefined(pagedData?.totalCount) && !isUndefined(pagedData?.page) && !isUndefined(pagedData?.pageSize) &&
            <TablePagination // Use the table pagination to add the navigation between the table pages.
                component="div"
                count={pagedData.totalCount} // Set the entry count returned from the backend.
                page={pagedData.totalCount !== 0 ? pagedData.page - 1 : 0} // Set the current page you are on.
                onPageChange={handleChangePage} // Set the callback to change the current page.
                rowsPerPage={pagedData.pageSize} // Set the current page size.
                onRowsPerPageChange={handleChangePageSize} // Set the callback to change the current page size. 
                labelRowsPerPage={formatMessage({ id: "labels.itemsPerPage" })}
                labelDisplayedRows={labelDisplay}
                showFirstButton
                showLastButton
            />}

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            header.map(e => <TableCell key={`header_${String(e.key)}`}>{e.name}</TableCell>) // Add the table header.
                        }
                        <TableCell>{formatMessage({ id: "globals.cnpCalificari" })}</TableCell>                       
                        <TableCell>{formatMessage({ id: "globals.cnpStudii" })}</TableCell>
                        <TableCell>{formatMessage({ id: "labels.actions" })}</TableCell> {/* Add additional header columns if needed. */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rowValues?.map(({ data, entry }, rowIndex) => <TableRow key={`row_${rowIndex + 1}`}>
                            {data.map((keyValue, index) => 
                            <TableCell key={`cell_${rowIndex + 1}_${index + 1}`}>
                                {keyValue.value}
                            </TableCell>)} {/* Add the row values. */}
                        <TableCell> { /*Add other cells like action buttons. */}
                            < GetMeseriiDialog  meserii= {mes}/>
                         </TableCell>
                         <TableCell> { /*Add other cells like action buttons. */}
                            < GetStudiiDialog  studii= {stud}/>
                         </TableCell>

                        <TableCell> {/* Add other cells like action buttons. */}
                            {entry.id !== ownUserId && <IconButton color="error" onClick={() => deleteSolicitanti(entry.id || '')}>
                                    <DeleteIcon color="error" fontSize='small' />
                                </IconButton>}
                        </TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </DataLoadingContainer >
}