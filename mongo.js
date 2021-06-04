//Students



db.students.insert({name:"Veronique" ,city :"Paris"})
db.students.insert({name:"Steeven" ,city :"Lyon"})
db.students.insert({name:"Marc",city:"Marseille"})
db.students.insert({name:"Nour",city:"Lyon"})
db.students.insert({name:"Romain",city:"Paris"})
db.students.insert({name:"Sophie",city:"Paris"})

db.students.find()

//languages


db.languages.insert({name:"french"})
db.languages.insert({name:"english"})
db.languages.insert({name:"german"})
db.languages.insert({name:"spanish"})
db.languages.insert({name:"mandarin"})

db.languages.find()


// favorites

db.favorites.insert({class:"Maths",sport:"Cricket",student_id:2})
db.favorites.insert({class:"Music",sport:"Hip-hop",student_id:6})
db.favorites.insert({class:"Arts",sport:"Boxing",student_id:1})
db.favorites.insert({class:"Computer-science",sport:"Tennis",student_id:5})
db.favorites.insert({class:"Arts",sport:"Baseball",student_id:4})

db.languages.find()

//students_languages

db.students_languages.insert({student_id:1,language_id:1})

db.students_languages.insert({student_id:1,language_id:2})

db.students_languages.insert({student_id:2,language_id:1})

db.students_languages.insert({student_id:2,language_id:3})

db.students_languages.insert({student_id:3,language_id:1})

db.students_languages.insert({student_id:4,language_id:1})

db.students_languages.insert({student_id:4,language_id:2})

db.students_languages.insert({student_id:4,language_id:4})

db.students_languages.insert({student_id:4,language_id:5})

db.students_languages.insert({student_id:5,language_id:1})

db.students_languages.insert({student_id:5,language_id:5})

db.students_languages.insert({student_id:6,language_id:1})

db.students_languages.insert({student_id:6,language_id:2})

db.students_languages.insert({student_id:6,language_id:3})


// rapport lvl 1
 
//1
db.students.find(ObjectId("60ba1cd5a533418bbde4a26d"))
// 2
db.students.find(ObjectId("60ba1d65a533418bbde4a270"))
// 3 je ne sais pas lequel est le bon donc j'ai mis les 2 
db.students.find({_id:ObjectId("60ba1d65a533418bbde4a270")},{name:"Sophie",city:"Paris",_id:0})
db.students.find({_id:ObjectId("60ba1d65a533418bbde4a270")},{_id:0})
//4
db.students.find ({_id:ObjectId("60ba1c66a533418bbde4a26c")},{name:"Steeven",_id:0})
db.students.find ({_id:ObjectId("60ba1c66a533418bbde4a26c")},{city:0,_id:0})
//5
db.students.find ({city:"Paris"})
//6
db.students.find({city:"Lyon"},{city:0,_id:0})

