# Loony Toons Templating

Templating is loony, but also a lifesaver. This exercise will help hone your skills as a frontend templater.

##Exercise

* You have been provided with an array of objects in the `data.js` file. This is the same as what an API would return to you.
* In `index.html` there is a typical template that iterates through a collection and prints out specific properties of each item in a formatted manner. Take a moment to study it and understand how it's working.

**GOAL:** Write the code in `app.js` that will:

  * Grab the html from the existing template `#looney-toons-template`
  * Use Underscore to transform the html string into an object that can accept data
  * Correctly pass your data into your new template object to get the compiled template HTML
  * Append the compiled HTLM to your page, specifically where the section `#looney-toons-wrapper`
  
  
####Notes
* Your `index.html` has jQuery, Underscore, and the existing files already required in the correct order.
* Check the `solution` branch for a sample solution.
