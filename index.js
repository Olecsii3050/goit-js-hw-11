import{S as u,i as p}from"./assets/vendor-BvbEOXdP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="49366841-2722787d336af87d57ebdc2bd",m="https://pixabay.com/api/",y=(s,t)=>{axios.get(m,{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>{if(o.status!==200){t(new Error("Failed to fetch images."));return}t(null,o.data.hits)}).catch(o=>{t(o)})};let i;const g=s=>{const t=document.querySelector(".gallery");if(t.innerHTML="",s.length===0){b("Sorry, there are no images matching your search query. Please try again!");return}const o=s.map(({webformatURL:n,largeImageURL:e,tags:r,likes:a,views:l,comments:c,downloads:d})=>`
        <li>
            <a href="${e}" class="gallery__item">
                <img src="${n}" alt="${r}" loading="lazy" />
            </a>
            <div class="info">
                <p>Likes: <span>${a}</span></p>
                <p>Views: <span>${l}</span></p>
                <p>Comments: <span>${c}</span></p>
                <p>Downloads: <span>${d}</span></p>
            </div>
        </li>
    `).join("");t.insertAdjacentHTML("beforeend",o),i?i.refresh():i=new u(".gallery a",{captionsData:"alt",captionDelay:250})},h=()=>{document.querySelector(".loader").style.display="block"},L=()=>{document.querySelector(".loader").style.display="none"},b=s=>{p.error({title:"Error",message:s,position:"topRight"})},S=document.querySelector(".form");S.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();t&&(h(),y(t,(o,n)=>{if(L(),o){console.error("Error fetching images:",o),showMessage("Failed to fetch images. Please try again later.");return}g(n)}))});
//# sourceMappingURL=index.js.map
