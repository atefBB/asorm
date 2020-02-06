import nodeFetch from 'node-fetch';
export { Headers } from 'node-fetch';
import fetchCookie from 'fetch-cookie';

var fetch = fetchCookie(nodeFetch);

/* We can fake the abort, the http adapter keeps track
   of ignoring the result */
function AbortController() {
  return {abort: function () {}};
}

export { fetch, AbortController };