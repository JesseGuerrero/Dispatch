import { useContext } from 'react';

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem
} from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import CameraFrontTwoToneIcon from '@mui/icons-material/CameraFrontTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);

  return (
    <>
      <MenuWrapper>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to="/Dispatch/dashboard/"
                    startIcon={<DesignServicesTwoToneIcon />}
                >
                  Overview
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="broadcast"
                  startIcon={<DesignServicesTwoToneIcon />}
                >
                  Broadcast
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
            component="div"
            subheader={
              <ListSubheader component="div" disableSticky>
                Write Email
              </ListSubheader>
            }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to="create-email"
                    startIcon={<BrightnessLowTwoToneIcon />}
                >
                  Create Email
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to="edit-email"
                    startIcon={<MmsTwoToneIcon />}
                >
                  Edit Email
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to="delete-email"
                    startIcon={<MmsTwoToneIcon />}
                >
                  Delete Email
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
            component="div"
            subheader={
              <ListSubheader component="div" disableSticky>
                Manage Scheduler
              </ListSubheader>
            }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to="schedule-email"
                    startIcon={<BrightnessLowTwoToneIcon />}
                >
                  Schedule Email
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to="edit-schedule"
                    startIcon={<MmsTwoToneIcon />}
                >
                  Edit Schedule
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to="delete-schedule"
                    startIcon={<MmsTwoToneIcon />}
                >
                  Delete Schedule
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
            component="div"
            subheader={
              <ListSubheader component="div" disableSticky>
                Manage Courses
              </ListSubheader>
            }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to="create-course"
                    startIcon={<BrightnessLowTwoToneIcon />}
                >
                  Create Course
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to="edit-course"
                    startIcon={<MmsTwoToneIcon />}
                >
                  Edit Course
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to="delete-course"
                    startIcon={<MmsTwoToneIcon />}
                >
                  Delete Course
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Manage Newsletter
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="view-subscribers"
                  startIcon={<BrightnessLowTwoToneIcon />}
                >
                  Subscribers
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to="add-subscribers"
                    startIcon={<BrightnessLowTwoToneIcon />}
                >
                  Add Subscriber
                </Button>
              </ListItem>

              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="edit-subscribers"
                  startIcon={<MmsTwoToneIcon />}
                >
                  Edit subscriber
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="delete-subscriber"
                  startIcon={<BrightnessLowTwoToneIcon />}
                >
                  Delete Subscriber
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="subscriber-statistics"
                  startIcon={<BrightnessLowTwoToneIcon />}
                >
                  Subscriber Statistics
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to="add-tag"
                    startIcon={<BrightnessLowTwoToneIcon />}
                >
                  Add tag
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="add-email-to-tag"
                  startIcon={<MmsTwoToneIcon />}
                >
                  Add email to tag
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="remove-email-from-tags"
                  startIcon={<MmsTwoToneIcon />}
                >
                  Remove email from tags
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="delete-tag"
                  startIcon={<MmsTwoToneIcon />}
                >
                  Delete tag
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
