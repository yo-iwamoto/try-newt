import { getStaticProps } from './index.server';
import text from '@/data/text.json';
import { InferGetStaticPropsType } from 'next';

export { getStaticProps };

export default function Page({ data, status }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (status === 'error') {
    return <h1>{text.errors.failedToFetchData}</h1>;
  }

  return (
    <ul>
      {data.items.map((item) => (
        <li className='list-none' key={item._id}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}
