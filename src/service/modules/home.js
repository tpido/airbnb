import myRequest from "../request";

export function getHomeGoodPrice() {
  return myRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScore() {
  return myRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscount() {
  return myRequest.get({
    url: "/home/discount",
  });
}

export function getHomeRecommend() {
  return myRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongfor() {
  return myRequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlus() {
  return myRequest.get({
    url: "/home/plus",
  });
}
