function changeElementValue() {
  const tdElements = document.querySelectorAll('div td.stat');
  const spanElements = document.querySelectorAll('div h3 span.stat');

  tdElements.forEach(element => {
    if (element && !element.hasAttribute('data-modified') && !isNaN(parseInt(element.textContent))) {
      let currentValue = parseInt(element.textContent);
      let newValue = currentValue / 5;
      element.textContent = newValue;
      element.setAttribute('data-modified', 'true');
    }
  });

  spanElements.forEach(element => {
    if (element && !element.hasAttribute('data-modified') && !isNaN(parseInt(element.textContent))) {
      let currentValue = parseInt(element.textContent);
      let newValue = currentValue / 5;
      element.textContent = newValue;
      element.setAttribute('data-modified', 'true');
    }
  });
}

changeElementValue();
