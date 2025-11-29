const BASE_URL = "https://api.nasa.gov/planetary/apod"
const MAX_IMG_AMOUNT = 50;
const MIN_IMG_AMOUNT = 1;
const MIN_DATE = new Date(1995, 5, 16);

let apiKey = "";

// ===== input fields =====
const inputSection = document.querySelector("#inputs");
const dateInput = document.querySelector("#dateInput");
const dateFromInput = document.querySelector("#dateFromInput");
const dateToInput = document.querySelector("#dateToInput");
const amountInput = document.querySelector("#amountInput");
const apiKeyInput = document.querySelector("#apiKeyInput");
// ===== buttons =====
const imgByDateBtn = document.querySelector("#imgByDateBtn");
const imgByDateRangeBtn = document.querySelector("#imgByDateRangeBtn");
const imgByAmountBtn = document.querySelector("#imgByAmountBtn");
const apiKeyBtn = document.querySelector("#apiKeyBtn");
// ===== result =====
const resultContainer = document.querySelector('#resultContainer');

// ===== bind buttons =====
imgByDateBtn.onclick = () => {
    if (dateInput.value === "") {
        onScreenWarning();
    } else {
        console.log(dateInput.value);
        fetchPicture({date: dateInput.value});
    }
}
imgByDateRangeBtn.onclick = () => {
    if (dateFromInput.value === "" || dateToInput.value === "") {
        onScreenWarning();
    } else if (dateFromInput.value > dateToInput.value) {
        onScreenWarning("Incorrect range: start date is greater than end date");
    } else {
        fetchPicture({
            start_date: dateFromInput.value,
            end_date: dateToInput.value,
        });
    }
}
imgByAmountBtn.onclick = () => {
    if (amountInput.value === "") {
        onScreenWarning();
    } else if (Number(amountInput.value) <= 0) {
        onScreenWarning("Incorrect amount, enter at least 1");
    } else {
        fetchPicture({count: amountInput.value});
    }
}

apiKeyBtn.onclick = () => {
    apiKey = apiKeyInput.value;
    let dateNow = new Date();
    // dateNow.setDate(dateNow.getDate() + 3); // to test if no image for selected date; try get img from future
    fetchPictureDefault(dateNow);
    toggleInputFields(true);
}

// img amount range limit
amountInput.oninput = () => {
    if (Number(amountInput.value) > MAX_IMG_AMOUNT) {
        amountInput.value = MAX_IMG_AMOUNT;
    } else if (Number(amountInput.value) < MIN_IMG_AMOUNT) {
        amountInput.value = MIN_IMG_AMOUNT;
    }
}
amountInput.min = MIN_IMG_AMOUNT;
amountInput.max = MAX_IMG_AMOUNT;

// dates range limit
dateInput.max = dateFromInput.max = dateToInput.max = dateToStringRequestFormat(new Date());
dateInput.min = dateFromInput.min = dateToInput.min = MIN_DATE;
dateInput.oninput = () => {
    limitDataInput(dateInput);
}
dateFromInput.oninput = () => {
    limitDataInput(dateFromInput);
}
dateToInput.oninput = () => {
    limitDataInput(dateToInput);
}

// ===== main logic functions =====
function displayResult(data, container) {
    const wrap = document.createElement('div');
    wrap.style.marginBottom = '20px';
    const h3 = document.createElement('h3');
    h3.textContent = data.title || "no title";
    wrap.appendChild(h3);
    if (data.media_type === 'image') {
        const img = document.createElement('img');
        img.src = data.hdurl || data.url;
        img.alt = data.title || "APOD image";

        img.style.maxWidth = '800px';
        img.style.maxHeight = '600px';
        img.style.width = '100%';
        img.style.height = 'auto';

        wrap.appendChild(img);
    } else if (data.media_type === "video") {
        const iframe = document.createElement('iframe');
        iframe.src = data.url;
        iframe.width = "560";
        iframe.height = "315";
        iframe.allowFullScreen = true;
        iframe.loading = "lazy";

        wrap.appendChild(iframe);

        if (data.thumbnail_url) {
            const thumb = document.createElement('img');
            thumb.src = data.thumbnail_url;
            thumb.alt = "Video thumbnail";
            wrap.appendChild(thumb);
        }
    } else {
        const paragraph = document.createElement('p');
        paragraph.textContent = `unsupported media type: ${data.media_type}`;
        wrap.appendChild(paragraph);
    }

    const meta = document.createElement('p')
    meta.textContent = data.date || "";
    wrap.appendChild(meta);

    const desc = document.createElement('p');
    desc.textContent = data.explanation || "no explanation";
    wrap.appendChild(desc);

    container.appendChild(wrap);
}

async function fetchPicture(params = {}) {
    resultContainer.innerHTML = '';
    const baseParams = {
        api_key: apiKeyInput.value,
        thumbs: "true"
    };
    const qp = new URLSearchParams({...baseParams, ...params});

    const isSingleDate = !!params.date && !params.start_date && !params.end_date && !params.count;

    const doFetch = async (searchParams) => {
        const response = await fetch(`${BASE_URL}?${searchParams}`);
        if (!response.ok) {
            throw response;
        }
        return response.json();
    }
    try {
        const data = await doFetch(qp);
        if (isSingleDate) {
            displayResult(data, resultContainer);
        } else {
            data.forEach(item => {
                displayResult(item, resultContainer)
            });
        }
        return true;
    } catch (e) {
        console.log(`Error: ${e.status}`);
        onScreenWarning(`Error: ${e.status}`);
        return false;
    }
}

async function fetchPictureDefault(currentDate = new Date(), stepsLeft = 5) {
    for (let i = 0; i < stepsLeft; i++) {
        let dateStr = dateToStringRequestFormat(currentDate);
        let res = await fetchPicture({date: dateStr});
        if (!res) {
            currentDate.setDate(currentDate.getDate() - 1);
        }
        else return;
    }
    onScreenWarning("No pictures for the last 5 days");
}

// ===== utility functions =====
function dateToStringRequestFormat(date = new Date()){
    const year = date.getFullYear();
    let monthRaw = date.getMonth() + 1;
    let month = String(monthRaw).length < 2 ? `0${monthRaw}` : monthRaw;
    const day = String(date.getDate()).padStart(2, '0'); // 2 symbols for month and day
    return `${year}-${month}-${day}`; // yyyy-mm-dd
}

function onScreenWarning(message = "Please, fill the matching field to get an image!") {
    resultContainer.innerHTML = '';
    const warning = document.createElement('h3');
    warning.textContent = message;
    warning.classList.add('text-warning');
    resultContainer.appendChild(warning);
}

function limitDataInput(inputField) {
    let inputDate = new Date(inputField.value);
    let maxDate = new Date();
    if(inputDate > maxDate) {
        inputField.value = dateToStringRequestFormat(maxDate);
    } else if (inputDate < MIN_DATE) {
        inputField.value = dateToStringRequestFormat(MIN_DATE);
    }
}

function toggleInputFields(isActive){
    if(isActive){
        inputSection.classList.remove("inactive");
    } else {
        inputSection.classList.add("inactive");
    }
}

//============================//
//========== script ==========//
//============================//
toggleInputFields(false);
