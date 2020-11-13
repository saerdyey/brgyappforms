from django.db import models

# Create your models here.


class Form(models.Model):
    fname = models.CharField(max_length=50)
    mname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    address = models.CharField(max_length=200)
    mobile = models.CharField(max_length=200)

    def __str__(self):
        return self.fname
