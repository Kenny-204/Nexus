export default function Page() {
  return (
    <main className="min-h-screen bg-blue-50 p-5 flex flex-col items-center justify-center lg:flex-row lg:gap-6 lg:p-10">
      <div className="w-full lg:w-1/2">
        <div className="rounded-2xl bg-white shadow-md hover:shadow-lg transition p-8 flex flex-col items-start justify-between h-48">
          <h2 className="text-xl font-semibold text-gray-800">Goods</h2>
          <p className="text-sm text-gray-500">
            Explore physical products, items, and deals near you.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
            View Goods
          </button>
        </div>
      </div>

      <div className="w-full mt-5 lg:mt-0 lg:w-1/2">
        <div className="rounded-2xl bg-white shadow-md hover:shadow-lg transition p-8 flex flex-col items-start justify-between h-48">
          <h2 className="text-xl font-semibold text-gray-800">Services</h2>
          <p className="text-sm text-gray-500">
            Find people offering professional or freelance services.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
            View Services
          </button>
        </div>
      </div>
    </main>
  );
}

