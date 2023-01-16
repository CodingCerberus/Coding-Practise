//P: string URL
//R: the same back, but cut of anything after the #
//E: "www.codewars.com#about" --> "www.codewars.com"
//P: find index of # and remove everything after that point and return

function removeUrlAnchor(url){
    if (url.indexOf('#') == -1){
      return url
      } else {
        return url.slice(0, (url.indexOf('#')) - url.length)
      } 
  }