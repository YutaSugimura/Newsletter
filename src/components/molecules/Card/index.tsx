import React from 'react';
import useSWR from 'swr';

type Props = {};

export const Card: React.FC<Props> = () => {
  const { data, error } = useSWR<{ title: string; text: string }>('csr', () =>
    fetch('https://myapi.dev/csr').then((res) => res.json()),
  );

  if (error) return <p>error</p>;
  if (!data) return <p>...loading</p>;

  return (
    <div>
      <p>{data.title}</p>
      <p>{data.text}</p>
    </div>
  );
};
