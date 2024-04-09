// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"
// function to calculate area
function calculateVolume() {
  // declaring variable for hours worked with value set as value inputed by user 
  let radius = document.getElementById("radius").value;

  // calculates result by multiplying the product of side a, side b, and height by 1/6
  let volume = (4/3) * Math.PI * radius ** 3;
  document.getElementById("user-info").innerHTML = "The volume of the sphere is " + volume.toFixed(3) + " cm<sup>3</sup>.";

  return volume;
}
