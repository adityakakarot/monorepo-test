const mobilecheck = require("@mnptest/utils-platform-checker").mobilecheck;

const platforms = { DESKTOP: "Desktop", MOBILE: "Mobile" };

/**
 *
 * @param {*} eventContext
 * @param {*} props
 */
function platformFetcher(eventContext, props) {
  let platform = mobilecheck(eventContext.request.headers.get("user-agent"))
    ? platforms.MOBILE
    : platforms.DESKTOP;

  return {
    platform
  };
}

console.log(
  platformFetcher({
    request: {
      headers: {
        get: function() {
          return "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36";
        }
      }
    }
  })
);

module.exports = platformFetcher;
