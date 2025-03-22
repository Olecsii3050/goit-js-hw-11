import{S as p}from"./assets/vendor-BdOIR_hq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="49366841-2722787d336af87d57ebdc2bd",f="https://pixabay.com/api/",m=async r=>(await axios.get(f,{params:{key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits;let i;const y=r=>{const o=document.querySelector(".gallery");if(o.innerHTML="",r.length===0){L("Sorry, there are no images matching your search query. Please try again!");return}const s=r.map(({webformatURL:n,largeImageURL:e,tags:t,likes:a,views:c,comments:l,downloads:d})=>`
        <li>
            <a href="${e}" class="gallery__item">
                <img src="${n}" alt="${t}" loading="lazy" />
            </a>
            <div class="info">
                <p>Likes: <span>${a}</span></p>
                <p>Views: <span>${c}</span></p>
                <p>Comments: <span>${l}</span></p>
                <p>Downloads: <span>${d}</span></p>
            </div>
        </li>
    `).join("");o.insertAdjacentHTML("beforeend",s),i?i.refresh():i=new p(".gallery a",{captionsData:"alt",captionDelay:250})},g=()=>{document.querySelector(".loader").style.display="block"},h=()=>{document.querySelector(".loader").style.display="none"},L=r=>{iziToast.error({title:"Error",message:r})},b=document.querySelector(".form");b.addEventListener("submit",async r=>{r.preventDefault();const o=r.target.elements["search-text"].value.trim();if(o){g();try{const s=await m(o);y(s)}catch(s){console.error("Error fetching images:",s),showMessage("Failed to fetch images. Please try again later.")}finally{h()}}});
//# sourceMappingURL=index.js.map
