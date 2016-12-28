
$(function() {

  // add item to list
  function addItem () {

    // add item
    var text = $('#new-item').val();
    $('#todolist').append('<li>' + '<input type="checkbox" id="done">' + text + ' <button id="btnDelete">Delete</button>' + '</li>');

    // free old text
    $('#new-item').val('');
  }

  // delete item from list
  function deleteItem () {
    $(this).parent().remove();
  }

  // finish item from list
  function finishItem () {
    if ( $(this).parent().css('textDecoration') == 'line-through' ) {
      $(this).parent().css('textDecoration', 'none');
    } else {
      $(this).parent().css('textDecoration', 'line-through');
    }

    // $(this).parent().css('textDecoration', 'line-through')
  }

  // call addItem method
  $('#btnAdd').on('click', addItem);

  // call deleteItem method
  $(document).on('click', '#btnDelete', deleteItem);

  // call finishItem method
  $(document).on('click', '#done', finishItem);

});
