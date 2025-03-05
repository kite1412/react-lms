import CourseCards from "../components/CourseCards";
import ContentLayout from "../layouts/ContentLayout";

function CoursesPage() {
  return (
    <ContentLayout
      menu={"COURSES"}
      content={<CourseCards />}
    />
  );
}

export default CoursesPage;
