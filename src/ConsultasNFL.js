db.equipos.find({equipo:"Kansas City Chiefs"}).pretty()
//Muestra el equipo de Kansas

db.equipos.find({$and:[{conferencia:{$in:["AFC Oeste"]}},{"superBowlWins.num":{$gte:1}}]}).pretty()
// Muestra todas los equipos con 1 o mas super bowl pertenecientes a la conferencia AFC Oeste

db.equipos.find({$and:[{conferencia:{$in:["AFC Este"]}},{"superBowlWins.num":{$gte:2}}]}).pretty()
// Muestra todas los equipos con 2 o mas super bowl pertenecientes a la conferencia AFC Este

db.equipos.find({$and:[{conferencia:{$in:["NFC Oeste"]}},{"superBowlWins.num":{$gte:0}}]}).pretty()
// Muestra todas los equipos con mas de 0 super bowl pertenecientes a la conferencia NFC Oeste