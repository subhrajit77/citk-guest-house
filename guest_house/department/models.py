from django.db import models

# Create your models here.

class Department(models.Model):
    dept_choices = {
        "CSE": "CSE",
        "ECE": "ECE",
        "IE": "IE",
        "CE": "CE",
        "FET": "FET",
        "MCD": "MCD",
    }
    dept_id = models.CharField(
        primary_key=True, max_length=5, choices=dept_choices, default="CSE"
    )
    # add options like cse,mcd for dept_id
    hod = models.CharField(max_length=100)
    contact = models.CharField(max_length=10)
    email = models.EmailField(max_length=30)
