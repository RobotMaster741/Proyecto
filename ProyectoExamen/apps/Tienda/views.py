from django.shortcuts import render, HttpResponse

# Create your views here.


def cargarInicio(request):
    return render(request,'./templates/index.hmtl')