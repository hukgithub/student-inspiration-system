from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLES = (
        ('STUDENT', 'Student'),
        ('TEACHER', 'Teacher'),
        ('PRINCIPAL', 'Principal'),
        ('PARENT', 'Parent'),
        ('SPONSOR', 'Sponsor'),
    )
    role = models.CharField(max_length=10, choices=ROLES, default='STUDENT')
    superhero_name = models.CharField(max_length=100, unique=True)
    avatar = models.URLField(blank=True)
    school_id = models.CharField(max_length=50, blank=True)  # For principals/teachers

    def __str__(self):
        return self.superhero_name
