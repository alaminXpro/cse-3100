import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Maine Coon' },
  { name: 'Pumpkin', age: '3', breed: 'British Shorthair' },
  { name: 'Luna', age: '4', breed: 'Ragdoll' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [filteredCats, setFilteredCats] = useState([]);

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let result = cats;

    if (searchName) {
      result = result.filter((cat) => cat.name.toLowerCase().includes(searchName.toLowerCase()));
    }

    if (selectedBreed) {
      result = result.filter((cat) => cat.breed === selectedBreed);
    }

    setFilteredCats(result);
  }, [cats, searchName, selectedBreed]);

  const uniqueBreeds = [...new Set(cats.map((cat) => cat.breed))];

  const handleSearch = (e) => {
    e.preventDefault();
    // Filters are automatically applied through useEffect
  };

  return (
    <section className="text-center mt-4">
      <form onSubmit={handleSearch} className="flex flex-row py-3 items-center gap-4">
        <div className="basis-1/4">
          <h2 className="font-bold text-lg">Available Cats</h2>
        </div>
        <div className="basis-1/2">
          <select className="form-select w-full p-2 rounded" value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
            <option value="">All Breeds</option>
            {uniqueBreeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>
        <div className="basis-1/2">
          <input type="text" className="form-control w-full p-2 rounded" placeholder="Search by name" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
        </div>
        <div className="basis-1/4">
          <button type="submit" className="btn btn-primary px-4 py-2 rounded">
            Search
          </button>
        </div>
      </form>
      <hr className="border-2" />

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
