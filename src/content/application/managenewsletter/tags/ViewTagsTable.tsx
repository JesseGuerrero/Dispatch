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
  const { subscribers } = useContext(NewsletterContext);
  const emails = Object.keys(subscribers)
  const [selectedSubscribers, setSelectedSubscribers] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedSubscribers.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);

  const handleSelectAllSubscribers = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedSubscribers(
      event.target.checked
        ? emails
        : []
    );
  };

  const handleSelectOneSubscriber = (
    event: ChangeEvent<HTMLInputElement>,
    emailKey: string
  ): void => {
    if (!selectedSubscribers.includes(emailKey)) {
      setSelectedSubscribers((prevSelected) => [
        ...prevSelected,
        emailKey
      ]);
    } else {
      setSelectedSubscribers((prevSelected) =>
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

  const selectedSomeCryptoOrders =
    selectedSubscribers.length > 0 &&
    selectedSubscribers.length < emails.length;
  const selectedAllCryptoOrders =
    selectedSubscribers.length === emails.length;
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
          title="Subscribers"
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
                  onChange={handleSelectAllSubscribers}
                />
              </TableCell>
              <TableCell>Tag</TableCell>
              <TableCell>Empty</TableCell>
              <TableCell>Empty</TableCell>
              <TableCell align="left">Count</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emails.map((email) => {
              const subscriber = subscribers[email];
              const isSubscriberSelected = selectedSubscribers.includes(
                  email
              );
              const tagsLine: string[] = subscriber.tags.reduce((acc, current, index) => {
                if (index % 3 === 0) {
                  acc.push(subscriber.tags.slice(index, index + 3).join(", "));
                }
                return acc;
              }, []);
              const coursesLine: string[] = subscriber.courses.reduce((acc, current, index) => {
                if (index % 3 === 0) {
                  acc.push(subscriber.courses.slice(index, index + 3).join(", "));
                }
                return acc;
              }, []);
              return (
                <TableRow
                  hover
                  key={email}
                  selected={isSubscriberSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isSubscriberSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneSubscriber(event, email)
                      }
                      value={isSubscriberSelected}
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
                      {email}
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
                      {subscriber.firstName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {tagsLine.map((tagLine) => (
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {tagLine}
                      </Typography>
                    ))}
                  </TableCell>
                  <TableCell align="left">
                    {coursesLine.map((courseLine) => (
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {courseLine}
                      </Typography>
                    ))}
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
