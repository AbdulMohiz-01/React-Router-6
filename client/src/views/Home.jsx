import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from '../apis/axios.js';
import { useEffect, useState } from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 border border-gray-700">
      <h3 className="text-xl font-bold mb-2 text-white">{course.title}</h3>
      <p className="text-gray-400">{course.shortDescription}</p>
      <Link
        to={`/courses/${course.id}`}
        
        className="text-purple-500 hover:text-purple-600 mt-2 block"
      >
        Enroll Now
      </Link>
    </div>
  );
};

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get('/api/courses');
      console.log(data);
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <div className="bg-gray-900 h-[24.2rem] flex flex-col justify-center items-center shadow-lg rounded-md">
      <div className="container mx-auto p-8 overflow-y-scroll custom-scrollbar">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-t from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Welcome to Our Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses ? (
            courses.map((course) => (
              <CourseCard course={course} key={course.id} />
            ))
          ) : (
            <p> Loading... </p>
          )}
        </div>
      </div>
    </div>
  );
};

// props validation
Home.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};
CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }),
};

export default Home;
