const BASE_URL = "https://api.nasa.gov/planetary/apod"
const API_KEY = "t2weUkUOT14AAu5op4nJjgDg71gfzkxCQb7M16VD";

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
    } else if (data.media.type === "video") {
        const iframe = document.createElement('iframe');
        iframe.src = data.url;
        iframe.width = "560";
        iframe.height = "315";
        iframe.allowFullScreen = true;
        iframe.loading = "lazy";

        wrap.appendChild(iframe);

        if (data.thumbnail.url) {
            const thumb = document.createElement('img');
            thumb.src = data.thumbnail_url;
            thumb.alt = "Video thumbnail";
            wrap.appendChild(thumb);
        }
    } else {
        const paragraph = document.createElement('p');
        p.textContent = `unsupported media type ${data.media_type}`;
        wrap.appendChild(p);
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
    const resultContainer = document.getElementById('#resultContainer');
    resultContainer.innerHTML = '';
    const baseParams = {
        api_key: API_KEY,
        thumbs: true
    };
    const qp = new URLSearchParams({...baseParams, ...params});

    const isSingleDate = !!params.date && !params.start_date && !params.end_date && !params.count();

    const doFetch = async (searchParams) => {
        const response = await fetch(`${BASE_URL}?${searchParams}`);
        if (!response.ok) {
            throw response;
        }
        return response.json();
    }
    try {

    } catch (e) {

    }
}

const container = document.createElement('div');