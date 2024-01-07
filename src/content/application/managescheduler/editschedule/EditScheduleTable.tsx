import React, {FC, ChangeEvent, useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Typography,
  useTheme,
  CardHeader, TextareaAutosize
} from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';
import {NewsletterContext} from "../../../../contexts/NewsletterContext";
import StyledTextareaAutosize from "../../../../components/EditableTextArea";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";

const EditScheduleTable: FC = () => {
  const { schedule } = useContext(NewsletterContext);
  const scheduleIndices = Array.from({ length: schedule.length }, (_, index) => index);
  const [selectedSchedule, setSelectedSchedule] = useState<number[]>(
    []
  );
  const selectedBulkActions = selectedSchedule.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);

  const handleSelectAllSchedule = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedSchedule(
      event.target.checked
        ? scheduleIndices
        : []
    );
  };

  const handleSelectOneSchedule = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (!selectedSchedule.includes(index)) {
      setSelectedSchedule((prevSelected) => [
        ...prevSelected,
        index
      ]);
    } else {
      setSelectedSchedule((prevSelected) =>
        prevSelected.filter((key) => key !== index)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const selectedSomeCryptoOrders =
    selectedSchedule.length > 0 &&
    selectedSchedule.length < scheduleIndices.length;
  const selectedAllCryptoOrders =
    selectedSchedule.length === scheduleIndices.length;
  const theme = useTheme();

  return (
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <CardHeader
          title="Schedule"
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllCryptoOrders}
                  indeterminate={selectedSomeCryptoOrders}
                  onChange={handleSelectAllSchedule}
                />
              </TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduleIndices.map((index) => {
              const event = schedule[index];
              const isEventSelected = selectedSchedule.includes(
                  index
              );
              return (
                <TableRow
                  hover
                  key={index}
                  selected={isEventSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isEventSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneSchedule(event, index)
                      }
                      value={isEventSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {event.email.subject}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                          value={event.date}
                      />
                    </LocalizationProvider>
                  </TableCell>
                  <TableCell>
                      <StyledTextareaAutosize
                          value={event.tag.join(", ")}
                      />
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Save Edits" arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <SaveIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Order" arrow>
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: theme.palette.error.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={scheduleIndices.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

EditScheduleTable.propTypes = {
  emails: PropTypes.array.isRequired
};

EditScheduleTable.defaultProps = {
  emails: []
};

export default EditScheduleTable;
