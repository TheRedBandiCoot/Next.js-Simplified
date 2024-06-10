import React from "react";

export default function Error({ statusCode }: any) {
  return (
    <h1>
      {statusCode
        ? `An Error ${statusCode} occurred on server`
        : `An Error occurred on Client`}
    </h1>
  );
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
