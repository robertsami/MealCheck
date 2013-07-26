from django.db import models
from members import Member

class SwipeRecord(models.Model):
	member = models.ForeignKey(Member)
	swipe_time = models.DateTimeField('date swiped')
	was_allowed = models.BooleanField(default=True)

	def __unicode__(self):
		return '%s : %s %s' % (self.swipe_time, 'Accepted' if self.was_allowed else 'Rejected', self.member)

	class Meta:
	    app_label = 'womblings'