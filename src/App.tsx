import { useEffect, useState } from 'react'
import './App.css'
import { apiService } from './services/api';
import { ApiResponse, OompaLoompa } from './types/api';

function App() {
  const [page, setPage] = useState<number>(1);
  const [resultsOompaLoompa, setResultsOompaLoompa] = useState<OompaLoompa[]>([]);


  useEffect(() => {
    apiService.getAllOompaLoompas(page).then((res: ApiResponse) => {
      if (res.results) {
        setResultsOompaLoompa(res.results);
      }

    })
  }, [])

  return (
    <>
      {resultsOompaLoompa.length ?
        resultsOompaLoompa.map((item: OompaLoompa) =>
          <div key={item.id}>
            {item.first_name}
          </div>
        )
        : null}
    </>
  )
}

export default App
