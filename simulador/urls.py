from django.urls import path 
from . import views 
from django.conf.urls import include
 
urlpatterns = [ 
    path('accounts/', include('django.contrib.auth.urls')),
    path('',views.index,name='index'),
    path('consulta/',views.ListarConsultaVista.as_view(),name='consulta'),
    path('consulta/<int:pk>',views.ListarConsultaVista.as_view(),name='consulta-detail'),
    path('prueba/',views.prueba,name='prueba'),
    path('contacto/',views.contacto,name='contacto'),
] 


urlpatterns += [ 
    path('consulta/create',views.ConsultaCreate.as_view(),name='consulta_create'),
    path('consulta/<int:pk>/update',views.ConsultaUpdate.as_view(),name='consulta_update'),
    path('consulta/<int:pk>/delete',views.ConsultaDelete.as_view(),name='consulta_delete'),
  
] 