//1. Börja med att skapa en skola som ett objekt.
// Objektet ska existera innuti en variabel som ni namnger med skolans namn för att göra det simpel.
// Skolan ska innehålla egenskaperna: name, address, zipcode, city, students med värdet av en tom array
// och teachers som en tom array.Till exempel:

const lexicon = {
  name: "lexicon",
  students: [],
  teachers: [],
  address: "Årstaängsvägen 9",
  zipcode: 12345,
  city: "Stockholm",

  subjects: []
};

//2. Skapa tre stycken olika ämnen, varje ämne ska vara ett objekt med en variabel motsvarande namnet på ämnet.
// Egenskaperna ska vara name, students som en tom array och teacher som ett tomt objekt.Till Exempel:

const math = {
  name: "Math",
  students: [],
  teacher: {}, //null,
};

const frontend = {
  name: "Fronend Development",
  students: [],
  teacher: {}, //null,
};

const physics = {
  name: "Physics",
  students: [],
  teacher: {}, //null,
};
lexicon.subjects.push(math, frontend, physics);

// 3.  Skapa fem stycken studenter, där namnet på studenten motsvara variabeln.
// Egenskaperna ska vara name, age, gender och subjects som en tom array.
const donald = {
  name: "Donald Trump",
  age: 90,
  gender: "Male",
  subjects: [],
};
const lara = {
  name: "Lara Croft",
  age: 28,
  gender: "Female",
  subjects: [],
};
const marilyn = {
  name: "Marilyn Monroe",
  age: 97,
  gender: "Female",
  subjects: [],
};
const elvis = {
  name: "Elvis Presley",
  age: 89,
  gender: "Male",
  subjects: [],
};
const jesus = {
  name: "Jesus",
  age: 2024,
  gender: "Male",
  subjects: [],
};

// 4.  Skapa två stycken lärare med namnet som variabel och egenskaperna name och subjects som en tom array.

const niklas = {
  name: "Niklas",
  subjects: [],
  //addSubject: function (subject) {},
};

const thomas = {
  name: "Thomas",
  subjects: [],
  //addSubject: function (subject) {},
};

// 5.  Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray.
// push() eller unshift() Kommer du ihåg skillnaden på dem två ?
// Skriv sen ut både läraren och ämnet du valde i konsolen och inspektera dem.
// Resonera, hur kan man använda den datan ur ett admins perspektiv på en skola, och tycker du den är komplett ? Vad saknas ?
//niklas.subjects.push(frontend);
//console.log(niklas.name, niklas.subjects[0]);
// console.log(niklas);
// console.log(frontend); //Frontend-ämnet har forfarande inte någon lärare

// 6.  Lägg till en student i ett ämnes studentarray. Skriv ut och inspektera i konsolen.
//frontend.students.push(marilyn);
// console.log(frontend);

// 7.  För att lösa problematiken i de två senaste uppgifterna så bör man i sådana här fall lägga till kopplingen i båda objekten.
// Alltså vi börjar med att lägga till ett ämne i en lärarens ämnesarray, och sen byter vi ut det tomma lärarobjekten i ämnet mot läraren.
// Då har vi en referens på båda sidorna.
// Egentligen är detta något som kallas för en cirkulär referens vilket vi helst vill undvika när vi programmerar,
// då kan orsaka krashar i vissa fall, men i syftet för uppgiften så är det ingen fara.
// Skapa nu en funktion som heter _addSubjectToTeacher_ som tar emot ett ämne och en lärare,
// och parar ihop dessa.Returnera sen läraren så du kan se förändringen i lärarens ämnesarray.
function addSubjectToTeacher(subject, teacher) {
  subject.teacher = teacher;
  teacher.subjects.push(subject);
  return teacher;
}

// 8.  Varför ha en fristående funktion som lägger till ämne till en lärare? Varför inte bara lägga till en funktion
// (alltså en metod eftersom funktionen då är kopplad till ett specifikt objekt) i lärarnas objekt som en egenskap ? Till exempel:

// Två sätt, antingen går du in i varje lärarobjekt och lägger till en egenskap:
// Tänk på att "this" måste användas för att referera till det egna objektets egenskaper.

// Andra sättet är att helt enkelt lägga till en egenskap med hjälp av punktnotation:
niklas.addSubject = function (subject) {
  this.subjects.push(subject);
  subject.teacher = this;
};

// Då kan vi ju sen kalla på denna metod via lärarobjektet.
//niklas.addSubject(math);

// Prova det i konsolen!
//console.log(niklas);

// 9. Skapa följande metoder (Någon eller ett par av metoderna kan förekomma flera gånger fast på olika objekt med olika logik)
// och lägg in de i rätt typ av objekt: _addTeacher_, _enlistToSubject_, _addStudent_, _addSubject_
function enlistToSubject(subject) {
  this.subjects.push(subject);
  subject.students.push(this);
}
// function addStudent(student) {
//   this.students.push(student);
// }

