from django.db import models

class Footer_text(models.Model):
    text = models.TextField()
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name

class Footer_contacts(models.Model):
    name = models.CharField(max_length=30)
    mail = models.CharField(max_length=30)
    phone = models.CharField(max_length=30)
    adress = models.TextField()
    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.CharField(max_length=10)
    price = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    image = models.CharField(max_length=100)
    def __str__(self):
        return self.name