import Image from "next/image";
import styles from "../app/css/SideBar.module.css";
import iconSearch from "../../public/images/search.svg";
import { GenreSchema } from "../app/schemas/movies/genres";

type Props = {
  options: GenreSchema[];
};
export const SideBar = ({ options }: Props) => {
  return (
    <aside className={styles.sideBar}>
      <div className={styles.search}>
        <span className={styles.title}>Search</span>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Keywords"
            className={styles.inputSearch}
          />
          <Image
            src={iconSearch}
            alt="search"
            width={20}
            height={20}
            className={styles.searchIcon}
          />
        </div>
      </div>

      <div className={styles.container}>
        <label htmlFor="genres" className={styles.selectLabel}>
          Genres
        </label>
        <div className={styles.selectContainer}>
          <select id="genres" className={styles.select}>
            {options?.map((option) => (
              <option
                key={option.id}
                value={option.name}
                className={styles.optionSelect}
              >
                {option.name}
              </option>
            ))}
          </select>
          <div className={styles.arrow}></div>
        </div>
      </div>
    </aside>
  );
};
