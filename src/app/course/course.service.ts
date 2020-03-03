
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
        let coursesCount = 5;

        for (let i = 0; i < coursesCount; i++) {
            courses.push(
                this.generateCourse(i)
            );
        }

        return courses;
    }

    private generateCourse(id:number = 0) : ICourse {
        let randomName = Math.random().toString(36).substring(7);
        let randomFavorite = Math.random() >= 0.5;

        let course: ICourse = {
            id : id,
            isFavorite : randomFavorite,
            description : '',
            image : 'NoImg',
            name : randomName,
            price : 0
        };

        return course;
    }

  }