import myRequest from "../request";

export function getEntireData(offset = 0, size = 20) {
  return myRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
