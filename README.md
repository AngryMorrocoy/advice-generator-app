# Frontend Mentor - Advice generator app solution

This is a solution to
[this](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub/advice-generator-app-OqYfufdB3V)
challenge. To make the short story, this webpage makes an HTTP request to
[advice slip api](https://api.adviceslip.com/) to get a random advice every time
the page loads or the dice button is pressed.

## What it does?

Well, as explained above, just shows random advices that can be useful for u :D.
As an extra I added a small animation to the dice button when it's clicked and
also disables it until the GET request has finished.

## Some problems

The main problem with this challenge was the caching for the requests, as it's
always the same url, it doesn't even tries to fetch new data. I fixed this by
adding a query parameter "\_" with different values each time the request is
made. 

I didn't use the 'Cache-Control' header, because it made the request to fail
with a CORS exception, I decided to avoid this, and just change one line...
