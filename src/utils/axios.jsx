import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGQyYzM4MzMxYWRkMGJkNzUxNTNiNjBhMzFiMDFjNyIsInN1YiI6IjY1YjUwMzI5YjZjZmYxMDE3Y2Y2ODA2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZgOfbCsMIIfBv9binDw-GAUj-_1hJCVD_AUbwuB0rgM',
      },
})

export default instance