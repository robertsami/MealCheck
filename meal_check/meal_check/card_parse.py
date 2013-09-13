import sys, re


def parse(card):
    m = re.match('^%(?P<noise>\d\d\d\d\d\d)(?P<puid>\d\d\d\d\d\d\d\d\d)\d=(?P<first_name>.*)/(?P<last_name>.*)\?;(?P=noise)(?P=puid)\d\d\d\d=?', card)
    return "%s %s %s" % (m.group('first_name'), m.group('last_name'), m.group('puid'))
