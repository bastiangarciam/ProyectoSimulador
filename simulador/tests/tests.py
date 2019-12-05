from django.test import TestCase
from simulador.models import Consulta


class UsuarioModelTest(TestCase):
    @classmethod
    def setUpData(cls):
        Consulta.objects.create(id=10,nombre = "Cesar",email="jnomartinez99@gmail.com", mensaje="soy un mensajito indefenso")
    def test_nombre_label(self):
        consu= Consulta.objects.get(nombre = 'Cesar')
        field_label = consu._meta.get_field('nombre').verbose_name
        self.assertEquals(field_label,'nombre')