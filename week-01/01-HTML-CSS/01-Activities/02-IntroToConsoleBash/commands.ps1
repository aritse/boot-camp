New-Item -Name "self-destructing-folder" -ItemType Directory
New-Item -Name "secret-message.txt" -ItemType File
Copy-Item .\secret-message.txt -Destination .\self-destructing-folder\
Remove-Item .\secret-message.txt
Remove-Item .\self-destructing-folder\