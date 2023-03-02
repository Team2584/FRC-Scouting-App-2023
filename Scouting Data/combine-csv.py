# import required modules
import os
import pandas as pd
import sys

# check arguments of command
if (len(sys.argv) >= 3):
    print("Too many arguments. We only accept a singular argument, the directory.")
    exit()
elif (len(sys.argv) == 2):
    if (os.path.isdir(sys.argv[1])):
        directory = sys.argv[1]
    else:
        print("Arugment is not a real directory. You suck at spelling.")
        exit() 
else:
    directory = os.getcwd()

# create or find backup directory
backupDirectory = os.path.join(directory, "Backups of CSVs")
if not os.path.isdir(backupDirectory):
    os.mkdir(backupDirectory)

# find all csvs and move them into backup directory
allCSVs = []
excelSpreadsheets = []
for filename in os.listdir(directory):
    f = os.path.join(directory, filename)
    filetype = os.path.splitext(filename)[-1].lower()
    if os.path.isfile(f) and filetype == ".csv":
        df = pd.read_csv(f)
        allCSVs.append(df)
        try:
            os.rename(f, os.path.join(backupDirectory, filename))
        except FileExistsError:
            print(f"Failed to backup {filename} due to identical name in Backups directory... Tell Julian he sucks for me -Avrick")
    elif os.path.isfile(f) and filename == "Scouting Data.xlsx":
        excelSpreadsheets.append(f)

# concatenate all csvs
if (len(allCSVs) == 0):
    print("No CSVs found.")
    exit()
concatentatedDF = pd.concat(allCSVs)

# append all csvs to excel or create excel
if (len(excelSpreadsheets) == 0):
    concatentatedDF.to_excel(os.path.join(directory, "Scouting Data.xlsx"), index=False)
    print(f"Your {len(allCSVs)} CSV(s) have been concatenated.")
elif (len(excelSpreadsheets) == 1):
    excelDF = pd.read_excel(excelSpreadsheets[0])
    finalDF = pd.concat([excelDF, concatentatedDF])
    os.remove(excelSpreadsheets[0])
    finalDF.to_excel(os.path.join(directory, "Scouting Data.xlsx"), index=False)
    print(f"Your {len(allCSVs)} CSV(s) have been appended to the excel file.")
else:
    print("Too many excel files in directory, something has gone terrible wrong... There are somehow multiple files with the same name in the same directory god help us AHHHHHH.")
