# Project TODO List

## General Rules
- Follow Google Material Design guidelines.
- Work majorly with empty endpoints unless you cannot.
- Replace all empty endpoints by using a singular JSON file object.
- Use dark themes

## TODO

### 1. Find a few templates using Material UI
- <s>Landing Page: Find a Material UI dark typescript landing to login/register</s>
- <s>Dashboard/Form: Tokyo Free Black React Typescript Admin Dashboard</s>
- <s>Login/register: Find one, add forgot password after</s>

### 2. Put together Material UI templates into this project
- <s>Landing Page</s>
- <s>Login/register</s>
- <s>Dashboard/Form</s>

### 3. Design full frontend in this order
- <s>Home</s>
- <s>Login</s> (With backend, unlock different header when logged in)
  - (After all frontend)Create check session, https://chat.openai.com/share/4126b409-14a1-41a8-8122-08ae894d26b2
  - Session invalid, redirect to login
- <s>Register</s> (With backend)
- <s>Logout</s> (With backend)
- <s>Forgot Password</s> (Empty endpoints)
- <s>Broadcast</s> (Empty endpoints)
  - Send by tag and username (Empty endpoints)
- <s>Empty user, hide all but overview</s>
  - <s>Make a user json that can be manipulated as empty or nonempty</s>
- <s>Create user login</s>
- <s>Create user register</s>
- <s>Create user forgot password</s>
- <s>User Settings (Empty endpoints)</s><br>
  ![Settings](https://i.imgur.com/7pQwyuk.png)
- <s>Create tags json according to Mongo, use context</s>
```JSON
{
  "tags": [
    {
      "name": "tag1",
      "emails": [
        "email1",
        "email2"
      ]
    },
    {
      "name": "tag2",
      "emails": [
        "email1",
        "email2"
      ]
    }
  ]
}
```
- <s>Create email-list json according to Mongo, use context</s>
```JSON
[
  {
    "email": "email1",
    "firstName": "firstName1"
  },
  {
    "email": "email2",
    "firstName": "firstName2"
  }
]
```
- Manage Subscribers (Make interactive without backend, use empty endpoints)
  - <s>View Subscribers</s>
    - <s>Do transaction list with tags & courses, sort backend side with pagination later</s>
    - <s>Delete here too</s>
  - <s>Add Subscriber</s> (all empty here...)
    - <s>Simple add email and first name form</s>
  - <s>Edit Subscriber</s>
    - <s>Same as view subscriber but tags and courses are editable</s>
  - <s>Delete Subscriber</s> (Delete this)
  - <s>Add empty tag</s>
  - <s>Add email to tags</s>
  - <s>Remove email from tags</s>
  - <s>Delete tag</s>
- Scheduler by tag (Empty endpoints)
  - Make a date picker with default date from json
- Triggers: First subscribe, added to tag, days in newsletter, days without email, date
  - Actions: Send email, add to tag, remove from tag, start series, stop series
- Create course json according to Mongo, use context
- Manage Courses (empty endpoints)
- Email writer
  - Writer
  - Preview
  - Templating
- Redo in Figma
  - Landing Page
  - Login/register
  - Dashboard/Form
*Create a mongo view for the calendar
**--Write backend and security for all the above from top to bottom**

*Write daemons in Spring Boot*
