#build
npm run build

#move
cd build

#Clone index.html to 200.html
cp index.html 200.html

#start deploy via surge
surge . vien-photo-app.surge.sh