# LogiNext Case Study

## Problem Statement

- Build a single page that displays the profile of 10 users (the data is obtained from an open API ). Each
user's profile contains an avatar picture, name, email, phone, address, website and company name. Beneath
the profile are 3 action buttons to like, edit and delete. Upon clicking the edit button , a modal window
should pop up and display information about the edited profile and the user should be allowed to edit the
information. Upon clicking the like button , the button should be toggled. Upon clicking delete, a
confirmation popup should display and upon confirmation, should delete the card.

- API endpoint for users data
- The schema of the data received in the response is:

```// Array of 10 users
[
  {
    id, // The user's id
    username,
    name,
    email,
    phone,
    website,
    address: {
      street, // Address line 1
      suite, // Address line 2
      city,
      zipcode
    },
    company: {
      name, // The name of company where the user works
    }
  }
]
```

- API for avatars: https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy
- Source Code for Loading Animation: https://tobiasahlin.com/spinkit/

## Desired Output

![image](https://user-images.githubusercontent.com/62555809/209458561-08e4a200-a16f-455b-8bf2-b7484f4487c5.png)
![image](https://user-images.githubusercontent.com/62555809/209458569-c6f5952f-03d5-4815-973d-f6188fa7467e.png)

## Solution

1. Since the API schema was mentioned and the actual API link wasn't provided, I went ahead and created a JSON server which hosts an API.
2. This API contains the desired schema and has dummy data of 10 users as per the mentioned requirement.
3. This data is generated using Faker.js library and can be accessed locally.
4. Screenshot of Dummy data from API.
![image](https://user-images.githubusercontent.com/62555809/209458662-f92c3545-9a08-4b02-a61d-98525cde262b.png)
5. The user image url is dynamically fetched according to their username:
6. Code Snippet:
![image](https://user-images.githubusercontent.com/62555809/209458705-8be3bbd0-3d39-4503-9ab4-d82af1607572.png)
7. Screenshot:
![image](https://user-images.githubusercontent.com/62555809/209458722-1cd44e89-c09a-4a30-a410-9c59a08e66fb.png)
 




