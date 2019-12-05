from django.shortcuts import render
from django.views import generic
from django.views.generic.edit import CreateView,UpdateView,DeleteView
from django.urls import reverse_lazy
from .models import Consulta

# Create your views here.

def index(request):
    return render(request,'index.html')

def contacto(request):
    return render(request,'contacto.html')

def prueba(request):
    return render(request,'prueba.html')



class ListarConsultaVista(generic.ListView):
    model	=	Consulta
    context_object_name ='consulta_list' # your own name	for	the	list as	a template	variable
    template_name =	'simulador/consulta_list.html'


class ConsultaCreate(CreateView):
    model = Consulta
    fields= '__all__'


class ConsultaUpdate(UpdateView):
    model = Consulta
    fields = ['id','nombre','email','mensaje']


class ConsultaDelete(DeleteView):
    model = Consulta
    success_url= reverse_lazy('consulta')

class ConsultaDetailView(generic.DeleteView):
    model = Consulta    