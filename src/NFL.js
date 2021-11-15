db.equipos.insertMany([
    {_id: 1,equipo: "Kansas City Chiefs", estado: "Misuri", conferencia:"AFC Oeste", superBowlWins: {num: 2}, players:[[{Qb:["Patrick Mahomes", "Cam Newton"]}],[{Wr:["Tyreek Hill", "Chris Jones"]}]]},
    {_id: 2,equipo: "Green Bay Packers", estado: "Wisconsin", conferencia: "NFC Norte", superBowlWins: {num: 4}, players:[[{Qb:["Aaron Rodgers", "Jordan Love"]}],[{Wr:["Aaron Jones", "Jaire Alexaindre"]}]]},
    {_id: 3, equipo: "Buffalo Bills", estado: "Nueva York", conferencia: "AFC Este",superBowlWins: {num: 1}, players:[[{Qb:["Josh Allen", "Davante Adams"]}],[{Wr:["Josh Beasly", "David Singletary"]}]]},
    {_id: 4, equipo: "Tampa Bay Buccaneers", estado: "Florida", conferencia: "NFC Sur", superBowlWins: {num: 2}, players:[[{Qb:["Tom Brady", "Jameis Wilson"]}],[{Wr:["Aaron Donald", "Chris Mckenzie"]}]]},
    {_id: 5, equipo: "Miami Dolphins", estado: "Florida", conferencia: "AFC Este", superBowlWins: {num: 2}, players:[[{Qb:["Tua Tagovailoa", "Devonta Freeman"]}],[{Wr:["Davante Parker", "Jalen Waddle"]}]]},
    {_id: 6, equipo: "Chicago Bears", estado: "Illinois", conferencia: "NFC Norte", superBowlWins: {num: 1}, players:[[{Qb:["Patrick Wilson", "Andy Dalton"]}],[{Wr:["Jordan Beasly", "Robby Anderson"]}]]},
    {_id: 7, equipo: "Las Vegas Raiders", estado: "Nevada", conferencia: "AFC Oeste", superBowlWins: {num: 3}, players:[[{Qb:["Derek Carr", "Darren Waller"]}],[{Wr:["Aaron Hill", "Davante Smith"]}]]},
    {_id: 8, equipo: "Baltimore Ravens", estado: "Maryland", conferencia: "AFC Norte", superBowlWins: {num: 2}, players:[[{Qb:["Lamar Jackson", "Josh Smith"]}],[{Wr:["Justin Tucker", "Moussa Jones"]}]]},
    {_id: 9, equipo: "Tennessee Titans", estado: "Tennessee", conferencia: "AFC Sur", superBowlWins: {num: 1}, players:[[{Qb:["Darrell Williams", "Jonnu Smith"]}],[{Wr:["Derek Henry", "Chris Stones"]}]]},
    {_id: 10, equipo: "Minnesota Vikings", estado: "Minnesota", conferencia: "NFC Norte", superBowlWins: {num: 1}, players:[[{Qb:["Patrick Smith", "Chris Newton"]}],[{Wr:["Steven Parker", "Tom Adams"]}]]},
    {_id: 11, equipo: "New England Patriots", estado: "Massachusetts", conferencia: "AFC Este", superBowlWins: {num: 6}, players:[[{Qb:["Jalen Hurts", "Mac Jones"]}],[{Wr:["Julien Hill", "Jordan Edelman"]}]]},
    {_id: 12, equipo: "New York Jets", estado: "Nueva Jersey", conferencia: "AFC Este", superBowlWins: {num: 1}, players:[[{Qb:["Zach Wilson", "Aaron Freeman"]}],[{Wr:["Robby Smith", "Josh Waller"]}]]},
    {_id: 13, equipo: "Washington Football Team", estado: "Maryland", conferencia: "NFC Este", superBowlWins: {num: 3}, players:[[{Qb:["Tyreek Rodgers", "Davante Newton"]}],[{Wr:["Terry Mckenzie", "Andy Williams"]}]]},
    {_id: 14, equipo: "Atlanta Falcons", estado: "Georgia", conferencia: "NFC Sur", superBowlWins: {num: 1}, players:[[{Qb:["Felipe Franks", "Henry Wilson"]}],[{Wr:["Jalen Jones", "Andy Peterson"]}]]},
    {_id: 15, equipo: "New Orleans Saints", estado: "Luisiana", conferencia: "NFC Sur", superBowlWins: {num: 1}, players:[[{Qb:["Drew Brees", "Mac Henry"]}],[{Wr:["Taysom Hill", "Chris Lewis"]}]]},
    {_id: 16, equipo: "Dallas Cowboys", estado: "Texas", conferencia: "NFC Este", superBowlWins: {num: 5}, players:[[{Qb:["Derek Prescott", "Ezequiel Elliot"]}],[{Wr:["Kyle Love", "Jonnu Guy"]}]]},
    {_id: 17, equipo: "Jacksonville Jaguars", estado: "Florida", conferencia: "AFC Sur", superBowlWins: {num: 1}, players:[[{Qb:["Alex Smith", "Trevor Lawrence"]}],[{Wr:["Will Fuller", "Cameron Taylor"]}]]},
    {_id: 18, equipo: "Indianapolis Colts", estado: "Indiana", conferencia: "AFC Sur", superBowlWins: {num: 2}, players:[[{Qb:["Cam Henry", "Justin Fields"]}],[{Wr:["Nahuel Smith", "Matt Parker"]}]]},
    {_id: 19, equipo: "Detroit Lions", estado: "Michigan", conferencia: "NFC Norte", superBowlWins: {num: 1}, players:[[{Qb:["Justin Stafford", "Ryan Beasly"]}],[{Wr:["Jordan Miller", "Russel Westbrook"]}]]},
    {_id: 20, equipo: "Pittsburgh Steelers", estado: "Pensilvania", conferencia: "AFC Norte", superBowlWins: {num: 6}, players:[[{Qb:["Matthew Ryan", "Ben Allen"]}],[{Wr:["Mason Love", "Chris Jordan"]}]]},
    {_id: 21, equipo: "Cleveland Browns", estado: "Ohio", conferencia: "AFC Norte", superBowlWins: {num: 1}, players:[[{Qb:["Baker Mahomes", "Carson Freeman"]}],[{Wr:["Anthony Edwards", "Deboo Samuel"]}]]},
    {_id: 22, equipo: "Los Angeles Chargers", estado: "California", conferencia: "AFC Oeste", superBowlWins: {num: 1}, players:[[{Qb:["Justin Herbert", "Matt Ryan"]}],[{Wr:["DJ Moore", "Travis Kelce"]}]]},
    {_id: 23, equipo: "Arizona Cardinals", estado: "Arizona", conferencia: "NFC Oeste", superBowlWins: {num: 1}, players:[[{Qb:["Kyler Murray", "John Hill"]}],[{Wr:["Mark Andrews", "DK Metcalf"]}]]},
    {_id: 24, equipo: "Carolina Panthers", estado: "Carolina del Norte", conferencia: "NFC Sur", superBowlWins: {num: 1}, players:[[{Qb:["Sam Darnold", "Matt Jones"]}],[{Wr:["Robert Woods", "Kyle Pitts"]}]]},
    {_id: 25, equipo: "Philadelphia Eagles", estado: "Pensilvania", conferencia: "NFC Este", superBowlWins: {num: 1}, players:[[{Qb:["Nick Foles", "Lawrence Taylor"]}],[{Wr:["Kyle Gesicki", "Andy Thielem"]}]]},
    {_id: 26, equipo: "Denver Broncos", estado: "Colorado", conferencia: "AFC Oeste", superBowlWins: {num: 3}, players:[[{Qb:["Drew Lock", "Andy Donald"]}],[{Wr:["Cole Beasly", "Tee Higgins"]}]]},
    {_id: 27, equipo: "Seattle Seahawks", estado: "Washington", conferencia: "NFC Oeste", superBowlWins: {num: 1}, players:[[{Qb:["Kirk Cousins", "Russel Wilson"]}],[{Wr:["Chase Claypool", "Anthony Brown"]}]]},
    {_id: 28, equipo: "Los Angeles Rams", estado: "California", conferencia: "NFC Oeste", superBowlWins: {num: 1}, players:[[{Qb:["Justin Goff", "Jordan Denis"]}],[{Wr:["Mike Evans", "Chris Godwin"]}]]},
    {_id: 29, equipo: "San Francisco 49ers", estado: "California", conferencia: "NFC Oeste", superBowlWins: {num: 5}, players:[[{Qb:["Trey Lance", "Davante Matthieu"]}],[{Wr:["Amari Cooper", "Stefon Diggs"]}]]},
    {_id: 30, equipo: "New York Giants", estado: "Nueva Jersey", conferencia: "NFC Este", superBowlWins: {num: 4}, players:[[{Qb:["Daniel Jones", "Peyton Manning"]}],[{Wr:["Tyreek Locket", "Keenan Allen"]}]]},
    {_id: 31, equipo: "Cincinnati Bengals", estado: "Ohio", conferencia: "AFC Norte", superBowlWins: {num: 1}, players:[[{Qb:["Joe Burrow", "Kyle Allen"]}],[{Wr:["CeeDee Lamb", "Brandon Cooks"]}]]},
    {_id: 32, equipo: "Houston Texans", estado: "Texas", conferencia: "AFC Sur", superBowlWins: {num: 1}, players:[[{Qb:["Deshaun Wilson", "Henry Murray"]}],[{Wr:["Trevon Diggs", "Cooper Kupp"]}]]},
]);

