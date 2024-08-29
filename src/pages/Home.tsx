import { useEffect, useMemo, useState } from 'react'
import './../App.css'
import { OompaLoompa } from './../types/api';
import Card from './../components/card/Card';
import { useGetOompaLoompasQuery } from '../redux/apiSlice';

const THRESHOLD_INFINITE_LOADING = 0.8;

function Home() {
    const [page, setPage] = useState<number>(1);
    const [oompaLoompas, setOompaLoompas] = useState<OompaLoompa[]>([]);
    const [total, setTotal] = useState(0);

    const { data, error, isLoading, isFetching } = useGetOompaLoompasQuery(page);


    const [filter, setFilter] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value.toLowerCase());
    };

    const filteredData = useMemo(() => data?.results.filter((item: OompaLoompa) => (
        filter !== "" && (item.first_name.toLowerCase().includes(filter) ||
            item.last_name.toLowerCase().includes(filter) ||
            item.profession.toLowerCase().includes(filter))
    )), [filter, data?.results]);

    useEffect(() => {
        if (data) {
            setOompaLoompas((oldOompaLoompas: OompaLoompa[]) => [...oldOompaLoompas, ...data.results]);
            setTotal(data.total);
        }
    }, [data]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;

            const scrollPosition = scrollTop + windowHeight;
            const threshold = THRESHOLD_INFINITE_LOADING * scrollHeight;

            if (scrollPosition >= threshold && !isFetching && !filter && page < total) {
                setPage((prevPage) => prevPage + 1);

            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isFetching, setPage, filter, total, page]);

    if (isLoading || error) return;


    return (
        <>
            <div className="filters">
                <div className="search-filter">
                    <input type="text" placeholder="Search" onChange={handleInputChange} />
                </div>
            </div>



            <h2>Find our Oompa Loompa</h2>
            <h3>There are more than 100k</h3>
            <div className="grid">
                {filteredData?.length ?
                    filteredData.map((item: OompaLoompa) =>
                        <Card key={item.id} oompaLoompa={item}>
                        </Card>
                    ) :

                    oompaLoompas.map((item: OompaLoompa) =>
                        <Card key={item.id} oompaLoompa={item}>
                        </Card>
                    )

                }

            </div>
        </>
    )
}

export default Home
