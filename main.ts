input.onButtonPressed(Button.A, function () {
    spaceship.move(-1)
})
input.onButtonPressed(Button.B, function () {
    spaceship.move(1)
})
let spaceship: game.LedSprite = null
spaceship = game.createSprite(2, 2)
let enemy = game.createSprite(0, 2)
basic.forever(function () {
    if (spaceship.isTouching(enemy)) {
        enemy.delete()
    }
    if (enemy.isDeleted()) {
        game.gameOver()
    }
})
