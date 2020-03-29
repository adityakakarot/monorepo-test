import { mobilecheck } from "";

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

export default platformFetcher;
