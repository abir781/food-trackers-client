import React, { useEffect, useState } from 'react';

const Education = () => {
  const [edutips, setEdutips] = useState([]);

  useEffect(() => {
    fetch("/education.json")
      .then(res => res.json())
      .then(data => setEdutips(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-25">
      <h2 className="text-5xl font-bold text-center mb-10">Did You Know?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {edutips.map(singleedu => (
          <div
            key={singleedu.id}
            className="bg-emerald-500 rounded-xl p-5 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-3 text-black">
              {singleedu.title}
            </h3>
            <p className="text-black text-sm">{singleedu.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
