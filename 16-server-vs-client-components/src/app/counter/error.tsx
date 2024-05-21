'use client';

import { ErrorHandler } from '@/utils/util';

export default function ErrorBoundary({
  error,
  reset
}: {
  error: ErrorHandler;
  reset: () => void;
}) {
  return (
    <>
      <h1>Error Msg : {error.message}</h1>
      <h1>Status Code : {error.statusCode}</h1>
    </>
  );
}
