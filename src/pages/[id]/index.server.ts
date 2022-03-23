import { newt } from '@/server/lib/newt/client';
import { NEWT_APP_UID, selectFields } from '@/server/lib/newt/utils';
import { Post } from '@/types/model';
import { GetStaticPropsContext } from 'next';

type PathParam = {
  id: string;
};

export const getStaticPaths = async () => {
  const { items } = await newt.getContents<{ _id: string }>({
    appUid: NEWT_APP_UID,
    modelUid: 'post',
    query: {
      select: selectFields<Post>(),
    },
  });

  const paths = items.map((item) => ({ params: { id: item._id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<PathParam>) => {
  console.log(params);
};
