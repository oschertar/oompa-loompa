import { useEffect, useState } from 'react'
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

      if (scrollPosition >= threshold && !loading && page < total) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, page, total, setPage]);



  return (
    <>
      <nav className="navbar-container">
        <div>
          Oompa Loompa's Crew
        </div>
      </nav>
      <main>
        <h2>Find our Oompa Loompa</h2>
        <h3>There are more than 100k</h3>
        <div className="grid-container">
          {resultsOompaLoompa.length ?
            resultsOompaLoompa.map((item: OompaLoompa) =>
              <Card key={item.id} oompaLoompa={item}>
              </Card>
            )
            : null}
        </div>
      </main>
    </>
  )
}

export default App
