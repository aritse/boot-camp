mkdir first_day_stuff
notepad first_day_stuff\first-day.html

REM It starts a new process and the execution continues with the current thread.
start code first_day_stuff

REM To use the FOR command in a batch program,
REM specify %%variable instead of %variable.
for %%a in (one_folder second_folder) do mkdir %%a
for %%a in (one.html two.html) do notepad first_day_stuff\%%a
