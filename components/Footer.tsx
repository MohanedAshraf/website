export const Footer = () => {
  return (
    <div className="mt-24 pb-36">
      <div className="max-w-4xl px-4 mx-auto text-gray-800">
        <div className="pb-8 mb-2 border-t-2 border-amber-300"></div>
        <div className="flex flex-col justify-between lg:flex-row">
          <p>Built with Tailwind and Next.js 🖤</p>
          <div className="pt-2 space-x-6 font-medium lg:pt-0">
            <a
              href="https://www.linkedin.com/in/mohanedashraf/"
              className="transition-colors rounded hover:text-amber-500 focus:text-amber-500"
            >
              Linkedin
            </a>

            <a
              href="https://github.com/mohanedashraf"
              className="transition-colors rounded hover:text-amber-500 focus:text-amber-500"
            >
              Github
            </a>
          </div>
        </div>
        <p className="mt-2 text-xs">
          Inspired by{' '}
          <a
            className="hover:text-amber-500"
            href="https://www.delbaoliveira.com/"
          >
            @delba_oliveira
          </a>{' '}
          and{' '}
          <a className="hover:text-amber-500" href="https://www.leerob.io">
            @leerob
          </a>
        </p>
      </div>
    </div>
  );
};
