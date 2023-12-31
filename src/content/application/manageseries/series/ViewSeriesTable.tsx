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
  CardHeader
} from '@mui/material';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';
import {NewsletterContext} from "../../../../contexts/NewsletterContext";

const ViewSeriesTable: FC = () => {
  const { courses } = useContext(NewsletterContext);
  const courseIndices = Array.from({ length: courses.length }, (_, index) => index);
  const [selectedCourses, setSelectedCourses] = useState<number[]>(
    []
  );
  const selectedBulkActions = selectedCourses.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);

  const handleSelectAllCourses = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCourses(
      event.target.checked
        ? courseIndices
        : []
    );
  };

  const handleSelectOneSubscriber = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (!selectedCourses.includes(index)) {
      setSelectedCourses((prevSelected) => [
        ...prevSelected,
        index
      ]);
    } else {
      setSelectedCourses((prevSelected) =>
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

  const selectedSomeCourses =
    selectedCourses.length > 0 &&
    selectedCourses.length < courseIndices.length;
  const selectedAllCourses =
    selectedCourses.length === courseIndices.length;
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
                  indeterminate={selectedSomeCourses}
                  onChange={handleSelectAllCourses}
                />
              </TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courseIndices.map((index) => {
              const course = courses[index];
              const isCourseSelected = selectedCourses.includes(
                  index
              );

              return (
                <TableRow
                  hover
                  key={index}
                  selected={isCourseSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isCourseSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneSubscriber(event, index)
                      }
                      value={isCourseSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <a href={"view-series/" + course.courseName}>
                      <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                      >
                        {course.courseName}
                      </Typography>
                    </a>
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
          count={courseIndices.length}
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

ViewSeriesTable.propTypes = {
  emails: PropTypes.array.isRequired
};

ViewSeriesTable.defaultProps = {
  emails: []
};

export default ViewSeriesTable;
