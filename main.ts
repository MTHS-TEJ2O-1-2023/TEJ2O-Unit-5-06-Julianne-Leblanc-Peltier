/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Oct 2023
 * This program shows distance in centimeters using sonar
*/

// variables
let distanceToObject: number = 0

// clean up
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// find distance from sonar
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  basic.showNumber(distanceToObject)
  basic.showIcon(IconNames.Happy)
})
