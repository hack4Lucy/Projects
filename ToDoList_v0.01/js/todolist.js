
$(function() {

  // add item to list
  function addListItem () {

    // add item
    var text = $('#new-item').val();
    $('#todolist').append('<li>' + '<input type="checkbox" class="done">' + text + ' <button class="delete">Delete</button>' + '</li>');

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
  $('#add').on('click', addListItem);

  // call deleteItem method
  $(document).on('click', '.delete', deleteItem);

  // call finishItem method
  $(document).on('click', '.done', finishItem);

});
