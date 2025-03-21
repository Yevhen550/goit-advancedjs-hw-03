import{S as u,i as n}from"./assets/vendor-G1mUgWpC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const i={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery-container"),loaderEl:document.querySelector(".loader")},p="https://pixabay.com/api/",d="?key=49168840-e3c83c6477977e837e7a2b39b";function m(o){const t=new URLSearchParams({q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}${d}&${t}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function f(o){return o.map(({webformatURL:t,largeImageURL:a,tags:l,likes:e,views:r,comments:s,downloads:c})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${a}">
            <img class="gallery-img" src="${t}" alt="${l}" loading="lazy" />
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
        `).join("")}new u(".gallery-container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(o){o.preventDefault();const t=o.currentTarget,a=t.elements.user_query.value.trim();if(a===""){n.warning({title:"Caution",message:"Please enter a query!",position:"topRight"});return}return i.loaderEl.classList.add("active"),m(a).then(l=>{if(i.loaderEl.classList.remove("active"),!l.total)return i.galleryEl.innerHTML="",n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[];i.galleryEl.innerHTML=f(l.hits)}).catch(l=>{console.log(l)}).finally(()=>{t.reset()})}i.formEl.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
