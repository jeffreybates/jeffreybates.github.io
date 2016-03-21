
var planets = ["Hoth","Outer Rim","Cold/Icey","No Sentient Life"];     

var sel = document.getElementById('PlanetData');
var fragment = document.createDocumentFragment();
planets.forEach(function(planet, index) {
    var opt = document.createElement('option');
    opt.innerHTML = planet;
    opt.value = planet;
    fragment.appendChild(opt);
});
sel.appendChild(fragment);