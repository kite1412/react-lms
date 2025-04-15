import { useQuery } from "@tanstack/react-query";
import CourseCards from "../components/CourseCards";
import ContentLayout from "../layouts/ContentLayout";
import courseService from "../services/courseService";

function CoursesPage() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["my-courses"],
    queryFn: async () => await courseService.getMyCourses(),
  });

  if (isPending) return <div>Loading courses...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ContentLayout
      menu={"COURSES"}
      content={<CourseCards courses={data.data} />}
    />
  );
}

export default CoursesPage;
