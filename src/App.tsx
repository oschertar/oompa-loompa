import { useEffect, useState } from 'react'
import './App.css'
import { apiService } from './services/api';
import { ApiResponse, OompaLoompa } from './types/api';
import Card from './components/card/Card';

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
    <div className="grid-container">
      {resultsOompaLoompa.length ?
        resultsOompaLoompa.map((item: OompaLoompa) =>
          <Card key={item.id} oompaLoompa={item}>
          </Card>
        )
        : null}
    </div>
  )
}

export default App
