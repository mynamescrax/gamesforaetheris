@echo off
cd /d "%~dp0"
where python >nul 2>nul || (
  echo Python 3 is required to serve the files: https://www.python.org/downloads/
  echo Or use any static file server pointed at this folder.
  pause
  exit /b 1
)
echo Serving on http://127.0.0.1:8000/ - close this window to stop.
start "" /b cmd /c "timeout /t 2 >nul & start "" http://127.0.0.1:8000/"
python serve.py 8000
pause
