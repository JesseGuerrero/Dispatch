import {FC, ChangeEvent, useState, useContext} from 'react';
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
  CardHeader, MenuItem, Select
} from '@mui/material';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';
import {NewsletterContext} from "../../../../contexts/NewsletterContext";
import StyledTextareaAutosize from "../../../../components/EditableTextArea";

const ViewStageTable: FC = () => {
  const { courses } = useContext(NewsletterContext); //Create an api response which calls one course by name
  const url = window.location.href;
  const parts =url.split('/');
  const rightmostPart = parts[parts.length - 1];
  let course;
  courses.filter((c) => {
    if(c.courseName === rightmostPart){
      course = c;
    }
  });

  const stageIndices = Object.keys(course.stages);
  const [selectedStages, setSelectedStages] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedStages.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);

  const handleSelectAllStages = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedStages(
      event.target.checked
        ? stageIndices
        : []
    );
  };

  const handleSelectOneStage = (
    event: ChangeEvent<HTMLInputElement>,
    index: string
  ): void => {
    if (!selectedStages.includes(index)) {
      setSelectedStages((prevSelected) => [
        ...prevSelected,
        index
      ]);
    } else {
      setSelectedStages((prevSelected) =>
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

  const selectedSomeStages =
    selectedStages.length > 0 &&
    selectedStages.length < stageIndices.length;
  const selectedAllCourses =
    selectedStages.length === stageIndices.length;
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
          title="Series"
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
                  checked={selectedAllCourses}
                  indeterminate={selectedSomeStages}
                  onChange={handleSelectAllStages}
                />
              </TableCell>
              <TableCell>Emails</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stageIndices.map((day) => {
              const stageEmails = course.stages[day];
              const email = course.emails[parseInt(day)-1];

              const isStageSelected = selectedStages.includes(
                  day
              );

              return (
                <TableRow
                  hover
                  key={day}
                  selected={isStageSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isStageSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneStage(event, day)
                      }
                      value={isStageSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Select
                        value={email.subject}
                        onChange={(event) => {
                          // Handle the change here if needed
                        }}
                        fullWidth
                        displayEmpty
                    >
                      {/* You can map over your options and create MenuItems dynamically */}
                      <MenuItem value="" disabled>Select an email subject</MenuItem>
                      <MenuItem value="subject1">Subject 1</MenuItem>
                      <MenuItem value="subject2">Subject 2</MenuItem>
                      {/* Add more options as needed */}
                    </Select>
                  </TableCell>
                  <TableCell>
                      <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                      >
                        {day}
                      </Typography>
                  </TableCell>
                  <TableCell>
                    <StyledTextareaAutosize
                        value={stageEmails.join(", ")}
                    />
                  </TableCell>

                  <TableCell align="right">
                    <Tooltip title="Delete Course" arrow>
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
          count={stageIndices.length}
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

ViewStageTable.propTypes = {
  emails: PropTypes.array.isRequired
};

ViewStageTable.defaultProps = {
  emails: []
};

export default ViewStageTable;
