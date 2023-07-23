!function(){let e={selectEl:document.querySelector(".breed-select"),catEl:document.querySelector(".cat-info")};e.selectEl.addEventListener("change",function(){console.log(e.selectEl.value);let t=e.selectEl.value;console.log(t),e.catEl.innerHTML="",function(t){fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}
  &api_key=live_EE5U1dvdCILjpuzYwtBoA2og3YzMObJ6nzJJlb1YgGCX5CuXUNrcJ2YxdS9r1CFu`).then(e=>e.json()).then(t=>{console.log(t[0].url);let n=`<img src="${t[0].url}" alt="" width="300">`;e.catEl.insertAdjacentHTML("beforeend",n)})}(t)}),console.log(),fetch("https://api.thecatapi.com/v1/breeds").then(e=>e.json()).then(function(t){t.forEach(e=>{});let n=t.map((e,t)=>`
  <option value="${e.id}">${e.name}</option>
  `).join();e.selectEl.insertAdjacentHTML("beforeend",'<option name="">select</option>'),e.selectEl.insertAdjacentHTML("beforeend",n),t.map(e=>`
  <img src="${e.url}" alt="" width="300">
  `)}).catch(e=>{console.log("error")})}();
//# sourceMappingURL=index.f0d2162b.js.map
