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

import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';
import {NewsletterContext} from "../../../../contexts/NewsletterContext";

const ViewTagsTable: FC = () => {
  const { subscribers, tags } = useContext(NewsletterContext);
  const emails = Object.keys(subscribers)
  const tagsList = Object.keys(tags)
  const [selectedTags, setSelectedTags] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedTags.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);

  const handleSelectAllTags = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedTags(
      event.target.checked
        ? tagsList
        : []
    );
  };

  const handleSelectOneTag = (
    event: ChangeEvent<HTMLInputElement>,
    emailKey: string
  ): void => {
    if (!selectedTags.includes(emailKey)) {
      setSelectedTags((prevSelected) => [
        ...prevSelected,
        emailKey
      ]);
    } else {
      setSelectedTags((prevSelected) =>
        prevSelected.filter((key) => key !== emailKey)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const selectedSomeTags =
    selectedTags.length > 0 &&
    selectedTags.length < emails.length;
  const selectedAllCryptoOrders =
    selectedTags.length === emails.length;
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
          title="Tags"
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
                  indeterminate={selectedSomeTags}
                  onChange={handleSelectAllTags}
                />
              </TableCell>
              <TableCell>Tag</TableCell>
              <TableCell align="left">Count</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tagsList.map((tag) => {
              const isTagSelected = selectedTags.includes(
                  tag
              );
              return (
                <TableRow
                  hover
                  key={tag}
                  selected={isTagSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isTagSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneTag(event, tag)
                      }
                      value={isTagSelected}
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
                      {tag}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {1}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
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
          count={emails.length}
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

ViewTagsTable.propTypes = {
  emails: PropTypes.array.isRequired
};

ViewTagsTable.defaultProps = {
  emails: []
};

export default ViewTagsTable;
