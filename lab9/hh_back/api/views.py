from django.shortcuts import render

from django.http.request import HttpRequest
from django.http.response import HttpResponse, JsonResponse
# Create your views here.
from api.models import Company, Vacancy

def companies(request):
    companies = Company.objects.all()
    js_c = [c.to_json() for c in companies]
    return JsonResponse(js_c, safe=False)

def company_id(request, c_id):
    try:
        js_c = Company.objects.get(id=c_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message':str(e)} , status = 400)
    return JsonResponse(js_c.to_json(), safe=False)

def c_by_v(request, c_id):
    try:
        company = Company.objects.get(id=c_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message':str(e)} , status = 400)
    vac = company.vacancy_set.all()
    vacancies = [v.to_json() for v in vac]
    return JsonResponse(vacancies, safe=False)

def vacancies(request):
    vac = Vacancy.objects.all()
    js_v = [v.to_json() for v in vac]
    return JsonResponse(js_v, safe=False)

def vacancy_id(request, v_id):
    try:
        js_v = Vacancy.objects.get(id=v_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message':str(e)} , status = 400)
    return JsonResponse(js_v.to_json(), safe=True )

def vacancies_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')
    j_v = [v.to_json() for v in vacancies]
    return JsonResponse(j_v[:10], safe=False)