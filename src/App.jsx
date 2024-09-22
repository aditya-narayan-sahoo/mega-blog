import "./App.css";
const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <div>
      <h1>Blog with Appwrite</h1>
    </div>
  );
};

export default App;

