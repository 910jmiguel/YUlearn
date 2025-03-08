import Link from 'next/link'

const courses = [
  { id: '1', title: 'Introduction to AI', description: 'Learn the basics of AI and ML.' },
  { id: '2', title: 'Web Development', description: 'Master HTML, CSS, and JavaScript.' },
  { id: '3', title: 'Data Science 101', description: 'Explore data analysis and visualization.' }
]

export default function CoursesPage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      <div className="space-y-4">
        {courses.map((course) => (
          <Link key={course.id} href={`/pages/courses/${course.id}`}>
            <div className="p-4 border rounded-lg shadow-md hover:bg-gray-100 cursor-pointer transition">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
