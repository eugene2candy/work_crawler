@ECHO OFF
REM This is a batch file to show how to execute every crawler in one click. You must setup .txt title list file first.

REM chcp 65001
chcp 936
REM cd/d D:\USB\cgi-bin\program\comic

REM CD "%~n0"
FORFILES /M *.js /C "cmd.exe /c IF @isdir==FALSE node @file l=@fname.txt || PAUSE"
REM CD ..
