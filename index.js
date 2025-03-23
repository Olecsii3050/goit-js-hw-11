import{S as d,i as u}from"./assets/vendor-BvbEOXdP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="49366841-2722787d336af87d57ebdc2bd",m="https://pixabay.com/api/",y=async r=>(await axios.get(m,{params:{key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits;let i;const g=r=>{const o=document.querySelector(".gallery");if(o.innerHTML="",r.length===0){b("Sorry, there are no images matching your search query. Please try again!");return}const s=r.map(({webformatURL:n,largeImageURL:e,tags:t,likes:a,views:c,comments:l,downloads:p})=>`
        <li>
            <a href="${e}" class="gallery__item">
                <img src="${n}" alt="${t}" loading="lazy" />
            </a>
            <div class="info">
                <p>Likes: <span>${a}</span></p>
                <p>Views: <span>${c}</span></p>
                <p>Comments: <span>${l}</span></p>
                <p>Downloads: <span>${p}</span></p>
            </div>
        </li>
    `).join("");o.insertAdjacentHTML("beforeend",s),i?i.refresh():i=new d(".gallery a",{captionsData:"alt",captionDelay:250})},h=()=>{document.querySelector(".loader").style.display="block"},L=()=>{document.querySelector(".loader").style.display="none"},b=r=>{u.error({title:"Error",message:r,position:"topRight"})},w=document.querySelector(".form");w.addEventListener("submit",async r=>{r.preventDefault();const o=r.target.elements["search-text"].value.trim();if(o){h();try{const s=await y(o);g(s)}catch(s){console.error("Error fetching images:",s),showMessage("Failed to fetch images. Please try again later.")}finally{L()}}});
//# sourceMappingURL=index.js.map
