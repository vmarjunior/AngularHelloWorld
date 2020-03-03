
interface ICourse {
    id: number;
    isFavorite: boolean;
    name: string;
    price: number;
    image: string;
    description: string;
  }

  export class CoursesService {

    getCourses() : ICourse[] {
        let courses: ICourse[] = [];
        let coursesCount = 50;

        for (let i = 0; i < coursesCount; i++) {
            courses.push(
                this.generateCourse(i)
            );
        }

        return courses;
    }

    private generateCourse(id:number = 0) : ICourse {
        let randomFavorite = Math.random() >= 0.5;
        let courseName = 'Angular Course ' + (id + 1);

        let course: ICourse = {
            id : id,
            isFavorite : randomFavorite,
            description : '',
            image : 'assets/images/angularCourse.jpg',
            name : courseName,
            price : 0
        };

        return course;
    }

  }