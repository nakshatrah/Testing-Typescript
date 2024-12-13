interface TheSchool{
    name: string,
    numberOfStudents: number,
    theStudents: Student[],
    theTeachers: Teacher[]
}

interface TheClass{
    classroomNum: number,
    numberOfStudents: number,
    theStudents: Student[],
    theTeachers: Teacher[],
    grade: number
}

interface Attendance{
    students: Student[],
    name: Student["name"][],
    isPresent: Student["present"][]
}

type Student = {
    name: string,
    present: theStatus.Present
    grade: number
}

enum theStatus{
    Present,
    Absent
}

type Teacher = {
    name: string,
    yearsTaught: number
}
