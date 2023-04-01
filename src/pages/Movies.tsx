import { useState } from 'react';
import data from '../MovieData.json';

const mds = data.MovieData;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(mds);

  const addMovie = () => {
    setListOMovies([
      ...mds,
      {
        Category: 'Action/Adventure',
        Title: 'Dark Knight Rises, The',
        Year: 2012,
        Director: 'Christopher Nolan',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };

  return (
    <>
      <div className="container">
        <h3 className="text-center mt-5">Joel Hilton's Movie Collection</h3>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {listOMovies.map((m, index) => (
                <tr key={index}>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={addMovie}>
            Add Movie
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieList;
