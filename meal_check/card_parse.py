import sys

def parse(card):
	name = card.split("?")[0].split("=")[1].split("/")
	puid = card[7:16]

	return (name[0], name[1], puid)