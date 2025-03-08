'use client'
import { useParams } from 'next/navigation'

const courses = {
  "1": { title: 'Introduction to AI', description: 'Learn the basics of AI and ML.' },
  "2": { title: 'Web Development', description: 'Master HTML, CSS, and JavaScript.' },
  "3": { title: 'Data Science 101', description: 'Explore data analysis and visualization.' }
}

export default function CourseDetail() {
  const params = useParams()
  const course = courses[params.id as keyof typeof courses] // TypeScript type safety

  if (!course) return <h1 className="text-center text-xl">Course not found</h1>

  return (
    <main className="h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-lg text-gray-600 mt-4">{course.description}</p>
    </main>
  )
}
