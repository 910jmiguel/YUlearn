// Prototyping some object oriented design for YULearn, York Univerity Lassonde Engineering BEST Hackathon 2025 

class Review {
    value: string; //The actual review (str)
    name: string; //The name of the reviewer (str)
    tookCourse: string; //When they took the course (str)
    course: string; //The exact course (str)

    //constructor
    constructor(value: string, name: string, tookCourse: string, course: string) {
        this.value = value;
        this.name = name;
        this.tookCourse = tookCourse;
        this.course = course;
    }
}

class Question {
    quesiton: string; //The question (str)
    answer: string | number | boolean; //The answer (str/num/bool)
    star: boolean; //If the user starred the question (boolean)
    course: string; //The exact course (str)

    //constructor
    constructor(quesiton: string, answer: string | number | boolean; star: boolean, course: string) {
        this.quesiton = quesiton;
        this.answer = answer;
        this.star = star;
        this.course = course;
    }

    //check answer function
    checkAnswer(attempt: string): string {
        let result: string;
        //string
        if (typeof this.answer === "string") {
            if (this.answer === attempt) {
                result = "correct";
            } else {
                result = "incorrect";
            }
        } 
        //number
        else if (typeof this.answer === "number"){
            if (this.answer === Number(attempt)) {
                result = "correct";
            } else {
                result = "incorrect";
            }
        }
        //boolean
        else {
            if (this.answer === true && attempt === "true" || this.answer === false && attempt === "false") {
                result = "correct";
            } else {
                result = "incorrect";
            }
            
        }
        return result; 
    }
        
}

// Can also be a const, but did a class 
class Course{ 

    isEnrolled: boolean; //If the user is enrolled in the course or not (bool)
    course: string; //The exact course (str)
    language: string; //Language of the course taught in (str)
    time: string; //Time it takes to complete this module (str)
    diffculty: string; //Diffculty of the course (str)
    introduction: string; //Introduction paragraph (str)
    learn: string[]; //What you will learn (an array of str)
    prereq: string[]; //What you need to know before joining (an array of str)
    needs: string; //What you need for the course (str)

    //constructor
    constructor(isEnrolled: boolean, course: string, language: string, time: string, 
        diffculty: string, introduction: string, learn: string[], prereq: string[], needs: string) {
        this.isEnrolled = isEnrolled
        this.course = course; 
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



//puesdo-database for questions
const questions: Question[] = [
    new Question("Would the value, 2.3, fit into the int type?", false, false, "Software Engineering"),
    new Question("Describe what is a data type", "adjusts mem location...", true, "Software Engineering"),
    new Question("When was the Canadian constitution patriated?", 1981, true, "Canadian History"),
];

//function to fliter by class
function filterReviewsByClass(courseTitle: string): Review[] {
    return reviews.filter(review => review.course === courseTitle);
}

function filterReviewsByQuestion(courseTitle: string): Question[] {
    return questions.filter(question => question.course === courseTitle);
}
  
function filterQuestionsByStar(): Question[] {
    return questions.filter(question => question.star === true);
}
  
//example class
const ProgrammingCourse1293 = new Course(false, "Software Engineering", "English", "12 weeks", "Intermediate", "an Introduction...", ["Python", 
    "Javascript"], ["Python", "Data Structures 1"], "Windows Computer");

const filteredReviews = filterReviewsByClass("Software Engineering");
const filteredQuestions = filterReviewsByQuestion("Software Engineering");
const starredQuestions = filterQuestionsByStar();

//print
ProgrammingCourse1293.printDetails();
console.log(filteredReviews);
console.log(filteredQuestions);
console.log(starredQuestions);

//check questions, input always str
console.log(questions[0].checkAnswer("false")); 
console.log(questions[1].checkAnswer("adjusts mem location...")); 
console.log(questions[2].checkAnswer("1981"));
console.log(questions[2].checkAnswer("1990"));