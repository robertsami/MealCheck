from django.contrib import admin
from womblings.models import Member, Permission, Club

class PermissionInline(admin.StackedInline):
	model = Permission
	max_num = 1

class MemberAdmin(admin.ModelAdmin):
	#readonly_fields = ('puid',)
	inlines = [PermissionInline]
	list_display = ('last_name', 'first_name', 'graduation_year')
	search_fields = ['last_name']

class ClubAdmin(admin.ModelAdmin):
	list_display = ('name')

admin.site.register(Member, MemberAdmin)

admin.site.register(Club)

