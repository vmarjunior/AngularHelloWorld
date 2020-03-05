
export class Course {
    id: number;
    isFavorite?: boolean;
    isLiked?: boolean;
    likeCount?: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category?: Category;
}

export class Category{
  id: number;
  description: string;
}

export class CoursesService {

    getCourses(): Course[] {
        let courses: Course[] = [];
        let coursesCount = 10;

        for (let i = 0; i < coursesCount; i++) {
            courses.push(
                this.generateCourse(i)
            );
        }

        return courses;
    }

    private generateCourse(id: number = 0): Course {
        let randomFavorite = Math.random() >= 0.5;
        let randomLikes = Math.floor(Math.random() * 100);
        let courseName = 'Angular Course ' + (id + 1);

        let course: Course = {
            id: id,
            isFavorite: randomFavorite,
            likeCount: randomLikes,
            description: '',
            image: 'assets/images/angularCourse.jpg',
            name: courseName,
            price: 0
        };

        return course;
    }

}