db.fechas.insertMany([
    {_id: 1, fechas: "Kansas City Chiefs", estado: "Misuri", conferencia:"AFC Oeste", superBowlWins:[[{fechaSuperBowlWins:[new Date ("1970-01-11"), new Date ("2020-02-02")]}]]}, 
    {_id: 2, fechas: "Green Bay Packers", superBowlWins:[[{fechaSuperBowlWins:[new Date("1967-01-15"), new Date ("1968-01-14"), new Date ("1997-01-97"), new Date("2011-02-06")]}]]},
    {_id: 3, fechas: "Buffalo Bills", superBowlWins:[[{fechaSuperBowlWins:[new Date ("1965-01-14")]}]]},
    {_id: 4, fechas: "Tampa Bay Buccaneers", superBowlWins:[{fechaSuperBowlWins:[new Date ("2003-01-26"),new Date ("2021-02-07")]}]},
    {_id: 5, fechas: "Miami Dolphins", superBowlWins:[{fechaSuperBowlWins:[new Date ("1973-01-14"),new Date ("1974-01-13")]}]},
    {_id: 6, fechas: "Chicago Bears", superBowlWins:[{fechaSuperBowlWins:[new Date ("1986-01-26")]}]},
    {_id: 7, fechas: "Las Vegas Raiders", superBowlWins:[{fechaSuperBowlWins:[new Date ("1977-01-09"), new Date ("1981-01-25"), new Date("1984-01-22")]}]},
    {_id: 8, fechas: "Baltimore Ravens", superBowlWins:[{fechaSuperBowlWins:[new Date ("2001-01-28"),new Date ("2013-02-03")]}]},
    {_id: 9, fechas: "Tennessee Titans", superBowlWins:[[{fechaSuperBowlWins:[new Date ("1960-01-21")]}]]},
    {_id: 10, fechas: "Minnesota Vikings", superBowlWins:[[{fechaSuperBowlWins:[new Date ("1966-01-10")]}]]},
    {_id: 11, fechas: "New England Patriots", superBowlWins:[{fechaSuperBowlWins:[new Date ("2002-02-03"),new Date ("2004-02-01"), new Date ("2005-02-06"),new Date ("2015-02-01"), new Date ("2017-02-05"),new Date ("2019-02-03")]}]}, 
    {_id: 12, fechas: "New York Jets", superBowlWins:[{fechaSuperBowlWins:[new Date ("1969-01-12")]}]},
    {_id: 13, fechas: "Washington Football Team", superBowlWins:[{fechaSuperBowlWins:[new Date ("1983-01-30"), new Date("1988-01-31"), new Date("1992-01-26")]}]},
    {_id: 14, fechas: "Atlanta Falcons", superBowlWins:[[{fechaSuperBowlWins:[new Date ("1962-01-31")]}]]},
    {_id: 15, fechas: "New Orleans Saints", superBowlWins:[{fechaSuperBowlWins:[new Date ("2010-02-07")]}]},
    {_id: 16, fechas: "Dallas Cowboys", superBowlWins:[{fechaSuperBowlWins:[new Date ("1972-01-16"),new Date ("1978-01-15"), new Date ("1993-01-31"),new Date ("1994-01-30"), new Date ("1996-01-28")]}]},
    {_id: 17, fechas: "Jacksonville Jaguars", superBowlWins:[[{fechaSuperBowlWins:[new Date ("1955-01-21")]}]]},
    {_id: 18, fechas: "Indianapolis Colts", superBowlWins:[{fechaSuperBowlWins:[new Date ("1971-01-17"),new Date ("2007-02-04")]}]},
    {_id: 19, fechas: "Detroit Lions", superBowlWins:[[{fechaSuperBowlWins:[new Date ("1957-01-04")]}]]},
    {_id: 20, fechas: "Pittsburgh Steelers", superBowlWins:[{fechaSuperBowlWins:[new Date ("1975-01-12"),new Date ("1976-01-18"), new Date ("1979-01-21"),new Date ("1980-01-20"), new Date ("2006-02-05"),new Date ("2009-02-01")]}]},
    {_id: 21, fechas: "Cleveland Browns", superBowlWins:[[{fechaSuperBowlWins:[new Date ("1958-01-05")]}]]},
    {_id: 22, fechas: "Los Angeles Chargers", superBowlWins:[[{fechaSuperBowlWins:[new Date ("1961-01-06")]}]]},
    {_id: 23, fechas: "Arizona Cardinals", superBowlWins:[[{fechaSuperBowlWins:[new Date ("1959-01-11")]}]]},
    {_id: 24, fechas: "Carolina Panthers", superBowlWins:[[{fechaSuperBowlWins:[new Date ("1963-01-15")]}]]},
    {_id: 25, fechas: "Philadelphia Eagles", superBowlWins:[{fechaSuperBowlWins:[new Date ("2018-02-04")]}]},
    {_id: 26, fechas: "Denver Broncos", superBowlWins:[{fechaSuperBowlWins:[new Date ("1998-01-25"), new Date ("1999-01-31"), new Date ("2016-02-07")]}]},
    {_id: 27, fechas: "Seattle Seahawks", superBowlWins:[{fechaSuperBowlWins:[new Date ("2014-02-02")]}]},
    {_id: 28, fechas: "Los Angeles Rams", superBowlWins:[{fechaSuperBowlWins:[new Date ("2000-01-30")]}]},
    {_id: 29, fechas: "San Francisco 49ers", superBowlWins:[{fechaSuperBowlWins:[new Date ("1982-01-24"),new Date ("1985-01-20"), new Date ("1989-01-22"),new Date ("1990-01-28"), new Date ("1995-01-29")]}]},
    {_id: 30, fechas: "New York Giants", superBowlWins:[{fechaSuperBowlWins:[new Date ("1987-01-25"),new Date ("1991-01-27"), new Date ("2008-02-03"),new Date ("2012-02-05")]}]},
    {_id: 31, fechas: "Cincinnati Bengals", superBowlWins:[[{fechaSuperBowlWins:[new Date ("1964-01-21")]}]]},
    {_id: 32, fechas: "Houston Texans", superBowlWins:[[{fechaSuperBowlWins:[new Date ("1956-01-15")]}]]},
    ])