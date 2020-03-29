const platformFetcher = require("@mnptest/cloudflare-platform-fetcher");

addEventListener("fetch", event => {
  /**
   * Skips the worker if the handler throws exception.
   * Ref: https://developers.cloudflare.com/workers/archive/writing-workers/handling-errors/
   */
  event.passThroughOnException();

  /**
   *
   * Responds to the fetch event.
   * Ref: https://developers.cloudflare.com/workers/about/tips/fetch-event-lifecycle#respondwith
   */
  event.respondWith(
    handleRequest(
      new Request(event.request.url, new Request(event.request)),
      new Response(),
      event
    )
  );
});

async function handleRequest(request, response) {
  return platformFetcher({ request });
}
