---
name: What Do I Feel Like Watching?
tools: [HTML/CSS, Javascript, Web Application]
image: ../images/Watch.png
description: A Web Application utilizing the Jikan API to allow users to search for Anime and Manga 
external_url:
---
[Link to Project](https://people.rit.edu/wsf8177/235/Project2/)

## Overview
For my Fall 2024 Class, Web Technology for Games, we were tasks with designing a website that used some kind of Web API. I picked the Jikan API (Documentation can be found [here](https://jikan.moe/)). I came up with the idea of a website that one could use to figure out what they wanted to watch or read next. 


## Design


I knew that I wanted it to be a fairly uncluttered design. I always felt that reading list/watch list websites aren't fun to navigate when there's too much information on screen. So I just stuck with a search bar, an option for Anime or Manga, and a dropdown menu for sorting by Rating or A-Z.

IMAGE HERE
Initial Design

## Technical Architecture

The actual Javascript isn't too intensive. It's all in one file, under 200 lines of code. I got to learn how to go through and Fetch Data using Jikan for the project which thankfully there are a lot of resources on. 

The script has a fetch data function which grabs a json of anime or manga. Then the script displays it in a function where Flexbox divs are created with the image associated with the series, it's rating, and the year it was created. For some reason, Manga on Jikan doesn't have a year value so I had to include an if statement to replace it with the list of volumes instead. 

There's also a few functions for saving and loading the last search term typed in utilizing Local Storage. This was also my first time doing something like this with Javascript and I'm happy it was so easy.

## Final Product

I am extremely proud of the final product. It works very fast, there's pagination, and the color scheme isn't even too bad. I think the part of this project I am the most happy with is how easy it is to look up any anime or manga, and as long as it's on MyAnimeList/Jikan, it'll show up. You can search by title, genre, vibe, anything really and it'll show you results.

## What I Learned

I learned how to utilize Javascript to fetch data from a WebAPI and how to properly use Local Web Storage. This was also the first time I exprimented with creating new page and HTML elements through Javascript Functions. I also got to add CSS attributes to make the dynamically created elements responsive to page size.




