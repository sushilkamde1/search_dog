import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [dogs, setDog] = useState("");

  useEffect(() => {
    Axios.get("https://dog.ceo/api/breeds/list/all").then((res) =>
      setBreeds(Object.keys(res.data.message))
    );
  }, []);

  const getName = (name) => {
    Axios.get(`https://dog.ceo/api/breed/${name}/images/random`)
      .then((res) => setDog(res.data.message))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <h2 className="display-1 text-center m-1">Dogs with Breed Name</h2>
      <hr />
      <div className="row">
        <div className="col">
          <h4 className="text-center m-1 display-4">Images</h4>
          {dogs ? <img src={dogs} alt="dog" className="img-fluid m-2" /> : null}
        </div>
        <div className="col">
          <h4 className="text-center m-1 display-4">Breeds</h4>
          {breeds.map((breed, index) => (
            <button
              className="btn btn-primary btn-sm m-1"
              key={index}
              onClick={() => getName(breed)}
            >
              {breed}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
