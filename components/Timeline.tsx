const timeline_mili = process.env.TIMELINE_MILIT;
const timeline_uni = process.env.TIMELINE_UNI;
const timeline_sch = process.env.TIMELINE_SCH;

export const Timeline = () => {
  return (
    <>
      <div className="container relative flex flex-col px-6 mx-auto space-y-8">
        <div className="absolute inset-0 z-0 w-2 h-full bg-white shadow-md left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-9">
          <img src={timeline_mili} alt="" className="timeline-img" />
          <div className="timeline-container">
            <div className="timeline-pointer" aria-hidden="true"></div>
            <div className="p-2 pl-6 bg-white rounded-md shadow-md">
              <span className="text-sm font-bold tracking-wide text-amber-500">
                Oct 2020
              </span>
              <h1 className="pt-1 font-bold text-l">Joined the Military</h1>
              <p className="pt-1 text-sm">
                I Joined the Mandatory Military Service for a year expected to
                finish <strong>Dec 2021</strong>.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-9">
          <img src={timeline_uni} alt="" className="timeline-img" />
          <div className="timeline-container timeline-container-left">
            <div
              className="timeline-pointer timeline-pointer-left"
              aria-hidden="true"
            ></div>
            <div className="p-2 pr-6 bg-white rounded-md shadow-md">
              <span className="text-sm font-bold tracking-wide text-amber-500">
                July 2020
              </span>
              <h1 className="pt-1 font-bold text-l">
                Graduated from University{' '}
              </h1>
              <p className="pt-1 text-sm">
                I graduated from Misr University for Science and Technology with
                GPA <strong>3.81</strong> in Computer Science.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-9">
          <img src={timeline_sch} alt="" className="timeline-img" />
          <div className="timeline-container">
            <div className="timeline-pointer" aria-hidden="true"></div>
            <div className="p-2 pl-6 bg-white rounded-md shadow-md">
              <span className="text-sm font-bold tracking-wide text-amber-500">
                May 2016
              </span>
              <h1 className="pt-1 font-bold text-l">Graduated from School </h1>
              <p className="pt-1 text-sm">
                I graduated from high school with <strong>82%</strong>score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
