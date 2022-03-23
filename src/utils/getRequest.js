const newHeader = new Headers();
const options = {
  method: "GET",
  headers: newHeader,
  mode: "cors",
  cache: "default",
};

/* JSON Method
pass URL as "/assets/data/X.json"; 
*/

/**
 * Given the URL, get the data required then execute a function with the data passed to this said function.
 *
 * Can be also given an optionnal id parameter to get an element by id.
 *
 * @module utils
 * @param  {String}            url        Is the data URL that will be fed to fetch.
 * @param  {function}          action     (data || element) - Is the function that gets the data/element.
 * @param  {String}            [id]       If provided, will get by ID and return the element.
 * @return {void}                         Executes the action, if the fetch works properly.
 */

export const getRequest = (url, action, id) =>
  new Promise((resolve) => {
    resolve(
      fetch(url, options)
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((data) => {
          if (id === undefined) action(data);
          else {
            const element = data.find((x) => x.id === id);
            action(element);
          }
        })
    );
  });
