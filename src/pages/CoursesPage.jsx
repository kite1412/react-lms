import { useQuery } from "@tanstack/react-query";
import CourseCards from "../components/CourseCards";
import ContentLayout from "../layouts/ContentLayout";
import courseService from "../services/courseService";

function CoursesPage() {
  const { data, isPending } = useQuery({
    queryKey: ["my-courses"],
    queryFn: async () => {
      const res = await courseService.getMyCourses();

      console.log(res);

      return res;
    }
  });

  return (
    <ContentLayout
      menu={"COURSES"}
      content={
        !isPending && data ? <CourseCards courses={data.data} /> : <></>
      }
    />
  );
}

export default CoursesPage;
