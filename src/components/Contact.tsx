
const Contact = () => {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-100">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-accent1 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className="shadow appearance-none border border-accent3 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-accent3 invalid:border-primary"
              required
              id="name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-accent1 text-sm font-bold mb-2">
              Email address
            </label>
            <input
              type="text"
              className="shadow appearance-none border border-accent3 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-accent3 invalid:border-danger"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-accent1 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              className="shadow border border-accent3 rounded w-full py-10 px-3 mb-3 leading-tight focus:outline-none focus:shadow-accent3 invalid:border-danger"
              name="message"
            />
            <button
              type="submit"
              className="bg-accent1 text-white border-4 rounded-xl p-2 font-bold hover:border-accent3"
            >
              Submit
            </button>
            <p className="text-accent3 text-xs italic">*This is a demo</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
