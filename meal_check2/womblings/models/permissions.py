from django.db import models
from members import Member

class Permission(models.Model):
	member = models.ForeignKey(Member)
	is_allowed = models.BooleanField(default=True)

	def __unicode__(self):
		return '%s is %sallowed' % (self.member, '' if self.is_allowed else 'not ')
	
	class Meta:
	    app_label = 'womblings'