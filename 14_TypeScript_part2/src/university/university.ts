enum CourseName {
    Mathematics = 'Mathematics',
    Physics = 'Physics',
    ComputerScience = 'Computer Science',
}

// id name credit
type Course = {
    courseName: CourseName;
    courseId: number;
    credit: number;
}

// Course number
interface CourseGrade {
    course: Course;
    grade: number;
}

class Student {
    readonly id: number;
    private _name: string;
    private readonly _birth: Date;
    private _grades: CourseGrade[] = [];

    constructor(id: number, name: string, birth: Date) {
        this.id = id;
        this._name = name;
        this._birth = birth;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (!value.trim())
            throw new Error("Name cannot be empty");
        this._name = value;
    }

    get birth(): Date {
        return this._birth;
    }

    get grades(): CourseGrade[] {
        return this._grades;
    }

    set grades(value: CourseGrade[]) {
        this._grades = value;
    }

    addGrade(course: Course, grade: number){
        this.grades.push({course: course, grade: grade});
    }

    getAge(): number {
        const today = new Date();
        let age = today.getFullYear() - this._birth.getFullYear();
        const monthDiff = today.getMonth() - this._birth.getMonth();
        if (monthDiff < 0 || monthDiff === 0 && today.getDate() < this._birth.getDate()) {
            age--;
        }
        return age;
    }
}

const courses: Course[] = [
{courseId:1, courseName: CourseName.Mathematics, credit: 3},
{courseId:1, courseName: CourseName.Physics, credit: 4},
{courseId:1, courseName: CourseName.ComputerScience, credit: 5},
]

const students: Student[] = [
    new Student(1, "Oleg", new Date(2002,6,15)),
    new Student(2, "Masha", new Date(2004,11,27)),
    new Student(3, "Vika", new Date(2001,1,31)),
    new Student(4, "Jane", new Date(1995,7,23)),
    new Student(5, "Jane", new Date(2000,4,28))
]