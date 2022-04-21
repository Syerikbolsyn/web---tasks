from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=2000)
    price = models.FloatField()
    discription = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category_id = models.IntegerField()
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'discription': self.discription,
            'count':self.count,
            'is_active': self.is_active,
            'category_id': self.category_id
        }

class Category(models.Model):
    name = models.CharField(max_length=230)
    def to_json(self):
        return {
            'category_id':self.id,
            'name': self.name
        }