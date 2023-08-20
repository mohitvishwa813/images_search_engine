const accesskey = "4RKo_0o5jDEzUwzXb-CQw0X2VDbCcixqzKK1ikfh_L0";
const searchform = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.querySelector("#show-more-btn");
//unsplash APi
//4RKo_0o5jDEzUwzXb-CQw0X2VDbCcixqzKK1ikfh_L0

// api.unsplash.com/search/photos?page=1&query=office&client_id=4RKo_0o5jDEzUwzXb-CQw0X2VDbCcixqzKK1ikfh_L0

let keyword = "";
let page = 1;
async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
if(page===1){
searchResult.innerHTML=" ";
}

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLinks = document.createElement("a");
    imageLinks.href = result.links.html;
    imageLinks.target = "_blank";//by this every time we search in new targete tab

   //forplace image link in a tag we use 
    imageLinks.appendChild(image);
    //for display image link in search result
    searchResult.appendChild(imageLinks);
  })
  searchMoreBtn.style.display="block";
  
}
searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
})
 searchMoreBtn.addEventListener("click",()=>{
   page++;
   searchImages();
   
 })