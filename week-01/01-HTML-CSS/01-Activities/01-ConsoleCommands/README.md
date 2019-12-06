# Bash / Terminal Commands

## Instructions

- From the Terminal/Console and using only the command line, create the following:
  - A new folder with the name of first_day_stuff
    mkdir first_day_stuff
  - A new HTML file with the name of first-day.html
    notepad first-day.html
  - Open the current folder containing the new HTML file.
    code first-day.html

## BONUS

- Create multiple directories/folders with the names `one_folder` and `second_folder` in one command.
  for %i in (one_folder second_folder) do mkdir %i
- Create multiple files with the names `one.html` and `two.html` in one command in the first_day_stuff directory.
  for %i in (one.html two.html) do notepad %i
