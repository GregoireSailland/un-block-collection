
if not defined in_subprocess (cmd /k set in_subprocess=y ^& %0 %*) & exit )
@echo off
start "" "C:\Program Files\Sublime Text 3\sublime_text.exe" "./"
start "" "C:\Program Files\Sublime Text 3\sublime_text.exe" "E:\_ DEV _\projects\PIM\PIM BKP\12.5.21\plugins\un-block"
start "" "chrome" "https://media-sync.test"
set tempfile=bdw.txt
set EXE="laragon.exe"
if exist %tempfile% del %tempfile%
tasklist > %tempfile%
type %tempfile% | find /i %EXE%
if errorlevel 0 if not errorlevel 1 goto IsRunning
start "" "C:\laragon\laragon.exe"
goto start
:IsRunning
echo IsRunning
goto start
:start
del %tempfile%
npm start
