let Bild = 0
let Zufallszahl = 0
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
