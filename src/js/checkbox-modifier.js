const checkboxModifier = () => {
  const checkboxes = document.getElementsByClassName('checkbox');

  for (let item of checkboxes) {
    item.addEventListener('click', function () {
      console.log(item.checked);

      for (let element of checkboxes) {
        if (element != item) {
          element.checked = false;
        }
      }
    });
  }

}

export default checkboxModifier;