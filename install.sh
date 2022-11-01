#!/bin/bash

echo 'Installing Todo List project'

if [ $node --version ]
then 


read -p 'What is your favorite npm manager?(just type yarn or npm):' npm_manager


if [ $npm_manager = 'yarn' ] || [ $npm_manager = 'npm' ] 
then
cd ./server
echo "Installing backend packages"
$npm_manager install

cd ../client

sleep 2

echo "Installing frontend packages"
$npm_manager install

echo "**** Project installed ****"

else
echo "Only npm or yarn npm managers valid"
fi


else 
echo "You have not installed nodejs"
fi

