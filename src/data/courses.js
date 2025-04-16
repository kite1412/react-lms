import DefaultProfilePicture from "../assets/profile-picture-blank.png";

const courses = [
  {
    id: 0,
    courseName: "Struktur Data",
    instructor: "Harianto",
    profilePicture: DefaultProfilePicture,
    description:
      "Mata kuliah ini membahas tentang struktur data seperti linked list, stack, queue, dan tree.",
    assignments: [
      {
        id: "asg-0-1",
        title: "Tugas 1: Implementasi Linked List",
        dueDate: "2025-03-20",
      },
      {
        id: "asg-0-2",
        title: "Tugas 2: Stack dan Queue",
        dueDate: "2025-03-27",
      },
    ],
    materials: [
      {
        id: "mat-0-1",
        title: "Materi 1: Pengenalan Struktur Data",
        file: "struktur_data_introduction.pdf",
      },
      {
        id: "mat-0-2",
        title: "Materi 2: Implementasi Stack",
        file: "stack_implementation.pdf",
      },
    ],
    forums: [
      {
        id: "frm-0-1",
        type: "material",
        title: "Materi 1: Pengenalan Struktur Data",
        date: "2025-03-01",
      },
      {
        id: "frm-0-2",
        type: "material",
        title: "Materi 2: Implementasi Stack",
        date: "2025-03-05",
      },
      {
        id: "frm-0-3",
        type: "assignment",
        title: "Tugas 1: Implementasi Linked List",
        date: "2025-03-20",
      },
      {
        id: "frm-0-4",
        type: "assignment",
        title: "Tugas 2: Stack dan Queue",
        date: "2025-03-27",
      },
    ],
  },
  {
    id: 1,
    courseName: "Pemrograman Web",
    instructor: "Siti Rahma",
    profilePicture: DefaultProfilePicture,
    description:
      "Mata kuliah ini membahas tentang HTML, CSS, JavaScript, serta framework frontend dan backend.",
    assignments: [
      {
        id: "asg-1-1",
        title: "Tugas 1: Membuat Website Sederhana",
        dueDate: "2025-03-22",
      },
    ],
    materials: [
      {
        id: "mat-1-1",
        title: "Materi 1: HTML dan CSS",
        file: "html_css_basics.pdf",
      },
    ],
    forums: [
      {
        id: "frm-1-1",
        type: "material",
        title: "Materi 1: HTML dan CSS",
        date: "2025-03-01",
      },
      {
        id: "frm-1-2",
        type: "assignment",
        title: "Tugas 1: Membuat Website Sederhana",
        date: "2025-03-22",
      },
    ],
  },
  {
    id: 2,
    courseName: "Jaringan Komputer",
    instructor: "Budi Santoso",
    profilePicture: DefaultProfilePicture,
    description:
      "Mata kuliah ini membahas konsep dasar jaringan komputer dan protokol komunikasi.",
    assignments: [
      {
        id: "asg-2-1",
        title: "Tugas 1: Analisis Topologi Jaringan",
        dueDate: "2025-03-25",
      },
    ],
    materials: [
      { id: "mat-2-1", title: "Materi 1: OSI Model", file: "osi_model.pdf" },
    ],
    forums: [
      {
        id: "frm-2-1",
        type: "material",
        title: "Materi 1: OSI Model",
        date: "2025-03-01",
      },
      {
        id: "frm-2-2",
        type: "assignment",
        title: "Tugas 1: Analisis Topologi Jaringan",
        date: "2025-03-25",
      },
    ],
  },
  {
    id: 3,
    courseName: "Basis Data",
    instructor: "Dian Lestari",
    profilePicture: DefaultProfilePicture,
    description:
      "Mata kuliah ini membahas tentang model relasional, SQL, dan perancangan basis data.",
    assignments: [
      { id: "asg-3-1", title: "Tugas 1: ER Diagram", dueDate: "2025-03-18" },
    ],
    materials: [
      {
        id: "mat-3-1",
        title: "Materi 1: Model Relasional",
        file: "relational_model.pdf",
      },
    ],
    forums: [
      {
        id: "frm-3-1",
        type: "material",
        title: "Materi 1: Model Relasional",
        date: "2025-03-05",
      },
      {
        id: "frm-3-2",
        type: "assignment",
        title: "Tugas 1: ER Diagram",
        date: "2025-03-18",
      },
    ],
  },
  {
    id: 4,
    courseName: "Kecerdasan Buatan",
    instructor: "Agus Wijaya",
    profilePicture: DefaultProfilePicture,
    description:
      "Mata kuliah ini membahas dasar-dasar kecerdasan buatan, machine learning, dan aplikasinya.",
    assignments: [
      { id: "asg-4-1", title: "Tugas 1: Decision Tree", dueDate: "2025-03-29" },
    ],
    materials: [
      { id: "mat-4-1", title: "Materi 1: Pengenalan AI", file: "ai_intro.pdf" },
    ],
    forums: [
      {
        id: "frm-4-1",
        type: "material",
        title: "Materi 1: Pengenalan AI",
        date: "2025-03-03",
      },
      {
        id: "frm-4-2",
        type: "assignment",
        title: "Tugas 1: Decision Tree",
        date: "2025-03-29",
      },
    ],
  },
  {
    id: 5,
    courseName: "Algoritma dan Pemrograman",
    instructor: "Rina Andriani",
    profilePicture: DefaultProfilePicture,
    description:
      "Mata kuliah ini membahas tentang logika pemrograman, algoritma dasar, dan struktur kontrol.",
    assignments: [
      {
        id: "asg-5-1",
        title: "Tugas 1: Algoritma Sorting",
        dueDate: "2025-03-26",
      },
    ],
    materials: [
      {
        id: "mat-5-1",
        title: "Materi 1: Struktur Kontrol",
        file: "struktur_kontrol.pdf",
      },
    ],
    forums: [
      {
        id: "frm-5-1",
        type: "material",
        title: "Materi 1: Struktur Kontrol",
        date: "2025-03-10",
      },
      {
        id: "frm-5-2",
        type: "assignment",
        title: "Tugas 1: Algoritma Sorting",
        date: "2025-03-26",
      },
    ],
  },
  {
    id: 6,
    courseName: "Pemrograman Mobile",
    instructor: "Yusuf Maulana",
    profilePicture: DefaultProfilePicture,
    description:
      "Mata kuliah ini membahas tentang pengembangan aplikasi mobile menggunakan Android dan Flutter.",
    assignments: [
      {
        id: "asg-6-1",
        title: "Tugas 1: Aplikasi Todo List",
        dueDate: "2025-03-23",
      },
    ],
    materials: [
      {
        id: "mat-6-1",
        title: "Materi 1: Dasar Flutter",
        file: "flutter_intro.pdf",
      },
    ],
    forums: [
      {
        id: "frm-6-1",
        type: "material",
        title: "Materi 1: Dasar Flutter",
        date: "2025-03-07",
      },
      {
        id: "frm-6-2",
        type: "assignment",
        title: "Tugas 1: Aplikasi Todo List",
        date: "2025-03-23",
      },
    ],
  },
  {
    id: 7,
    courseName: "Sistem Operasi",
    instructor: "Nina Kurnia",
    profilePicture: DefaultProfilePicture,
    description:
      "Mata kuliah ini membahas konsep sistem operasi termasuk proses, thread, dan manajemen memori.",
    assignments: [
      {
        id: "asg-7-1",
        title: "Tugas 1: Simulasi Penjadwalan CPU",
        dueDate: "2025-03-28",
      },
    ],
    materials: [
      {
        id: "mat-7-1",
        title: "Materi 1: Manajemen Proses",
        file: "manajemen_proses.pdf",
      },
    ],
    forums: [
      {
        id: "frm-7-1",
        type: "material",
        title: "Materi 1: Manajemen Proses",
        date: "2025-03-06",
      },
      {
        id: "frm-7-2",
        type: "assignment",
        title: "Tugas 1: Simulasi Penjadwalan CPU",
        date: "2025-03-28",
      },
    ],
  },
  {
    id: 8,
    courseName: "Keamanan Jaringan",
    instructor: "Farhan Pratama",
    profilePicture: DefaultProfilePicture,
    description:
      "Mata kuliah ini membahas konsep dasar keamanan jaringan, enkripsi, dan serangan siber.",
    assignments: [
      {
        id: "asg-8-1",
        title: "Tugas 1: Analisis Serangan MITM",
        dueDate: "2025-03-24",
      },
    ],
    materials: [
      {
        id: "mat-8-1",
        title: "Materi 1: Kriptografi Dasar",
        file: "kriptografi_dasar.pdf",
      },
    ],
    forums: [
      {
        id: "frm-8-1",
        type: "material",
        title: "Materi 1: Kriptografi Dasar",
        date: "2025-03-02",
      },
      {
        id: "frm-8-2",
        type: "assignment",
        title: "Tugas 1: Analisis Serangan MITM",
        date: "2025-03-24",
      },
    ],
  },
];

export default courses;
