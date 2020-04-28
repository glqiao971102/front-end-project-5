function myFunction() {

    
    let input, filter, items, txtValue;
    input = $('#search')
    filter = input.val().toUpperCase();
    items = $(".items a")

  
    
    for (let i = 0; i < items.length; i++) {
      txtValue = items.eq(i).attr('data-title')
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        items[i].style.display = "";
      } else {
        items[i].style.display = "none";
        
      }
    }
  }