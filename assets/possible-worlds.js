
window.addEventListener("load", function () {
  const googleFont = document.createElement("link");
  googleFont.href = "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap";
  googleFont.rel = "stylesheet";
  document.head.appendChild(googleFont);

  const style = document.createElement("style");
  document.head.appendChild(style);
  style.sheet.insertRule(`.possible-worlds {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 1em;
  }`);
  style.sheet.insertRule(`.possible-worlds .grid {
    display: grid;
    padding: 10px;
    place-items: center;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
  }`);
  style.sheet.insertRule(`.possible-worlds .world {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    transition: transform 0.25s ease-out;
    position: relative;
  }`);
  style.sheet.insertRule(`.possible-worlds .world .tooltip {
    visibility: hidden;
    position: absolute;
    border-radius: 4px;
    bottom: 120%;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    background: rgba(0, 0, 0, 0.8);
    max-width: 120px;
    padding: 2px 8px;
    color: white;
    z-index: 1;
    font-family: 'Space Mono';
    font-size: 0.7em;
  }`);
  style.sheet.insertRule(`.possible-worlds .world:hover .tooltip {
    visibility: visible;
  }`);
  style.sheet.insertRule(`.possible-worlds .legend {
    display: inline-block;
    margin-top: 10px;
    width: 250px;
    font-size: 0.8em;
    font-family: 'Space Mono',
    monospace; font-weight: bold;
  }`);
  style.sheet.insertRule(`.possible-worlds .legend .label {
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
    align-items: start;
  }`);
  style.sheet.insertRule(`.possible-worlds .legend .patch {
    margin-right: 8px;
    margin-top: 3px;
    width: 1em;
    height: 1em;
  }`);
  style.sheet.insertRule(`.possible-worlds .legend .text {margin-right: 10px; flex: 1 1;}`);

  document.querySelectorAll(".possible-worlds")
    .forEach(tag => {
      const data = JSON.parse(tag.innerText);
      tag.innerText = "";

      const grid = document.createElement("div");
      grid.classList.add("grid");
      const width = data["grid"]["width"];
      grid.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
      tag.appendChild(grid);

      const legend = document.createElement("div");
      legend.classList.add("legend");
      tag.appendChild(legend);

      data["events"].forEach(event => {
        const label = document.createElement("div");
        label.classList.add("label");
        const outcomePatch = document.createElement("span");
        const labelText = document.createElement("span");
        outcomePatch.style.display = "inline-block";
        outcomePatch.classList.add("world");
        outcomePatch.classList.add("patch");
        outcomePatch.style.backgroundColor = event["color"];
        label.appendChild(outcomePatch);
        labelText.innerText = event["label"];
        labelText.classList.add("text");
        label.appendChild(labelText);
        legend.appendChild(label);
      });

      const gridData = new Array(data["grid"]["width"] * data["grid"]["height"])

      let lastOffset = 0;
      data["worlds"].forEach(range => {
        const offset = range.hasOwnProperty("offset") ? range["offset"] : lastOffset;
        console.log(offset);
        for (let i = offset; i < offset + range["num"]; i++) {
          if (i < gridData.length) {
            if (gridData[i] === undefined) {
              gridData[i] = new Array();
            }
            gridData[i].push(range["event"]);
          }
        }
        lastOffset = offset + range["num"];
      });

      gridData.forEach(cell => {
        const world = document.createElement("div");
        world.classList.add("world");
        grid.appendChild(world);

        if (cell.length > 0) {
          const colors = cell.toReversed().map(e => data["events"].filter(x => x["id"] == e)[0]["color"]);

          const tooltip = document.createElement("div");
          tooltip.classList.add("tooltip");
          const labels = cell.map(e => data["events"].filter(x => x["id"] == e)[0]["label"]);
          tooltip.innerText = labels.join(" & ");
          world.appendChild(tooltip);

          function backgroundApplicator(colors) {
            if (colors.length == 1) {
              function _applicator(elem) {
                elem.style.backgroundColor = colors[0];
              }
            } else {
              const colorPercent = (100 / cell.length);
              function _applicator(elem) {
                const gradientParts = colors.map((c, i) => (
                  `${c} ${(colorPercent * i).toFixed(0)}%,${c} ${(colorPercent * (i + 1)).toFixed(0)}%`
                )).join(",");
                elem.style.backgroundImage = `conic-gradient(${gradientParts})`;
              }
            }
            return _applicator;
          }
          const bgApplicator = backgroundApplicator(colors);
          bgApplicator(world);

          if (data.hasOwnProperty("conditioned_on")
            && !data["conditioned_on"].every(e => cell.includes(e))) {
              world.style.opacity = 0.2;
          }
        }
      });
    });
});