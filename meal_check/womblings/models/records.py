from django.db import models
from members import Member

class Club(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        app_label = 'womblings'

    def __unicode__(self):
        return self.name

class MealExchangeRecord(models.Model):
    club = models.ForeignKey(Club)
    guest_name = models.CharField(max_length=100)
    
    class Meta:
        app_label = 'womblings'

class SwipeRecord(models.Model):
    member = models.ForeignKey(Member)
    swipe_time = models.DateTimeField('date swiped')
    meal_exchange = models.ForeignKey(MealExchangeRecord)
    
    def __unicode__(self):
        return '%s : %s%s' % (self.swipe_time, self.member, ' Had guest' if self.was_allowed else '')

    class Meta:
        app_label = 'womblings'