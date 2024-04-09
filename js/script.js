// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"
// function to calculate volume
function calculateVolume() {
  // declaring variable for radius where user input is stored
  let radius = document.getElementById("radius").value;

  // calculates volume by multiplying 4/3 with pi times radius cubed
  let volume = (4/3) * Math.PI * radius ** 3;
  document.getElementById("user-info").innerHTML = "The volume of the sphere is " + volume.toFixed(2) + " cm<sup>3</sup>.";

  return volume;
}