lexicon.addTeacher = function (teacher) {
  this.teachers.push(teacher);
};
lexicon.addStudent = function (student) {
  this.students.push(student);
};
lexicon.addSubject = function (subject) {
  this.subjects.push(subject);
}

math.addTeacher = function (teacher) {
  this.teacher = teacher;
};
frontend.addTeacher = math.addTeacher;
physics.addTeacher = math.addTeacher;

donald.enlistToSubject = function (subject) {
  this.subjects.push(subject);
  subject.students.push(this);
};
lara.enlistToSubject = donald.enlistToSubject;
marilyn.enlistToSubject = donald.enlistToSubject;
elvis.enlistToSubject = donald.enlistToSubject;
jesus.enlistToSubject = donald.enlistToSubject;

// donald.addSubject = function (subject) {
//   this.subjects.push(subject);
//   subject.students.push(this);
// };
// lara.addSubject = donald.addSubject;
// marilyn.addSubject = donald.addSubject;
// elvis.addSubject = donald.addSubject;
// jesus.addSubject = donald.addSubject;

thomas.addSubject = niklas.addSubject;

// 10. Prova att leka runt med alla de skapade metoderna i konsolen och försöka lägga till i de olika objekten.
// Skriv ut objekten hela tiden och inspektera dem.
// Kan du tänka dig någon likhet med ett riktigt adminprogram för en skola där en admin till exempel skriver ut en lista på alla ämnen
// för att se vilka respektive lärare som är ansvariga för respektive kurs.
// lexicon.addSubject(math);
// lexicon.addSubject(frontend);
// lexicon.addSubject(physics);

// lexicon.addStudent(donald);
// lexicon.addStudent(lara);
// lexicon.addStudent(marilyn);
// lexicon.addStudent(elvis);
// lexicon.addStudent(jesus);

// niklas.addSubject(frontend);
// thomas.addSubject(math);
// thomas.addSubject(physics);

// donald.enlistToSubject(physics);
// lara.enlistToSubject(math);
// marilyn.enlistToSubject(frontend);
// elvis.enlistToSubject(frontend);
// jesus.enlistToSubject(frontend);
// donald.enlistToSubject(frontend);

// 11. Skapa fler metoder, _quitSubject_, _removeTeacher_, _relegateStudent_, _fireTeacher_.
// I vilka objekt hör dessa metoder hemma ?
// Och om vi till exempel sparkar en lärare, så måste vi ju ta bort lärarens koppling med skolan, och ämnet / ämnerna som läraren undervisar i.
// Hur löser vi detta i våra metoder, nu får vi börja tänka oss för lite.
function quitSubject(subject) {
  let sIx = this.subjects.indexOf(subject);
  if (sIx >= 0) {
    this.subjects.splice(sIx, 1);
    sIx = subject.students.indexOf(this);
    if (sIx >= 0) {
      subject.students.splice(sIx, 1);
    }
  }
}
donald.quitSubject = quitSubject;
lara.quitSubject = quitSubject;
marilyn.quitSubject = quitSubject;
elvis.quitSubject = quitSubject;
jesus.quitSubject = quitSubject;

/******/

function removeTeacher(teacher) {
  this.teacher = {};
  let sIx = teacher.subjects.indexOf(this);
  if (sIx >= 0) {
    teacher.subjects.splice(sIx, 1);
  }
}
math.removeTeacher = removeTeacher;
frontend.removeTeacher = removeTeacher;
physics.removeTeacher = removeTeacher;

/******/
lexicon.relegateStudent = function (student) {
  let sIx = this.students.indexOf(student);
  if (sIx >= 0) {
    this.students.splice(sIx, 1);
  }
  // for (let subject of this.subjects) {
  //   sIx = subject.students.indexOf(student);
  //   if (sIx >= 0) {
  //     subject.students.splice(sIx, 1);
  //   }
  // }
  for (let subject of student.subjects) {
    sIx = subject.students.indexOf(student);
    if (sIx >= 0) {
      subject.students.splice(sIx, 1);
    }
  }
  student.subjects.splice(0);
}
/*******/
lexicon.fireTeacher = function (teacher) {
  // for (let subject of teacher.subjects) {
  //   subject.teacher = {}; 
  // }
  teacher.subjects.forEach(s => s.teacher = {});
  let tIx = this.teachers.indexOf(teacher);
  if (tIx >= 0) {
    this.teachers.splice(tIx, 1);
  }
  teacher.subjects.splice(0);
}

// 12. Lek runt med dessa metoder i konsolen. Lägg till lite här och ta bort lite där. Rätt smidigt va?

// 13. Ny bygger vi på det lite. För att undvika att behöva anropa massa metoder i konsolen när vi startar om programmet
// (vilket händer vid varje redigering av script - filen) så kan vi längst ner i script-filen skapa
// (alltså den koden läses in sist hela tiden) logik för att koppla några studenter till skolan,
// några ämnen till studenterna och några lärare till ämnena och så vidare. Skapa sån logik nu.


