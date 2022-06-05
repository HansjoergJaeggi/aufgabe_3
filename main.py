Bild = 0
Zufallszahl = 0

def on_forever():
    global Bild, Zufallszahl
    Bild = randint(1, 3)
    Zufallszahl = randint(1, 4)
    if Bild == 1:
        for index in range(Zufallszahl):
            basic.show_icon(IconNames.SQUARE)
            basic.pause(200)
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
    if Bild == 2:
        for index2 in range(Zufallszahl):
            basic.show_icon(IconNames.TORTOISE)
            basic.pause(200)
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
    if Bild == 3:
        for index3 in range(Zufallszahl):
            basic.show_icon(IconNames.TSHIRT)
            basic.pause(200)
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
basic.forever(on_forever)
