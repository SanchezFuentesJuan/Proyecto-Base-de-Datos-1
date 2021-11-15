db.equipos.find({equipo:"Kansas City Chiefs"}).pretty()
//Muestra el equipo de Kansas

db.equipos.find({$and:[{conferencia:{$in:["AFC Oeste"]}},{"superBowlWins.num":{$gte:2}}]}).pretty()
// Muestra todas los equipos con mas de 1 super bowl pertenecientes a la conferencia AFC Oeste