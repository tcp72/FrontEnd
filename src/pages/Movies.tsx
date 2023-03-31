import { useState } from 'react';
import data from '../MovieData.json';

const mds = data.MovieData;
/* use the name at beginning of file, not name of file
happens to be the same here*/

function MovieList() {
  const [listOMovies, setListOMovies] = useState(mds);
  /* like Get; Set; listOMovies is object; SetListOMovies is method to update object
  original table looked like JSON from mds (see right). That goes into the 
  "listOMovies", and we can update it with the setListOMovies
     */
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
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
