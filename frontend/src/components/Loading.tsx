export default function Loading() {
  return (
    <div className="flex items-center justify-center fixed inset-0 w-screen h-screen bg-white bg-opacity-75 z-50">
      <div className="animate-spin inline-flex w-10 h-10 border-t-2 border-l-2 border-appBlack rounded-full shadow-lg">
        <span className="sr-only"></span>
      </div>
      <div className="text-appBlack font-MonaSans text-lg font-medium ml-5">Loading...</div>
    </div>
  );
}
