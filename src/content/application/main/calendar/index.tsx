import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Button, useTheme } from '@mui/material';
import Footer from 'src/components/Footer';
import { Calendar as BigCalendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Paper } from '@mui/material';

const localizer = momentLocalizer(moment);

function CustomToolbar({ label, onView, onNavigate, localizer }) {
    const theme = useTheme();
    const buttonStyle = {
        color: 'white', // Set the text color here
        backgroundColor: theme.palette.background.paper, // Set the background color if needed
    };

    return (
        <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <Button style={buttonStyle} onClick={() => onNavigate('TODAY')}>
          Today
        </Button>
      </span>
            <span className="rbc-toolbar-label">{label}</span>
            <span className="rbc-btn-group">
        <Button style={buttonStyle} onClick={() => onView('month')}>
          Month
        </Button>
        <Button style={buttonStyle} onClick={() => onView('week')}>
          Week
        </Button>
        <Button style={buttonStyle} onClick={() => onView('day')}>
          Day
        </Button>
      </span>
        </div>
    );
}

function Calendar() {
    const theme = useTheme();
    const formats = {
        dateFormat: 'DD',
        dayFormat: 'DD ddd',
        dayHeaderFormat: 'MMMM YYYY, DD ddd',
        // Add any other formats you need
    };
    // Function to customize event styles, including setting a different background color
    const eventStyleGetter = (event, start, end, isSelected) => {
        const backgroundColor = 'pink';
        const style = {
            backgroundColor,
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black',
            border: '0px',
            display: 'block',
        };
        return {
            style,
        };
    };

    const whiteDays = [
        moment().add(2, 'days').startOf('day').toDate(),
        moment().add(5, 'days').startOf('day').toDate(),
        // Add other dates as needed
    ];
    const dayStyleGetter = (date) => {
        const backgroundColor = theme.palette.background.paper;

        return {
            style: {
                backgroundColor,
            },
        };
    };

  return (
    <>
      <Helmet>
        <title>Calendar</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Calendar of emails"
          subHeading="Show all scheduled emails"
          docs="https://material-ui.com/components/text-fields/"
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
          <Paper style={{ height: 500, padding: 20, color: 'white' }}>
              <BigCalendar
                  localizer={localizer}
                  events={[
                      {
                          title: 'Event 1',
                          start: new Date(),
                          end: new Date(),
                      },
                      {
                          title: 'Event 2',
                          start: moment().add(1, 'days').toDate(),
                          end: moment().add(1, 'days').toDate(),
                      },
                  ]}
                  startAccessor="start"
                  endAccessor="end"
                  formats={formats}
                  eventPropGetter={eventStyleGetter}
                  dayPropGetter={dayStyleGetter}
                  components={{
                      toolbar: CustomToolbar, // Use the custom toolbar
                  }}
              />
          </Paper>
      </Container>
      <Footer />
    </>
  );
}

export default Calendar;
