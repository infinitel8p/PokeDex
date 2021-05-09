# PokeDex - v.4.0.1
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![Codacy Badge](https://img.shields.io/codacy/grade/15b2db02581044d19df555befd7fff14)](https://github.com/infinitel8p/PokeDex)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/infinitel8p/PokeDex)](https://github.com/infinitel8p/PokeDex)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/infinitel8p/PokeDex)](https://github.com/infinitel8p/PokeDex/releases)
[![Github last commit](https://img.shields.io/github/last-commit/infinitel8p/PokeDex)](https://github.com/infinitel8p/PokeDex/commits/master)
[![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/infinitel8p/pokedex)](https://github.com/infinitel8p/PokeDex/issues?q=is%3Aissue+is%3Aclosed)
[![Github license](https://img.shields.io/github/license/infinitel8p/pokedex)](https://github.com/infinitel8p/PokeDex/blob/master/LICENSE)
![Discord Widget](https://img.shields.io/discord/751084847555936408)

### This PokeDex helps you pick the best possible attack against most Pokémon
Ever found yourself in a fight against a Pokémon and wondering which attack would be the most effective? Check exactly that with this specialized version of the Pokedex!

#### Contents:
 - [How to setup](https://github.com/infinitel8p/PokeDex#how-to-setup)
 - [Update logs](https://github.com/infinitel8p/PokeDex#update-logs)
 - [PokeDex.exe is missing](https://github.com/infinitel8p/PokeDex#pokedexexe-is-missing)
 - [Used libraries](https://github.com/infinitel8p/PokeDex#used-libraries)
 - [Feature updates](https://github.com/infinitel8p/PokeDex#feature-updates)

## How to setup:

1. Click ```clone or download``` and choose to download the ZIP file (If you only want the ```.exe``` and the necessary files download the ```PokeDex.zip``` from the [Releases](https://github.com/infinitel8p/PokeDex/releases))
2. Extract the folder from the ZIP file
3. Run the ```PokeDex.exe``` (you may have to check [PokeDex.exe is missing](https://github.com/infinitel8p/PokeDex#pokedexexe-is-missing))

I will leave the original files in the folder in case you want to start the PokeDex as ```.pyw``` or dont want to add the ```.exe```to your antivirus exceptions  

##### If you want to see the python console output you need to rename the file from ```PokeDex.pyw``` to ```PokeDex.py``` or follow these steps:  
###### :snake: Please make sure that python is installed, [added to path](https://datatofish.com/add-python-to-windows-path/) and that pip is running correctly before you run the app this way for the first time!  

1. open a command prompt (just search for ```cmd``` in the windows start menu)
2. navigate to the PokeDex folder. In my case I would use following command and press enter:
```shell
cd C:\Users\Ludo\Desktop\PokeDex
```
3. start the ```PokeDex.pyw``` from within the command prompt with:
```shell
python app.pyw
```
## Update logs:
v.1.1 : Simple Search for Pokémon is now possible. The results stack in the output - working on a delete function  
v.1.2 : Built in automatic pip installation for necessary python libraries  
v.1.3 : Search is now available in English too. You can now start a search in English or German  
v.1.3.1 : Prepaired introduction of sprites included in the search results  
v.1.4 : Multiple searches are now possible - last search result gets deleted to make space for new one  
v.1.5 : Fixed major error when searching for same thing more than once in a row  
v.1.5.1 : Fixed german name output when searching in enlish  
v.1.6 : implemented log of last searches  
v.2.1.1 : Added images of searched Pokémon to the search results  
v.3.0.1 : changed project to ```.exe```  
v.3.1 : moved functions to ```support.py``` and fixed a error which caused the output to add up  
v.3.2 : added option to change language (german & english)  
v.4.0.1 : Added [Pokémon Uranium](https://pokemon-uranium.fandom.com/wiki/Main_Page) and fixed the search partially  

:zzz: → currently working on "more information" tab for more in detail information to a pokemon  

## PokeDex.exe is missing
In case of the ```PokeDex.exe``` missing on your pc you have to tell your Antivirus that these files are fine.
Check this post for further information: [My Antivirus Detected the exe as a Virus](https://github.com/pyinstaller/pyinstaller/issues/2501#issuecomment-286230354)  

## Used libraries:
- [beautifulsoup4 4.9.3](https://pypi.org/project/beautifulsoup4/)
- [pokedex.py 1.1.2](https://pypi.org/project/pokedex.py/)
- [dearpygui 0.6.221](https://pypi.org/project/dearpygui/)
- [auto-py-to-exe 2.8.0](https://pypi.org/project/auto-py-to-exe/) (to convert the ```PokeDex.pyw``` to a executable)
- ###### Logo by [Nesim (@nsmdnl)](https://github.com/nsmdnl)
