import CourseCards from "../components/CourseCards";
import ContentLayout from "../layouts/ContentLayout";

function CoursesPage() {
  return (
    <ContentLayout
      menu={"COURSES"}
      className="overflow-x-hidden"
      content={<CourseCards />}
    />
  );
}

export default CoursesPage;
