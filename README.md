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

