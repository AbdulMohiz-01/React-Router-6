import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../apis/axios.js';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/api/courses/${id}`);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };
    fetchCourse();
  }, [id]);

  return (
    <div className="bg-gray-900 min-h-min flex justify-center items-center">
      <div className="container mx-auto p-8">
        {course ? (
          <>
            <h1 className="text-3xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-t from-purple-500 to-pink-500">
              {course.title}
            </h1>
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <p className="text-gray-400 mb-4">{course.fullDescription}</p>
              <div className="flex justify-end">
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md">
                  Enroll Now
                </button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-white">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
