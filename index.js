import{S as p,i as u}from"./assets/vendor-BvbEOXdP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="49366841-2722787d336af87d57ebdc2bd",m="https://pixabay.com/api/",y=(o,r)=>{axios.get(m,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>{r(null,s.data.hits)}).catch(s=>{r(s)})};let i;const g=o=>{const r=document.querySelector(".gallery");if(r.innerHTML="",o.length===0){b("Sorry, there are no images matching your search query. Please try again!");return}const s=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:a,views:l,comments:c,downloads:d})=>`
        <li>
            <a href="${e}" class="gallery__item">
                <img src="${n}" alt="${t}" loading="lazy" />
            </a>
            <div class="info">
                <p>Likes: <span>${a}</span></p>
                <p>Views: <span>${l}</span></p>
                <p>Comments: <span>${c}</span></p>
                <p>Downloads: <span>${d}</span></p>
            </div>
        </li>
    `).join("");r.insertAdjacentHTML("beforeend",s),i?i.refresh():i=new p(".gallery a",{captionsData:"alt",captionDelay:250})},h=()=>{document.querySelector(".loader").style.display="block"},L=()=>{document.querySelector(".loader").style.display="none"},b=o=>{u.error({title:"Error",message:o,position:"topRight"})},S=document.querySelector(".form");S.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();r&&(h(),y(r,(s,n)=>{if(L(),s){console.error("Error fetching images:",s),showMessage("Failed to fetch images. Please try again later.");return}g(n)}))});
//# sourceMappingURL=index.js.map
