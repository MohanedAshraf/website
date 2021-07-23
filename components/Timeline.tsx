export const Timeline = () => {
  return (
    <>
      <div className="container relative flex flex-col px-6 mx-auto space-y-8">
        <div className="absolute inset-0 z-0 w-2 h-full bg-white shadow-md left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-9">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20210319/pngtree-abstract-military-camouflage-pattern-background-image_588453.jpg"
            alt=""
            className="timeline-img"
          />
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
        <div className="relative z-10">
          <img
            src="https://res.cloudinary.com/dkllkhj3z/image/upload/v1626982779/00100sportrait_00100_burst20200718104106474_cover_1_a1vwms.jpg"
            alt=""
            className="timeline-img"
          />
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
        <div className="relative z-10">
          <img
            src="https://res.cloudinary.com/dkllkhj3z/image/upload/v1626983419/wp_20150308_12_18_23_selfie_1_hjpwh4.jpg"
            alt=""
            className="timeline-img"
          />
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
