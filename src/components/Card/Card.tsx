import styles from './Card.module.css';

type CardProps = {
  href: string;
  title: string;
  body: string;
};

export default (props: CardProps) => {
  return (
    <li class={styles.card}>
      <a href={props.href}>
        <h2>
          {props.title}
          <span>&rarr;</span>
        </h2>
        <p>{props.body}</p>
      </a>
    </li>
  );
};
