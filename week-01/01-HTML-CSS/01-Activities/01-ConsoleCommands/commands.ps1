'one', 'two' | ForEach-Object {New-Item -Name "./$($_)_folder" -ItemType Directory }
'one', 'two' | ForEach-Object {New-Item -Name "./$($_).html" -ItemType File }