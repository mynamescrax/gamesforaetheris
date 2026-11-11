@echo off
cd /d "%~dp0"
echo Serving Meccha Chameleon on http://127.0.0.1:8140/  (Ctrl+C stops it)
python -m http.server 8140
