const movieLike = [
  {
    id: 1,
    name: 'If only',
    image: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/ed/9e/ed9e5e9bcf9c37feb629eab1c7f877bcf73cc8ec4c2c8f5551f20dafe3365942_v1.jpg',
  },
  {
    id: 2,
    name: 'Eternal Sunshine',
    image:
      'https://lh3.googleusercontent.com/proxy/pYD52K9yOT-7ROsbxLM-q6UNRseuxUw9QAC5ig_7-p0tiJxUrIWR1aie-66QozifZ-JbFvaWHAqgLmpHZ12KZtGSh9_ZRg0LK2kKOb7I5N_PLek0Yif5DTApKQwBxg',
  },
  {
    id: 3,
    name: 'The Notebook',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71TTMWgBleL.jpg',
  },
  {
    id: 4,
    name: 'Titanic',
    image: 'https://daniellescattergood.files.wordpress.com/2017/05/titanic.jpg?w=1344',
  },
];

function Movie({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {movieLike.map((fav) => (
        <Movie key={fav.id} name={fav.name} picture={fav.image} />
      ))}
    </div>
  );
}

export default App;
