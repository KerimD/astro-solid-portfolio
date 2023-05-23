import { createEffect } from 'solid-js';

import styles from './Card.module.css';

type CardProps = {
  href: string;
  title: string;
  body: string;
};

export default (props: CardProps) => {
  createEffect(() => {
    console.log('asdf');
  });

  return (
    <li class={styles.card}>
      <a href={props.href}>
        <h2>
          This is a Solidjs component
          <span>&rarr;</span>
        </h2>
        <p>{props.body}</p>
      </a>
    </li>
  );
};
