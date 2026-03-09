/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joshua
 * Created on: March 2026
 * This program do the cookies clicker game 
*/

// variables
let cookies: number = 0

// start
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// add cookies 
input.onButtonPressed(Button.A, function () {
    cookies = cookies + 1
    basic.showNumber(cookies)
})

// stop
input.onButtonPressed(Button.B, function () {
    cookies = 0
    basic.showNumber(cookies)
})

