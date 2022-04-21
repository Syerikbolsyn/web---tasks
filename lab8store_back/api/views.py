from django.shortcuts import render
from django.http.request import HttpRequest
from django.http.response import HttpResponse,JsonResponse
from api.models import Product,Category

# Create your views here.

def products_list(request):
    products = Product.objects.all()
    json_p = [p.to_json() for p in products]
    return JsonResponse(json_p, safe=False)

def product_id(request, p_id):
    try:
        product = Product.objects.get(id=p_id)
    except Product.DoesNotExist as e:
        return HttpResponse(f'<h2>{e}</h2>')
    return JsonResponse(product.to_json())

def categories_list(request):
    categories=Category.objects.all()
    js_c =[c.to_json() for c in categories]
    return JsonResponse(js_c, safe=False)

def category_id(request, c_id):
    try:
        category = Category.objects.get(id=c_id)
    except Category.DoesNotExist as e:
        return HttpResponse(f'<h2>{e}</h2>')
    return JsonResponse(category.to_json())

def p_by_c(request, c_id):
    products = Product.objects.all()
    j_p = [p.to_json() for p in products]
    p = []
    for i in j_p:
        if i['category_id'] == c_id:
            p.append(i.copy())
    if not p:
        return HttpResponse(f'<h2>Product DoesNotExist!!!</h2>')
    return JsonResponse(p, safe=False)
    # try:
    #     products = Product.objects.get(category_id=c_id)
    # except Product.DoesNotExist as e:
    #     return HttpResponse(f'<h2>{e}</h2>')
    # js_p = [p.to_json() for p in products]
    # return JsonResponse(products)
