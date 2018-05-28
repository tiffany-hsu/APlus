db = db.getSiblingDB('toDoSample')
db.createCollection('users')
usersCollection = db.getCollection("users")
usersCollection.remove({})
usersCollection.insert(
{
	  name: "Spanish 101",
	  description: "Section 1 Spanish Course",
	  courseId: 1,
	  due: "04-27-2015",
	  state: "A",
	  owner: "samM"
}
)


db = db.getSiblingDB('toDoSample')
db.createCollection('courses')
coursesCollection = db.getCollection("courses")
coursesCollection.remove({})
coursesCollection.insert(
{
	  name: "Spanish 101",
	  description: "Section 1 Spanish Course",
	  courseId: 1,
	  due: "04-27-2015",
	  state: "A",
	  owner: "samM"
}
)
coursesCollection.insert(
{
	  name: "Tagalog 101",
	  description: "Section 1 Tagalog Course",
	  courseId: 2,
	  due: "05-27-2015",
	  state: "A",
	  owner: "samM"
}
)
coursesCollection.insert(
{
	  name: "Vietnamese 101",
	  description: "Section 1 Vietnamese Course",
	  courseId: 3,
	  due: "08-27-2015",
	  state: "A",
	  owner: "samM"
}
)


db.createCollection('assessments')
assessmentsCollection = db.getCollection("assessments")
assessmentsCollection.remove({})
assessmentsCollection.insert(
{
	courseId : 1,
	assessments : [
	 {
	  description: "Are there any questions?",
	  options: ["Hay preguntas?","Hoy preguntas?","Hay preguntos?","Hoy preguntos?"],
	  assessmentId: 1,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Slower Please.",
	  options: ["Mos despacio, por favor","Mas despiacio, por favor","Mos despacio, por favor"],
	  assessmentId: 2,
	  shared: "N",
	  status: "I"
	 }
	]
}
)
assessmentsCollection.insert(
{
	courseId : 2,
	assessments : [
	 {
	  description: "Translate 11",
	  options: ["Hay preguntas?","Hoy preguntas?","Hay preguntos?","Hoy preguntos?"],
	  assessmentId: 1,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 22",
	  options: ["Mos despacio, por favor","Mas despiacio, por favor","Mos despacio, por favor"],
	  assessmentId: 2,
	  shared: "N",
	  status: "I"
	 }
	]	
}
)
assessmentsCollection.insert(
{
	courseId : 3,
	assessments : [
	 {
	  description: "Translate 111",
	  options: ["Hay preguntas?","Hoy preguntas?","Hay preguntos?","Hoy preguntos?"],
	  assessmentId: 1,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 222",
	  options: ["Mos despacio, por favor","Mas despiacio, por favor","Mos despacio, por favor"],

	  assessmentId: 2,
	  shared: "N",
	  status: "I"
	 },
	]	
}
)