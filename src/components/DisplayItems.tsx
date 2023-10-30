import React, { useState, useEffect } from 'react'
import { MovieShowsWrapper } from '../styles/Header.modules'
import axios from 'axios';
import { CircularProgress } from '@mui/material';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: Date;
    vote_average: number;

    //for tv shows
    first_air_date: string;
    name: string;
}

interface DataProps {
    apiEndpoint: string;
    numberOfMovies: number;
    showButtons: boolean;
    tvShowOn: boolean;
    moviesOn: boolean;
    itemHeading: string;
}


const DisplayItems: React.FC<DataProps> = ({ apiEndpoint, numberOfMovies, showButtons, tvShowOn, moviesOn, itemHeading, }) => {

    const [showItems, setShowItems] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${apiEndpoint}`, {
                    params: {
                        page: currentPage,
                    },
                });

                const { result, total_pages } = response.data;

                setShowItems(result.slice(0, numberOfMovies,));
                setTotalPage(total_pages);
                setTimeout(() => {
                    setLoading(true);
                }, 1000);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies();
    }, [currentPage, apiEndpoint, numberOfMovies]);


    function getFormattedDate(dateString: string | number | Date) {
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
        } as Intl.DateTimeFormatOptions;
        const date = new Date(dateString);
        return date.toLocaleDateString("en-Us", options);
    }

    // prev
    const nextItemsPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage((nextPage) => nextPage + 1);
        }
    }

    // next
    const prevItemsPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    }

    return (
        <MovieShowsWrapper>
            {!loading ? (
                <div className="loadingOverlay">
                    <CircularProgress size={50} color="warning" />
                    <p>loading</p>
                </div>
            ) : (
                <>
                    <div className='movieHeading'>
                        <h1>{itemHeading}</h1>
                    </div>
                    <div className="movieCard">
                        {showItems.map((items) => {
                            const percentage = (items.vote_average / 10) * 100;

                            return (
                                <>
                                    <div className='movie' key={items.id}>
                                        <div className='movieImage'>
                                            <img src={`https://image.tmdb.org/t/p/w200/${items.poster_path}`} alt='img' />
                                            <span>{percentage.toFixed(0)}%</span>
                                        </div>
                                        <div className='movieInfo'>
                                            {moviesOn && (
                                                <>
                                                    <h4>{items.title}</h4>
                                                    <p>{getFormattedDate(items.release_date)}</p>
                                                </>
                                            )}

                                            {tvShowOn && (
                                                <>
                                                    <h4>{items.name}</h4>
                                                    <p>{getFormattedDate(items.first_air_date)}</p>
                                                </>
                                            )}

                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        {showButtons && (
                            <div className='buttons'>
                                {currentPage > 1 && (
                                    <button className='btnPrev' onClick={prevItemsPage}>
                                        Back
                                    </button>
                                )}
                                <p>
                                    Page <p>{currentPage}</p>
                                </p>
                                {currentPage < totalPage && (
                                    <button className='btnPrev' onClick={nextItemsPage}>
                                        Next
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </>
            )}
        </MovieShowsWrapper>
    );
};

export default DisplayItems