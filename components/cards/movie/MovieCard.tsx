import styles from './MovieCard.module.css';

export interface IMovieCard {
  sampleTextProp: string;
}

const MovieCard: React.FC<IMovieCard> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default MovieCard;
