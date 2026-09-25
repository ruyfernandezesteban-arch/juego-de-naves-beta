namespace SpriteKind {
    export const p2 = SpriteKind.create()
    export const reniciaravion = SpriteKind.create()
    export const Vida_extra = SpriteKind.create()
    export const ralentizador = SpriteKind.create()
    export const mas_velocidad_de_disparo = SpriteKind.create()
    export const potenciador = SpriteKind.create()
    export const proyectil_super = SpriteKind.create()
    export const explosion = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.reniciaravion, function (sprite, otherSprite) {
    avion_enemigo.setPosition(randint(3, 150), 0)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.ralentizador, SpriteKind.reniciaravion, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (municion_potenciada > 0) {
        proyectil_potenciado += -1
        projectile2 = sprites.createProjectileFromSprite(img`
            ................................
            ................................
            ................................
            .............111................
            ............11111...............
            ...........bbbbbbb..............
            ..........bbbbbbbbb.............
            .........bbbbbbbbbbb............
            .........bbbbbbbbbbb............
            .........bbbbbbbbbbb............
            .........bbbbbbbbbbb............
            .........bbbbbbbbbbb............
            .........bbbbbbbbbbb............
            .........bbbbbbbbbbb............
            .........bbbbbbbbbbb............
            .........bbbbbbbbbbb............
            .........bbbbbbbbbbb............
            .........bbbbbbbbbbb............
            .........b555555555b............
            .........b555555555b............
            .........b555555555b............
            .........b555555555b............
            .........bbbbbbbbbbb............
            .........bbbbbbbbbbb............
            ............44444...............
            ............45554...............
            ............45554...............
            ............45554...............
            ............44444...............
            ............44444...............
            ............44444...............
            ............4.4.4...............
            `, avion, 0, -100)
        projectile2.setKind(SpriteKind.proyectil_super)
        municion_potenciada += -1
        projectile2.follow(avion_enemigo)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.potenciador, function (sprite, otherSprite) {
    sprites.destroy(potenciador_de_balas)
    municion_potenciada += 1
})
info.onCountdownEnd(function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Vida_extra, SpriteKind.reniciaravion, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Vida_extra, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    pause(50)
    if (avion_enmigo_ralentizado == 1) {
        avion_enemigo = sprites.create(img`
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . 2 9 9 9 9 2 . . . . . 
            . . . . . 2 9 9 9 9 2 . . . . . 
            . . . . . 2 9 9 9 9 2 . . . . . 
            . . . . . 2 2 8 8 2 2 . . . . . 
            . . . . . . 2 8 8 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        avion_enemigo.setPosition(randint(3, 150), 0)
        avion_enemigo.setVelocity(0, 25)
    } else {
        avion_enemigo = sprites.create(img`
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . 2 9 9 9 9 2 . . . . . 
            . . . . . 2 9 9 9 9 2 . . . . . 
            . . . . . 2 9 9 9 9 2 . . . . . 
            . . . . . 2 2 8 8 2 2 . . . . . 
            . . . . . . 2 8 8 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        avion_enemigo.setPosition(randint(3, 150), 0)
        avion_enemigo.setVelocity(0, 50)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ralentizador, function (sprite, otherSprite) {
    avion_enmigo_ralentizado += 1
    avion_enemigo.setVelocity(0, 25)
    sprites.destroy(otherSprite)
    pause(10000)
    avion_enmigo_ralentizado += -1
    avion_enemigo.setVelocity(0, 50)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.proyectil_super, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
let ralentizador: Sprite = null
let vida_extra: Sprite = null
let projectile: Sprite = null
let potenciador_de_balas: Sprite = null
let projectile2: Sprite = null
let proyectil_potenciado = 0
let municion_potenciada = 0
let avion: Sprite = null
let avion_enemigo: Sprite = null
let avion_enmigo_ralentizado = 0
avion_enmigo_ralentizado = 0
let reniciar_aviones = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.reniciaravion)
let reiniciar_aviones2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.reniciaravion)
let reiniciar_aviones3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.reniciaravion)
let reiniciar_aviones4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.reniciaravion)
let reiniciar_aviones5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.reniciaravion)
let reiniciar_aviones6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.reniciaravion)
let reiniciar_aviones7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.reniciaravion)
let reiniciar_aviones8 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.reniciaravion)
let reiniciar_aviones9 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.reniciaravion)
let reiniciar_aviones10 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.reniciaravion)
reniciar_aviones.setPosition(8, 120)
reiniciar_aviones2.setPosition(24, 120)
reiniciar_aviones3.setPosition(40, 120)
reiniciar_aviones4.setPosition(56, 120)
reiniciar_aviones5.setPosition(72, 120)
reiniciar_aviones6.setPosition(88, 120)
reiniciar_aviones7.setPosition(104, 120)
reiniciar_aviones8.setPosition(120, 120)
reiniciar_aviones9.setPosition(136, 120)
reiniciar_aviones10.setPosition(152, 120)
scene.setBackgroundImage(assets.image`fondo`)
info.setLife(3)
info.startCountdown(120)
music.play(music.createSong(hex`0078000408050109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8009d000400050001070800090001040c000d0001082000210002060a2400250001042c002d0001073000310001043400350001023c003d0001024000410001054800490001065400550001095800590001065c005d0001016400650001026800690001077000710001087400750001047800790001017c007d0001068000810001068800890001048c008d0001079400950001089800990001089c009d000104`), music.PlaybackMode.LoopingInBackground)
info.setScore(0)
avion_enemigo = sprites.create(img`
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . 2 9 9 9 9 2 . . . . . 
    . . . . . 2 9 9 9 9 2 . . . . . 
    . . . . . 2 9 9 9 9 2 . . . . . 
    . . . . . 2 2 8 8 2 2 . . . . . 
    . . . . . . 2 8 8 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
avion_enemigo.setPosition(randint(3, 150), 0)
avion = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 8 8 5 . . . . . . 
    . . . . . 5 5 8 8 5 5 . . . . . 
    . . . . . 5 9 9 9 9 5 . . . . . 
    . . . . . 5 9 9 9 9 5 . . . . . 
    . . . . . 5 9 9 9 9 5 . . . . . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(avion, 100, 0)
avion_enemigo.setVelocity(0, 50)
effects.clouds.startScreenEffect()
avion.setStayInScreen(true)
avion.setPosition(80, 120)
forever(function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . . . . . 
        . . . . . 5 . . . . 5 . . . . . 
        . . . . . 5 . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, avion, 0, -100)
    projectile.setKind(SpriteKind.Projectile)
    pause(200)
})
forever(function () {
    for (let index = 0; index < 5; index++) {
        pause(20000)
        vida_extra = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f . . . . f f f f . . 
            . f 2 2 2 2 f . . f 2 2 2 2 f . 
            f 2 1 1 2 2 2 f f 2 2 2 2 2 2 f 
            f 2 1 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
            . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
            . . f 2 2 2 2 2 2 2 2 2 2 f . . 
            . . . f 2 2 2 2 2 2 2 2 f . . . 
            . . . . f 2 2 2 2 2 2 f . . . . 
            . . . . . f 2 2 2 2 f . . . . . 
            . . . . . . f 2 2 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `, SpriteKind.Vida_extra)
        vida_extra.setPosition(randint(3, 150), 0)
        vida_extra.setVelocity(0, 50)
    }
})
forever(function () {
    for (let index = 0; index < 2; index++) {
        ralentizador = sprites.create(img`
            . . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 8 8 2 8 8 8 2 8 8 5 . . . 
            . . 5 8 8 8 2 2 2 2 2 8 8 8 5 . . 
            . 5 8 8 8 8 8 2 2 2 8 8 8 8 8 5 . 
            5 8 8 8 8 8 8 2 2 2 8 8 8 8 8 8 5 
            5 8 2 2 2 2 8 2 2 2 8 2 2 2 2 8 5 
            5 8 f 2 2 2 2 2 2 2 2 2 2 2 2 8 5 
            5 8 f 2 2 2 2 2 2 2 2 2 2 2 8 8 5 
            5 f f f 2 2 2 2 2 2 2 2 2 8 8 8 5 
            5 8 f 8 8 2 2 2 2 2 2 2 8 8 8 8 5 
            5 8 4 4 8 8 2 2 2 2 2 8 8 8 8 8 5 
            5 4 1 f 4 8 2 9 9 9 2 8 8 8 8 8 5 
            5 4 f 1 4 8 8 2 2 2 8 8 8 8 8 8 5 
            . 5 4 4 8 8 8 8 8 8 8 8 8 8 8 5 . 
            . . 5 8 8 8 8 8 8 8 8 8 8 8 5 . . 
            . . . 5 8 8 8 8 8 8 8 8 8 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . . 
            `, SpriteKind.ralentizador)
        ralentizador.setPosition(randint(3, 150), 0)
        ralentizador.setVelocity(0, 50)
        pause(60000)
    }
})
forever(function () {
    info.player2.setScore(municion_potenciada)
})
forever(function () {
    for (let index = 0; index < 4; index++) {
        pause(20000)
        potenciador_de_balas = sprites.create(img`
            . . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 8 f 8 8 8 8 8 8 8 5 . . . 
            . . 5 8 8 f 8 8 8 8 8 8 8 8 5 . . 
            . 5 8 f f f f f 8 8 8 8 8 8 8 5 . 
            5 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 5 
            5 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 5 
            5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
            5 8 8 8 8 5 8 8 8 8 8 5 8 8 8 8 5 
            5 8 8 8 8 5 8 8 8 8 8 5 8 8 8 8 5 
            5 8 8 8 8 5 8 8 8 8 8 5 8 8 8 8 5 
            5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
            5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
            5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
            . 5 8 8 8 8 8 8 8 8 8 8 8 8 8 5 . 
            . . 5 8 8 8 8 8 8 8 8 8 8 8 5 . . 
            . . . 5 8 8 8 8 8 8 8 8 8 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . . 
            `, SpriteKind.potenciador)
        potenciador_de_balas.setPosition(randint(3, 150), 0)
        potenciador_de_balas.setVelocity(0, 50)
    }
})
