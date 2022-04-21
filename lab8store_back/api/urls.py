from django.urls import path,re_path
from api.views import products_list, product_id,categories_list,category_id,p_by_c


urlpatterns = [
    path('products/', products_list),
    path('products/<int:p_id>/', product_id),

    path('categories/', categories_list),
    path('categories/<int:c_id>/', category_id),
    path('categories/<int:c_id>/products/', p_by_c)
]