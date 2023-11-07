"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *
from hcsr04 import HCSR04

# variables
distance_to_object = 0
distance_to_object = HCSR04(trigger_pin=16, echo_pin=0)
distance_to_object = sensor.distance_cm()

# clean up
display.clear()
display.show(Image.HAPPY)

# find distance from sonar
while True:
    display.clear()
    distance_to_object = sensor.distance_cm()
    if button_a.is_pressed():
        print(distance_to_object, "cm.")
        display.show(Image.HAPPY)
