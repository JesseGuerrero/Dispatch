import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import SidebarLayout2 from 'src/layouts/SidebarLayout2';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Public Pages
const Home = Loader(lazy(() => import('src/content/overview')));
const LoginPage = Loader(lazy(() => import('src/content/auth/login')));
const SignupPage = Loader(lazy(() => import('src/content/auth/signup')));
const ForgotPasswordPage = Loader(lazy(() => import('src/content/auth/forgotpassword')));


//---Application---

// Main
const Broadcast = Loader(lazy(() => import('src/content/application/main/broadcast')));
const Calendar = Loader(lazy(() => import('src/content/application/main/calendar')));
const ChooseUser = Loader(lazy(() => import('src/content/application/main/chooseuser')));
const Overview= Loader(lazy(() => import('src/content/application/main/overview')));
const Settings = Loader(lazy(() => import('src/content/application/main/settings')));

//Manage Courses
const Course = Loader(lazy(() => import('src/content/application/manageseries/course')));
const Series = Loader(lazy(() => import('src/content/application/manageseries/series')));
const CreateSeries = Loader(lazy(() => import('src/content/application/manageseries/createseries')));
const DeleteSeries = Loader(lazy(() => import('src/content/application/manageseries/deleteseries')));

//Manage Newsletter
const AddEmailToTag = Loader(lazy(() => import('src/content/application/managenewsletter/addemailtotag')));
const AddSubscribers = Loader(lazy(() => import('src/content/application/managenewsletter/addsubscriber')));
const AddTag = Loader(lazy(() => import('src/content/application/managenewsletter/addtag')));
const EditSubscribers = Loader(lazy(() => import('src/content/application/managenewsletter/editsubscriber')));
const RemoveEmailFromTags = Loader(lazy(() => import('src/content/application/managenewsletter/removeemailfromtags')));
const Subscribers = Loader(lazy(() => import('src/content/application/managenewsletter/subscribers')));
const SubscriberStatistics = Loader(lazy(() => import('src/content/application/managenewsletter/subscriberstatistics')));
const Tags = Loader(lazy(() => import('src/content/application/managenewsletter/tags')));

//Manage Scheduler
const EditSchedule = Loader(lazy(() => import('src/content/application/managescheduler/editschedule')));
const EditTrigger = Loader(lazy(() => import('src/content/application/managescheduler/edittrigger')));
const ScheduleEmail = Loader(lazy(() => import('src/content/application/managescheduler/scheduleemail')));
const CreateTrigger = Loader(lazy(() => import('src/content/application/managescheduler/createtrigger')));

//Write Email
const CreateEmail = Loader(lazy(() => import('src/content/application/writeemail/createemail')));
const DeleteEmail = Loader(lazy(() => import('src/content/application/writeemail/deleteemail')));
const EditEmail = Loader(lazy(() => import('src/content/application/writeemail/editemail')));

//---------

// Dashboards

const Tasks = Loader(lazy(() => import('src/content/dashboards/Tasks')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);
const Transactions = Loader(
  lazy(() => import('src/content/applications/Transactions'))
);
const UserProfile = Loader(
  lazy(() => import('src/content/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('src/content/applications/Users/settings'))
);

// Components

const Buttons = Loader(
  lazy(() => import('src/content/pages/Components/Buttons'))
);
const Modals = Loader(
  lazy(() => import('src/content/pages/Components/Modals'))
);
const Accordions = Loader(
  lazy(() => import('src/content/pages/Components/Accordions'))
);
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Badges = Loader(
  lazy(() => import('src/content/pages/Components/Badges'))
);
const Tooltips = Loader(
  lazy(() => import('src/content/pages/Components/Tooltips'))
);
const Avatars = Loader(
  lazy(() => import('src/content/pages/Components/Avatars'))
);
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);

const routes: RouteObject[] = [
  {
    path: 'Dispatch',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <SignupPage />
      },
      {
        path: 'forgot-password',
        element: <ForgotPasswordPage />
      },
      {
        path: 'dashboard',
        element: <SidebarLayout />,
        children: [
          {
            path: '',
            element: <Overview />
          },
          {
            path: 'overview',
            element: <Navigate to="" replace />
          },
          {
            path: 'broadcast',
            element: <Broadcast />
          },
          {
            path: 'calendar',
            element: <Calendar />
          },
          {
            path: 'choose-user',
            element: <ChooseUser />
          },
          {
            path: 'settings',
            element: <Settings />
          },
          {
            path: 'view-series',
            children: [
              {
                path: '',
                element: <Series />
              },
              {
                path: '*',
                element: <Course />
              }
            ]
          },
          {
            path: 'create-trigger',
            element: <CreateTrigger />
          },
          {
            path: 'edit-trigger',
            element: <EditTrigger />
          },
          {
            path: 'create-series',
            element: <CreateSeries />
          },
          {
            path: 'delete-series',
            element: <DeleteSeries />
          },
          {
            path: 'add-email-to-tag',
            element: <AddEmailToTag />
          },
          {
            path: 'add-subscribers',
            element: <AddSubscribers />
          },
          {
            path: 'add-tag',
            element: <AddTag />
          },
          {
            path: 'view-tags',
            element: <Tags />
          },
          {
            path: 'edit-subscribers',
            element: <EditSubscribers />
          },
          {
            path: 'remove-email-from-tags',
            element: <RemoveEmailFromTags />
          },
          {
            path: 'view-subscribers',
            element: <Subscribers />
          },
          {
            path: 'subscriber-statistics',
            element: <SubscriberStatistics />
          },
          {
            path: 'edit-schedule',
            element: <EditSchedule />
          },
          {
            path: 'schedule-email',
            element: <ScheduleEmail />
          },
          {
            path: 'create-email',
            element: <CreateEmail />
          },
          {
            path: 'edit-email',
            element: <EditEmail />
          },
          {
            path: 'delete-email',
            element: <DeleteEmail />
          }
        ]
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout2 />,
    children: [
      {
        path: '',
        element: <Navigate to="tasks" replace />
      },
      {
        path: 'tasks',
        element: <Tasks />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout2 />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: <UserProfile />
          },
          {
            path: 'settings',
            element: <UserSettings />
          }
        ]
      }
    ]
  },
  {
    path: 'components',
    element: <SidebarLayout2 />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      }
    ]
  },
  {
    path: 'status',
    children: [
      {
        path: '',
        element: <Navigate to="404" replace />
      },
      {
        path: '404',
        element: <Status404 />
      },
      {
        path: '500',
        element: <Status500 />
      },
      {
        path: 'maintenance',
        element: <StatusMaintenance />
      },
      {
        path: 'coming-soon',
        element: <StatusComingSoon />
      }
    ]
  },
  {
    path: '*',
    element: <Status404 />
  }
];


export default routes;
