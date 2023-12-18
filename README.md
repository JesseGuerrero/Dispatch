# Project TODO List

## General Rules
- Follow Google Material Design guidelines.
- Work majorly with empty endpoints unless you cannot.
- Replace all empty endpoints by using a singular JSON file object.
- Use dark themes

## TODO

### 1. Find a few templates using Material UI
- Landing Page: Find a Material UI dark typescript landing to login/register
- <s>Dashboard/Form: Tokyo Free Black React Typescript Admin Dashboard</s>
- Login/register: Find one, add forgot password after

### 2. Put together Material UI templates into this project
- Landing Page
- Login/register -> Just do a basic link to dashboard/form
- Dashboard/Form

### 3. Design full frontend in this order
- Home
- Login (With backend, unlock different header when logged in)
  - Create check session, https://chat.openai.com/share/4126b409-14a1-41a8-8122-08ae894d26b2
  - Session invalid, redirect to login
- Register (With backend)
- Logout (With backend)
- Forgot Password (Empty endpoints)
- Broadcast (Empty endpoints)
  - Send by tag and username (Empty endpoints)
- Settings (Empty endpoints) <br>
  ![Settings](https://i.imgur.com/7pQwyuk.png)
- Temp (Empty endpoints) <br>
  ![Temp](https://i.imgur.com/8hmCWqB.png)
- Scheduler by tag (Empty endpoints)
- Manage Subscribers (Make interactive without backend, use empty endpoints)
  - View Subscribers
  - Add Subscriber (all empty here...)
  - Edit Subscriber
  - Delete Subscriber
  - View Subscriber Statistics
  - Add empty tag
  - Add email to tags
  - Remove email from tags
  - Delete tag
- Delete test page
- Manage Courses (empty endpoints)
- Email writer
  - Writer
  - Preview
  - Templating

**--Write backend and security for all the above from top to bottom**

*Write daemons in Spring Boot*
