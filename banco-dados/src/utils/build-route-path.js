export function buildRoutePath(path){
  const routeParametersRegex = /:([a-zA-Z]+)/g;

  console.log(Array.from(path.match(routeParametersRegex)));
  // return new RegExp(routeParametersRegex);
}