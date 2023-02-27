Invoke-WebRequest -OutFile nvm-setup.exe https://github.com/coreybutler/nvm-windows/releases/download/1.1.10/nvm-setup.exe
.\nvm-setup.exe
$nid = (Get-Process nvm-setup).id
Wait-Process $nid
nvm install latest
nvm use latest
Invoke-WebRequest -OutFile FRC-Scouting-App-2023-main.zip https://github.com/Team2584/FRC-Scouting-App-2023/archive/refs/heads/main.zip
Expand-Archive -Path FRC-Scouting-App-2023-main.zip -DestinationPath FRC-Scouting-App-2023-main
cd FRC-Scouting-App-2023-main\FRC-Scouting-App-2023-main
npm install
npm run dev