// 14. Skapa en funktion (OBS, en fristående funktion) , _displayAllStudents_ som loopar igenom skolans alla studenter med hjälp av en for-loop.
// Tänk på att en vanlig for..of loop inte fungerar här(varför är det så ?).
// Vi måste använda en for..IN loop, och en for..in loop låter oss loopa igenom ett objekts egenskaper(även kallad nycklar, _keys_) och
// på så sätt kunna koppa åt alla egenskaperna värde.Syntax:
// for (keys in medieinstitutet.students) {
//   /*logik för att printa ut studenterna*/
// }

function displayAllStudents(school) {
  console.log("Students in " + school.name + ":");
  for (let student of school.students) {
    // let info = "";
    // for (let att in student) {
    //   info += `${att}: ${student[att]}  `;
    // }
    let info = `  ${student.name} (${student.gender})  age:${student.age}  subjects:${student.subjects.map(s => s.name).join()}`;
    
    console.log(info)
  }
  return school;
}


// [Länk, for-loops w3schools](https://www.w3schools.com/js/js_loop_for.asp)
// [Länk om for..in loops specifikt.](https://www.programiz.com/javascript/for-in)

//15. Skapa nu fler funktioner,
// _displayAllSubjectsOfStudent(student)_,
// _displayAllStudentsEnlistedToSubject(subject)_,
// _displayAllTeachers_. Varje funktion bör ha något returvärde.

function displayAllSubjectsOfStudent(student) {
  console.log("Subjects studied by " + student.name + ":");
  for (let subject of student.subjects) {
    let subjectInfo = `  ${subject.name}  teacher:(${subject.teacher.name ? subject.teacher.name : "Vacant"})  #students:${subject.students.length}`;
    console.log(subjectInfo)
  }
  return student;
}
function displayAllStudentsEnlistedToSubject(subject) {
  console.log("Students of " + subject.name + ":");
  for (let student of subject.students) {
    let info = `  ${student.name} (${student.gender})  age:${student.age}  subjects:${student.subjects.map(s => s.name).join()}`;
    console.log(info)
  }
  return subject;
}
function displayAllTeachers(school) {
  console.log(`Teachers of ${school.name}: ${school.teachers.map(t => t.name).join()}`);
  return school;
}


//16. Bygg ut med ett ytterligare typ av objekt, lägg till objekt som handlar om betyg.
// Vilka egenskaper ska dessa ha ? Vilka metoder kan behövas i dessa betygsobjekt ?
// Hur ska relationen mellan de andra objekten vara ?
// Vilka metoder bör finnas i de andra typerna av objekt som behandlar betyg ? Försöka lösa detta och inspektera och lek runt med det i konsolen.

donald.grades = [];
lara.grades = [];
marilyn.grades = [];
elvis.grades = [];
jesus.grades = [];
donald.grades.push({
  subject: frontend,
  approved: true,
  grade: 5,
  comment: "Excellent!",
  dateOfDecision: "2024-01-18"
});

math.displayGradesOfStudents = function () {
  console.log("Grades of Students of " + this.name + ":");
  for (let student of this.students) {
    let grades = student.grades.filter(g => g.subject === this);
    let gradeInfo;
    if (grades.length === 0)
      gradeInfo = "No grade given yet!"
    else
      gradeInfo = `${grades[0].approved?"Approved":"Failed"} grade:${grades[0].grade} ${grades[0].dateOfDecision}`
    let info = `  ${student.name}: ${gradeInfo}`;
    console.log(info)
  }
  return this;
};
frontend.displayGradesOfStudents = math.displayGradesOfStudents;
physics.displayGradesOfStudents = math.displayGradesOfStudents;

/************** END *************/

//13.
lexicon.addTeacher(niklas);
lexicon.addTeacher(thomas);

lexicon.addSubject(math);
lexicon.addSubject(frontend);
lexicon.addSubject(physics);

lexicon.addStudent(donald);
lexicon.addStudent(lara);
lexicon.addStudent(marilyn);
lexicon.addStudent(elvis);
lexicon.addStudent(jesus);

niklas.addSubject(frontend);
niklas.addSubject(math);
thomas.addSubject(math);
thomas.addSubject(physics);

donald.enlistToSubject(physics);
lara.enlistToSubject(math);
marilyn.enlistToSubject(frontend);
elvis.enlistToSubject(frontend);
jesus.enlistToSubject(frontend);
donald.enlistToSubject(frontend);

console.log(lexicon);
displayAllStudents(lexicon);
displayAllTeachers(lexicon);
displayAllStudentsEnlistedToSubject(math);
displayAllStudentsEnlistedToSubject(frontend);
displayAllStudentsEnlistedToSubject(physics);
displayAllSubjectsOfStudent(donald);
displayAllSubjectsOfStudent(lara);
displayAllSubjectsOfStudent(marilyn);
displayAllSubjectsOfStudent(elvis);
displayAllSubjectsOfStudent(jesus);
math.displayGradesOfStudents();
frontend.displayGradesOfStudents();
