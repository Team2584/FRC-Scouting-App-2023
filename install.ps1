Invoke-WebRequest -OutFile nvm-setup.exe https://github.com/coreybutler/nvm-windows/releases/download/1.1.10/nvm-setup.exe
.\nvm-setup.exe
$nid = (Get-Process nvm-setup).id
Wait-Process $nid

foreach($level in "Machine","User") {
   [Environment]::GetEnvironmentVariables($level).GetEnumerator() | % {
      # For Path variables, append the new values, if they're not already in there
      if($_.Name -match 'Path$') { 
         $_.Value = ($((Get-Content "Env:$($_.Name)") + ";$($_.Value)") -split ';' | Select -unique) -join ';'
      }
      $_
   } | Set-Content -Path { "Env:$($_.Name)" }
}

nvm install latest
nvm use latest
Invoke-WebRequest -OutFile FRC-Scouting-App-2023-main.zip https://github.com/Team2584/FRC-Scouting-App-2023/archive/refs/heads/main.zip
Expand-Archive -Path FRC-Scouting-App-2023-main.zip -DestinationPath FRC-Scouting-App-2023-main
cd FRC-Scouting-App-2023-main\FRC-Scouting-App-2023-main
npm install
npm run dev
start http://localhost:3000
