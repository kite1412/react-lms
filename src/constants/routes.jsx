import CalendarIcon from "../assets/calendar.svg?react";
import CourseIcon from "../assets/course.svg?react";
import ChatIcon from "../assets/chat.svg?react";
import DashboardIcon from "../assets/dashboard.svg?react";

export const routes = [
  { name: "Dashboard", path: "/", icon: <DashboardIcon /> },
  { name: "Courses", path: "/courses", icon: <CourseIcon /> },
  { name: "Calendar", path: "/calendar", icon: <CalendarIcon /> },
  { name: "Communication", path: "/communication", icon: <ChatIcon /> }
];