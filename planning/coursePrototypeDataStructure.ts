// Prototyping some object oriented design for YULearn, York Univerity Lassonde Engineering BEST Hackathon 2025 

class Review {
    value: string;
    name: string;
    tookCourse: string; 
    course: string;

    //constructor
    constructor(value: string, name: string, tookCourse: string, course: string) {
        this.value = value;
        this.name = name;
        this.tookCourse = tookCourse;
        this.course = course;
    }
}


// Can also be a const, but did a class 
class Course{ 

    isEnrolled: boolean;
    title: string;
    language: string;
    time: string; //Can be changed to number
    diffculty: string; 
    introduction: string;
    learn: string[];
    prereq: string[];
    needs: string;

    //constructor
    constructor(isEnrolled: boolean, title: string, language: string, time: string, 
        diffculty: string, introduction: string, learn: string[], prereq: string[], needs: string) {
        this.isEnrolled = isEnrolled
        this.title = title; 
        this.language = language;
        this.time = time;
        this.diffculty = diffculty
        this.introduction = introduction;
        this.learn = learn;
        this.prereq = prereq;
        this.needs = needs;
    }

    //print
    printDetails(): void {
        console.log(this);
    }

}

//puesdo-database for reviews
const reviews: Review[] = [
    new Review("I liked this course it was very useful", "Miguel", "Fall 2023", "Software Engineering"),
    new Review("I hated this course it was not useful", "David", "Spring 2025", "Software Engineering"),
    new Review("It was okay", "Subaru", "Fall 2024", "Spongebob Squarepants")
];

//function to fliter by class
function filterReviewsByClass(courseTitle: string): Review[] {
    return reviews.filter(review => review.course === courseTitle);
}
  
//example class
const ProgrammingCourse1293 = new Course(false, "Software Engineering", "English", "12 weeks", "Intermediate", "an Introduction...", ["Python", 
    "Javascript"], ["Python", "Data Structures 1"], "Windows Computer");

const filteredReviews = filterReviewsByClass("Software Engineering");

//print
ProgrammingCourse1293.printDetails();
console.log(filteredReviews);
