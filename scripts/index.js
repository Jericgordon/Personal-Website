//import projects from project files
let frontend = true;
let backend = true;
let recent = true;

async function readJson(filename) {
    const response = await fetch(filename);
    // code borrowed from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    try {

    if (!response.ok){
        throw new Error(`Response status: ${response.status}`);
    }

    } catch (e){
        console.error(e.message);
    }
    const result = await response.json();
    console.log(result);
    addProjectToPage(result);
}


function setListeners(){
    document.getElementById("frontEndButton").onclick = toggleFrontend;
    document.getElementById("backEndButton").onclick = toggleBackend;
    document.getElementById("recentButton").onclick = toggleRecent;
}

function toggleFrontend(){
    toggle("front");
}
function toggleBackend(){
    toggle("back");
}
function toggleRecent(){
    toggle("recent");
}

function toggle(buttonType){
    console.log(buttonType,"clicked");
    switch (buttonType){
        case "front":
            frontend = !frontend;
            break;
        case "back":
            backend = !backend;
            break;
        case "recent":
            recent = !recent;
            break;
        default:
            console.log("button not recognized!");
    }
    resetPage();
}

function resetPage(){
    console.log("Reset Called");
    const rowContainer = document.getElementById("rowContainer");
    rowContainer.innerHTML = "";
    readJson("./project_data.json");
}

function addProjectToPage(json){
    const desiredNumberOfColumns = 3;
    let rowNumber = 0;
    const rowContainer = document.getElementById("rowContainer");
    console.log("rowContainer === undefined",rowContainer === undefined);
    let currentRow;
    let total = 0;
    //This is more complicated that it appears because of 2 driving factors.
    //The first is the need to load items on a page, even if it doesn't fill the row (if it's the end);
    //The second is the case of filtering. If we don't use all elements in our json, things can get a little tricky.
    //we solve this by increasing the loop length, and having a seperate variable for the total items displayed
    //on the screeen
    for (let i = 0;i<json.length + desiredNumberOfColumns;i++){
        console.log("i", i);

        if ((((total + 1) % desiredNumberOfColumns) - 1 == 0) || (i === json.length + desiredNumberOfColumns -1)){ //the 
            if (total != 0){ //on the first one we'll not have information
                currentRow.innerHTML = rowHTML;
            }
            currentRow = rowContainer.appendChild(document.createElement("div"));
            currentRow.classList.add("row");
            currentRow.setAttribute("id","row" + ++rowNumber)
            rowHTML = ""
        }
        if (json[i] === undefined){ //we need more loops for a partial row
            continue; // but we don't need to add more data
        }
        if (filter(json[i])){
            rowHTML = rowHTML + createProjectCard(json[i],i);
            console.log("adding")
            total++
        } else {
            console.log("skipping")
        }
        
    }
}

function filter(json){
    return ((frontend && json.project_has_frontend) ||
     (backend && json.project_has_backend) || 
     (recent && json.project_recent))
}

//this function just deals with filling in the relevant HTMl
function createProjectCard(json,item_number){
    
    const data = `<div class="col-4"> 
                <div class="card card-general-styling" style="width: 18rem;">
          <img src="${json.project_picture}" alt="${json.project_picture_alt}" class="card-img-top">
          <div class="card-body card-body-styling">
            <h5 class="card-title text-light card-title-styling">${json.project_name}</h5>
            <p class="card-text text-light card-text-styling">${json.project_skinny_description}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${item_number}">See details</button>
            <div class="container">
              <div class="modal" aria-hidden="true" aria-labelledby="MoreProjectInformation" tabindex="-1" id="modal${item_number}"> 
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">${json.project_name}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p>Backend: ${json.project_database}</p>
                      <p>Front-end: ${json.project_frontend}</p>
                      <p>tidbit: ${json.project_tidbit}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div> 
        </div>`
        return data;
    }

resetPage();
setListeners();