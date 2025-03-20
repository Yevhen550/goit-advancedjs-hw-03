import{i}from"./assets/vendor-iVKk4foX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const n={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery-container"),loaderEl:document.querySelector(".js-loader")},u="https://pixabay.com/api/",d="?key=49168840-e3c83c6477977e837e7a2b39b";function f(o){const t=new URLSearchParams({q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}${d}&${t}`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}function p(o){return o.map(({webformatURL:t,largeImageURL:l,tags:a,likes:e,views:r,comments:s,downloads:c})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${l}">
            <img class="gallery-img" src="${t}" alt="${a}" loading="lazy" />
            <ul class="gallery-card-info">
                <li>
                    <p class="gallery-card-name">Likes</p>
                    <p class="gallery-card-value">${e}</p>
                </li>
                <li>
                    <p class="gallery-card-name">Views</p>
                    <p class="gallery-card-value">${r}</p>
                </li>
                <li>
                    <p class="gallery-card-name">Comments</p>
                    <p class="gallery-card-value">${s}</p>
                </li>
                <li>
                    <p class="gallery-card-name">Downloads</p>
                    <p class="gallery-card-value">${c}</p>
                </li>
            </ul>
        </a>
    </li>
        `).join("")}function m(o){o.preventDefault();const t=o.currentTarget,l=t.elements.user_query.value.trim();if(l===""){i.warning({title:"Caution",message:"Please enter a query!",position:"topRight"});return}return f(l).then(a=>{n.galleryEl.innerHTML=p(a.hits)}).catch(a=>{console.log(a)}).finally(()=>{t.reset()})}n.formEl.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
