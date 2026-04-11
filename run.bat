@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed or not in PATH.
  echo Install it from https://nodejs.org then run this file again.
  pause
  exit /b 1
)

echo.
echo Starting local server for this folder...
echo URL: http://localhost:3000
echo Stop: press Ctrl+C or close this window.
echo.

start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:3000"

npx --yes serve@14 . -l 3000
if errorlevel 1 pause

endlocal
