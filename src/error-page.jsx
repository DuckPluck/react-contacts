import {useRouteError} from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
      <div id='error-page'>
        <h1>Whoops!</h1>
        <p>Sorry, something went wrong!</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
  );
}