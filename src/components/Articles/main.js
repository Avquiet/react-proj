import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArticlesError,
  selectArticlesList,
  selectArticlesLoading,
} from "../../store/articles/selectors";
import { getArticles } from "../../store/articles/actions";
import { Button } from '@mui/material';
import '../../App.css'

export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticlesList);
    const isLoading = useSelector(selectArticlesLoading);
    const error = useSelector(selectArticlesError);

    const requestArticles = async () => {
        dispatch(getArticles());
    };

    useEffect(() => {
        requestArticles();
    }, []);

    return (
        <div className="articles-main">
            <h3>Articles</h3>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <Button variant="outlined" onclick={requestArticles}>REQUEST</Button>
                    {!!error && <h4>ERROR: {error}</h4>}
                    <ul>
                        {articles.map((art) => (
                            <li key={art.id}>{art.title}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}