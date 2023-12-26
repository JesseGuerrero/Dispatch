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
- Create tags json according to Mongo, use context
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
- Create email-list json according to Mongo, use context
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
  - View Subscribers
    - Do transaction list with tags & courses, sort backend side with pagination later
    - Delete here too
  - Add Subscriber (all empty here...)
    - Simple add email and first name form
  - Edit Subscriber
    - Same as view subscriber but tags and courses are editable
  - Delete Subscriber (Delete this)
  - View Subscriber Statistics (Do this one later, but keep the button)
  - Add empty tag
  - Add email to tags
  - Remove email from tags
  - Delete tag
- Scheduler by tag (Empty endpoints)
- Create course json according to Mongo, use context
- Manage Courses (empty endpoints)
- Email writer
  - Writer
  - Preview
  - Templating

**--Write backend and security for all the above from top to bottom**

*Write daemons in Spring Boot*
