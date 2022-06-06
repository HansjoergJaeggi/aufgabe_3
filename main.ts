let Bild = 0
let Zufallszahl = 0
/**
 * Aufgabe 3
 * 
 * Aus drei verschiedenen Symbolen sollte eines zufällig ausgewählt werden. Dieses Symbol sollte danach zufällig oft blinken. 
 * 
 * Frage: Wieviele Variablen brauchen wir?
 * 
 * Wie wählen wir zufällig ein Symbol?
 * 
 * Wie stellen wir sicher, dass zufällig häufig dieses Symbol dann geblinkt wird?
 */
/**
 * Arrey mit 5*5 dunkeln LED zur Erzeugung der  Blink-Pausen von 200ms
 */
/**
 * Arrey mit 5*5 dunkeln LED zur Erzeugung der  Blink-Pausen von 200ms
 */
basic.forever(function () {
    Bild = randint(1, 3)
    Zufallszahl = randint(1, 4)
    if (Bild == 1) {
        for (let index = 0; index < Zufallszahl; index++) {
            basic.showIcon(IconNames.Square)
            basic.pause(200)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
    if (Bild == 2) {
        for (let index = 0; index < Zufallszahl; index++) {
            basic.showIcon(IconNames.Tortoise)
            basic.pause(200)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
    if (Bild == 3) {
        for (let index = 0; index < Zufallszahl; index++) {
            basic.showIcon(IconNames.TShirt)
            basic.pause(200)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
