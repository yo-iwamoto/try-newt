const status = {
  ok: 'ok',
  error: 'error',
} as const;

export const okPageProps = <T>(data: T) => ({
  props: {
    status: status.ok,
    data,
  },
});

export const errorPageProps = <T>(data: T) => ({
  props: {
    status: status.error,
    data,
  },
});
