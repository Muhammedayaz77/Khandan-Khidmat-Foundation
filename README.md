# Khandan Khidmat Foundation Mission

Website and member-management system for Khandan Khidmat Foundation Mission.

## V1 scope
- Public foundation website
- Member and Manager login
- Member dashboard with collection, expense and balance visibility
- Manager dashboard for member management
- Manager controls for income/collection and expense entries
- Controlled content management API
- SQLite for local development
- MySQL-compatible production database configuration

## Project structure

```text
web/
├── Backend/
│   ├── main.py
│   ├── config.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── security.py
│   ├── dependencies.py
│   └── routers/
├── View/
│   ├── Public/
│   ├── Auth/
│   ├── Member/
│   └── Manager/
├── Assets/
│   ├── css/
│   └── js/
├── .env.example
└── requirements.txt
```

## Roles

### Member
Can sign in and view authorised financial summaries and transaction records.

### Manager
Can sign in, add/manage members, record income/collection, record expenses and update controlled content.

## Security notes
- No real credentials are committed to GitHub.
- Set a strong `JWT_SECRET` and manager credentials in the deployment environment.
- Private member phone numbers and other sensitive internal information are not published on public pages.

## Development
GitHub is the source of truth for V1. Live deployment will happen only after the GitHub version is reviewed and approved.
