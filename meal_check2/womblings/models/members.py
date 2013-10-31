from django.db import models

class Member(models.Model):
	puid = models.IntegerField(default=0)
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	graduation_year = models.IntegerField(default=0)

	def __unicode__(self):
		return self.first_name + ' ' + self.last_name + ' %d' % (self.graduation_year)

	class Meta:
	    app_label = 'womblings'
