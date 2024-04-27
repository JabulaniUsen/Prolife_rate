import React from 'react';

function ClassProgress() {
  const room = [
    { class: "Mathematics", desc: "3 Registered", progress: 45 },
    { class: "Chemistry", desc: "4 Registered", progress: 60 },
    { class: "Physics", desc: "1 Registered", progress: 30 },
    { class: "Data Processing", desc: "5 Registered", progress: 75 },
  ];

  return (
    <div className='classProgress relative waitingRoom lg:w-[300px] w-[400px] h-[430px] overflow-y-scroll lg:m-6 rounded-2xl shadow-xl'>
      {room.length === 0 && (
        <div className="absolute top-[50%] right-[35%]">
          <p className='jost text-[#9e9e9e]'>No progress yet</p>
        </div>
      )}
      <div className="m-6 ">
        <h2 className='pb-4 jost font-bold'>Class Progress</h2>
        {room.map((item, index) => (
        <div className="class" key={index}>
            <div className="jost bg-[#f0f7ff] rounded-xl p-5 my-2 flex items-center justify-between">
                <div className="">
                    <h3 className='font-bold'>{item.class}</h3>
                    <p className='text-[#9e9e9e] text-sm'>{item.desc}</p>
                </div>
            </div>
        </div>
        ))}

      </div>
    </div>
  );
}

export default ClassProgress;
