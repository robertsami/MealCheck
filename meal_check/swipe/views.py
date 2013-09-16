# Create your views here.
from django.http import HttpResponse
from django.template import RequestContext, loader
from womblings.models import Member

def index(request):
    member_list = Member.objects.order_by('puid')[:5]
    template = loader.get_template('swipe/index.html')
    context = RequestContext(request, {
        'members' : member_list,
    })
    return HttpResponse(template.render(context))

def verify(request):
    first_name = request.GET.get('first_name')
    last_name = request.GET.get('last_name')
    puid = request.GET.get('puid')
    print puid

    try:
        print Member.objects.get(puid=puid)
        return HttpResponse("member")
    except:
        return HttpResponse("not member")