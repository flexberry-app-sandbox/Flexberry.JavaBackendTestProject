#!/bin/bash

if [ -f "./config/environment.js" ]
then
	back="if (environment === 'docker') {
		// For  backendUrl setting
		backendUrl = 'http://localhost/JavaBackendTestProjectService';
	}"

	location="locationType: 'hash',"
              
	ifs=$IFS
	IFS=
	findBack=
	notfindedBack=1
	while read str
	do
      #  echo "STR=$str"
      case $str in
		*if*environment*===*docker*) findBack=1;;
		*locationType:*) echo  "$location";;		
		*)
			if [ -n "$findBack" ]
			then
				case $str in
					*}*)
					findBack=
					notfindedBack=
					echo  "$back"
					;;
				esac
			else
				case $str in
					*return*ENV*)
					if [ -n "$notfindedBack" ]
					then
						echo  "$back"
					fi
				esac
				echo $str
			fi			
	  esac
	done < ./config/environment.js > ./config/new_environment.js
    IFS=$ifs
	mv ./config/new_environment.js ./config/environment.js
fi
