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

1. Since the API schema was mentioned and the actual API link wasn't provided, I went ahead and created a JSON server which hosts an API. Link to JSON Server Repository: https://github.com/ShubhJoshi-557/JSON_Server
2. This API contains the desired schema and has dummy data of 10 users as per the mentioned requirement.
3. This data is generated using Faker.js library and can be accessed locally.
4. Screenshot of Dummy data from API.
![image](https://user-images.githubusercontent.com/62555809/209458662-f92c3545-9a08-4b02-a61d-98525cde262b.png)
5. The user image url is dynamically fetched according to their username from this API: https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy
6. Code Snippet: <br>
![image](https://user-images.githubusercontent.com/62555809/209458705-8be3bbd0-3d39-4503-9ab4-d82af1607572.png)
7. Screenshot:
![image](https://user-images.githubusercontent.com/62555809/209458722-1cd44e89-c09a-4a30-a410-9c59a08e66fb.png)
8. The UI framework used is Bootstrap and React-Bootstrap. 
9. While the API data is being fetched, a loading animation appears.
10. Source Code: https://tobiasahlin.com/spinkit/
![image](https://user-images.githubusercontent.com/62555809/209458830-8f5a7876-27f9-4225-bfe9-0861096767de.png)
11. Every card has a Like, Edit and Delete where they can be liked, edited and deleted respectively.
12. Clicking the Like button toggles it's state and changes it's color to red.
![image](https://user-images.githubusercontent.com/62555809/209458913-95216589-03a0-4e37-9e8a-e1ee50434398.png)
13. Upon clicking the Edit button, a modal pops up which contains the data of selected card and the card data can be updated by clicking the Save button
![image](https://user-images.githubusercontent.com/62555809/209458960-ba81d17f-2db2-4005-881b-030944116ea1.png)
14. Likewise upon clicking the Delete button, a modal pops up which confirms the deletion of the card by clicking the Yes button
![image](https://user-images.githubusercontent.com/62555809/209458969-29815ab2-c5ef-4513-a2ac-69f6b61149ec.png)
15. NOTE - All the data manipulation and deletion is done locally with the help of react, the modified data is not sent to the backend using a POST request because it was not mentioned in the problem statement.




