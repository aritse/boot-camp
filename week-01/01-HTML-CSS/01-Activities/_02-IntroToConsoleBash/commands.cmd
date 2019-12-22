mkdir self-destructing-folder
notepad secret-message.txt
copy  secret-message.txt self-destructing-folder\
del secret-message.txt
rd /s /q self-destructing-folder
