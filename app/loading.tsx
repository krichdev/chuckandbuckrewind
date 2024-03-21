export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  {
    return (
      <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-3xl mb-5"></h1>
      <div className="flex md:flex-row flex-col items-center justify-center md:gap-3 w-4/5 animate-pulse">
        <div className='flex md:flex-col gap-3 mb-4'>
          {/* Create multiple divs for each episode button you expect to load */}
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-slate-500 rounded h-8 w-24 mb-2"
            >
              {/* This remains empty, as it's just a placeholder */}
            </div>
          ))}
        </div>
        <div className="h-96 w-full bg-slate-500 rounded-md md:ml-3" />
      </div>
      </div>
    );
  };
}