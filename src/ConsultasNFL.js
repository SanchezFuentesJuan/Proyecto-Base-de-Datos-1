db.equipos.find().pretty
//Muestra todos los equipos pertenecientes a la NFL

db.equipos.find({
    estado:"Florida"}).pretty()
//Muestra los equipos que se encuentran en Florida

db.equipos.find({"superBowlWins.num":2}).limit(5).pretty()
//Muestra 5 equipos de la liga que hayan ganado 2 Super Bowls

db.equipos.find({$and:[
    {conferencia:
        {$in:["AFC Norte"]}
    },
    { "superBowlWins.num":{$gte:1}}
]}).pretty()
// Muestra todas los equipos con 1 o mas super bowl pertenecientes a la conferencia AFC Oeste

db.equipos.find({$and:[
    {conferencia:
        {$in:["NFC Sur"]}
    },
    {"superBowlWins.num":{$lte:0}
}]}).pretty()
//Muestra todos los equipos de la NFC Sur que no han ganado super bowl

db.equipos.find({$and:[
    {"superBowlWins.num":{$lte:1 }},
    {estado:{$in:["Nueva York"]}},
    {disputaSuperBowl:true}
]}).pretty()
//Muestra los equipos que tienen 1 o menos super bowl, que pertenecen al estado de Nueva York y que han disputado alguna vez la super bowl

db.fechas.find({$and:[
    {superBowlWins:{$elemMatch:{fechaSuperBowlWins:{"$lte" : new Date("1984-01-22")}}}}
]}).pretty()
//Muestra todos los equipos que han ganado al menos una super bowl antes de 1984