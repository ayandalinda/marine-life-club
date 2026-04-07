@echo off
REM Quick setup script for Marine Life Club Backend
REM Run this file to set everything up automatically

echo.
echo ╔═══════════════════════════════════════════════╗
echo ║  UMLC Backend Setup Script                    ║
echo ╚═══════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
node -v >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js found: 
node -v
echo.

REM Check if npm is installed
npm -v >nul 2>&1
if errorlevel 1 (
    echo ❌ npm is not installed!
    exit /b 1
)

echo ✅ npm found: 
npm -v
echo.

REM Install dependencies
echo ⏳ Installing dependencies...
npm install

if errorlevel 1 (
    echo ❌ Failed to install dependencies!
    pause
    exit /b 1
)

echo ✅ Dependencies installed!
echo.

REM Create .env file if it doesn't exist
if not exist ".env" (
    echo ⏳ Creating .env file from template...
    copy .env.example .env
    echo ✅ .env file created
    echo   Please edit .env if needed
    echo.
)

echo ╔═══════════════════════════════════════════════╗
echo ║  Setup Complete! 🎉                          ║
echo ╚═══════════════════════════════════════════════╝
echo.
echo To start the backend, run:
echo   npm start              (production mode)
echo   npm run dev            (development with auto-reload)
echo.
echo Backend will run on: http://localhost:5000
echo API docs are in: BACKEND_SETUP.md
echo.

pause
