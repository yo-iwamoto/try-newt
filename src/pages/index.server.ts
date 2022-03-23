import { newt } from '@/server/lib/newt/client';
import { NEWT_APP_UID, selectFields } from '@/server/lib/newt/utils';
import { errorPageProps, okPageProps } from '@/server/lib/response';
import { errorCode } from '@/server/lib/error';
import type { PickedFieldsWithId } from '@/server/lib/newt/utils';
import type { Post } from '@/types/model';

type Item = PickedFieldsWithId<Post, 'title' | 'created_at'>;

export const getStaticProps = async () => {
  try {
    const { items } = await newt.getContents<Item>({
      appUid: NEWT_APP_UID,
      modelUid: 'post',
      query: {
        select: selectFields<Post>(['title', 'created_at']),
      },
    });

    return okPageProps({ items });
  } catch (err) {
    return errorPageProps({ code: errorCode.failedToFetchData });
  }
};
