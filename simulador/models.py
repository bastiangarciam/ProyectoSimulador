from django.db import models
from django.urls import reverse
import uuid

# Create your models here.

class Consulta(models.Model):
    id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50)
    email = models.EmailField()
    mensaje = models.CharField(max_length=200)
    def __str__(self):
        return f'{self.id},{self.nombre},{self.email},{self.mensaje}'
    def get_absolute_url(self):
        return reverse('consulta-detail',args=[str(self.id)])