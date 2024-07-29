import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats: {
    followers,
    views,
    likes
}}) {
    return (
        <div className={css.card}>
            <div>
                <img
                    className={css.foto}
                    src={ image }
                    alt={ name }
                />
                <p className={css.name}>{ name }</p>
                <p className={css.text} >@{ tag }</p>
                <p className={css.text} >{ location }</p>
            </div>

            <ul className={css.list} >
                <li className={css.item} >
                    <span className={css.stats} >Followers</span>
                    <span className={css.value} >{ followers }</span>
                </li>
                <li className={css.item} >
                    <span className={css.stats} >Views</span>
                    <span className={css.value} >{ views }</span>
                </li>
                <li className={css.item} >
                    <span className={css.stats} >Likes</span>
                    <span className={css.stats} >{ likes }</span>
                </li>
            </ul>
        </div>
    );
}