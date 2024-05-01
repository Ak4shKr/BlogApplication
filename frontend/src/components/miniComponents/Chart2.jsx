import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

const Chart = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  const [averageWordCount, setAverageWordCount] = useState(0); // State for average word count

  useEffect(() => {
    const fetchMyBlogs = async () => {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/blog/myblogs",
        { withCredentials: true }
      );
      setMyBlogs(data.blogs);
    };
    fetchMyBlogs();
  }, []);

  useEffect(() => {
    // Calculate average word count when myBlogs state changes
    if (myBlogs.length > 0) {
      const totalWordCount = myBlogs.reduce((acc, blog) => acc + blog.wordCount, 0);
      const average = totalWordCount / myBlogs.length;
      setAverageWordCount(average.toFixed(2)); // Round to 2 decimal places
    }
  }, [myBlogs]);

  const publishedBlogs = myBlogs.filter((blog) => blog.published === true);
  const notPublishedBlogs = myBlogs.filter((blog) => blog.published === false);

  const data = {
    labels: ["Published", "Not Published", "Average Word Count"],
    datasets: [
      {
        label: "Blogs",
        data: [
          publishedBlogs.length,
          notPublishedBlogs.length,
          averageWordCount, // Include average word count in the data
        ],
        borderColor: ["#0e7490", "#facc15", "#ff6b6b"], // Add color for average word count
        backgroundColor: ["#0e7490", "#facc15", "#ff6b6b"], // Add color for average word count
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="chart-container" style={{ height: "90vh" }}>
      <h3>BLOG ANALYTICS</h3>
      <Doughnut data={data} style={{ height: "550px" }} />
    </section>
  );
};

export default Chart;
