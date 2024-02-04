import AppRouter from "@routes/index";

const App = () => {
  return (
    <>
      <h1>Arfak WebSite</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
      <AppRouter />
    </>
  );
};
export default App;
