import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { apiService } from './services/api';
import { ApiResponse, OompaLoompa } from './types/api';
import Card from './components/card/Card';

const THRESHOLD_INFINITE_LOADING = 0.8;


function App() {
  const [page, setPage] = useState<number>(1);
  const [resultsOompaLoompa, setResultsOompaLoompa] = useState<OompaLoompa[]>([]);
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false);

  const [filter, setFilter] = useState('');

  const filteredData = useMemo(() => resultsOompaLoompa.filter(item => (
    item.first_name.toLowerCase().includes(filter) ||
    item.last_name.toLowerCase().includes(filter) ||
    item.profession.toLowerCase().includes(filter)
  )), [filter, resultsOompaLoompa]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value.toLowerCase());
  };

  useEffect(() => {
    setLoading(true);
    apiService.getAllOompaLoompas(page).then((res: ApiResponse) => {
      if (res.results) {
        setResultsOompaLoompa(prevResults => [...prevResults, ...res.results]);
        setTotal(res.total);
        setLoading(false);
      }
    })
  }, [page])

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      const scrollPosition = scrollTop + windowHeight;
      const threshold = THRESHOLD_INFINITE_LOADING * scrollHeight;

      if (scrollPosition >= threshold && !loading && page < total && !filter) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, page, total, setPage, filter]);



  return (
    <>
      <nav className="navbar">
        <div className="container">
          <h1>Oompa Loompa's Crew</h1>
        </div>
      </nav>
      <main>
        <div>
          <input type="text" placeholder="Search" onChange={handleInputChange} />
        </div>
        <h2>Find our Oompa Loompa</h2>
        <h3>There are more than 100k</h3>
        <div className="grid container">
          {filteredData.length ?
            filteredData.map((item: OompaLoompa) =>
              <Card key={item.id} oompaLoompa={item}>
              </Card>
            ) :
            resultsOompaLoompa.length ?
              resultsOompaLoompa.map((item: OompaLoompa) =>
                <Card key={item.id} oompaLoompa={item}>
                </Card>
              )
              : null
          }

        </div>
      </main>
    </>
  )
}

export default App
