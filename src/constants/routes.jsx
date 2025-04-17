import CalendarIcon from "../assets/calendar.svg?react";
import CourseIcon from "../assets/course.svg?react";
import DashboardIcon from "../assets/dashboard.svg?react";
import UserIcon from "../assets/circle-user-round.svg?react";

export const routes = [
  { name: "Dashboard", path: "/", icon: <DashboardIcon /> },
  { name: "Courses", path: "/courses", icon: <CourseIcon /> },
  { name: "Calendar", path: "/calendar", icon: <CalendarIcon /> },
  { name: "Profile", path: "/profile", icon: <UserIcon /> }
];