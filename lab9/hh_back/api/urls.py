from django.urls import path
from api.views import companies, company_id, c_by_v, vacancies, vacancy_id, vacancies_ten

urlpatterns = [
    path('companies/', companies),
    path('companies/<int:c_id>/', company_id),
    path('companies/<int:c_id>/vacancies/', c_by_v),
    path('vacancies/', vacancies),
    path('vacancies/<int:v_id>/', vacancy_id),
    path('vacancies/top_ten/', vacancies_ten)
]