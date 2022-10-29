const iniMasuk = document.querySelector("#iniMasuk");
const isEmpty = (str) => !str.trim().length;
function masukan() {
  if (isEmpty(iniMasuk.value)) {
    document.getElementById("iniLabel").innerHTML = `<label class="label inilabel">Masukan dengan benar</label>`;
  } else {
    document.getElementById(
      "iniKeluar"
    ).innerHTML = `<h1 class="inih1 inibtn">Halo ${iniMasuk.value}</h1>`;
    document.getElementById("iniIsi").innerHTML = `
    <div class='nav'>
      <div class='container' id='title'>
        <span style='--i:1' id='t1'>s</span>
        <span style='--i:2' id='t2'>e</span>
        <span style='--i:3' id='t3'>m</span>
        <span style='--i:4' id='t4'>a</span>
        <span style='--i:5' id='t5'>n</span>
        <span style='--i:6' id='t6'>g</span>
        <span style='--i:7' id='t7'>a</span>
        <span style='--i:8' id='t8'>t</span>
      </div>
    </div>
    `;
    document.getElementById("button").innerHTML = "";
  }
}
