const accessKey = "WDFwHMExFXktFtu38AZaJVOErQz0f58LUVgcbGZevN4GkOSbIAbQBzqx";

const formLable = document.querySelectorAll('form ')
const searchInput = document.getElementById('search')
const searchResults = document.getElementsByClassName('search-results')
const searchBtn = document.getElementById('searchBtn')

let inputData = "";
let page = 1;


async function searchImages() {
    inputData = searchInput.value;
    const url = `https://api.pixel.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  
    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchInput.innerHTML = "";
    }
}  