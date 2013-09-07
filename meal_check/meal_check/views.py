from django.http import HttpResponse
from django.template import RequestContext, loader
from womblings.models import Member

def index(request):
    member_list = Member.objects.order_by('puid')[:5]
    template = loader.get_template('meal_check/index.html')
    context = RequestContext(request, {
        'members' : member_list,
    })
    return HttpResponse(template.render(context))