# GUEST HOUSE BACKEND

## Description
This is the backend for the guest house project. It is a RESTful API that provides endpoints for the frontend to consume.

## Getting Started

- Install latest version of Python from [here](https://www.python.org/downloads/).

### With Poetry

- Install poetry using the command `pip install poetry`.
- Now run the following commands to start the server:

  ```bash
  poetry install
  poetry run python manage.py runserver
  ```

### Without Poetry

- Install the dependencies using the command `pip install -r requirements.txt`.
- Now run the following commands to start the server:

  ```bash
  python manage.py makemigrations
  python manage.py migrate
  python manage.py runserver
  ```

- Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.
- The API endpoints can be found [here](ENDPOINTS.md).
