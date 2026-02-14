# TaskFlow API Overview

Base URL:
https://api.taskflow.com/v1

---

## Authentication

All requests require a Bearer token.

Example header:

Authorization: Bearer <api_token>

---

## Get All Projects

**GET** /projects

### Response

```json
{
  "projects": [
    {
      "id": "12345",
      "name": "Website Redesign",
      "status": "Active"
    }
  ]
}

---

## Error Codes

| Code | Description  |
| ---- | ------------ |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 404  | Not Found    |
| 500  | Server Error |
