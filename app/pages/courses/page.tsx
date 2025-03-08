import Link from 'next/link';
import Navbar from '../../comp/navbar';

const courses = [
  { id: '1', title: 'Introduction to AI', description: 'Learn the basics of AI and ML.', price: 'CA$109.99' },
  { id: '2', title: 'Web Development', description: 'Master HTML, CSS, and JavaScript.', price: 'CA$84.99' },
  { id: '3', title: 'Data Science 101', description: 'Explore data analysis and visualization.', price: 'CA$24.99' }
];

export default function CoursesPage() {
  return (
    <main className="p-10 pt-20"> {/* Added pt-20 to prevent navbar overlap */}
      <div>
        <Navbar />
      </div>
      <h1 className="text-3xl font-bold mt-5 mb-6 text-center">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <Link key={course.id} href={`/pages/courses/${course.id}`}>
            <div className="bg-white shadow-lg rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
              
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
