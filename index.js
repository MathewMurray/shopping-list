/* eslint-disable no-undef */
'use strict';

//add items with return or add item button
//check and un-check items on list by clicking check button
//permanently remove items from list
//cant change css or html files
//.submit(),.preventDefault(),.toggleClass(),.closest() methods
//upload to github and publish when done.
function main(){
  $(function(){
    $('.shopping-list').empty();
    $('#js-shopping-list-form').submit(function(e) {
      e.preventDefault();
      const listItem = $('#shopping-list-entry').val();
  
      $('#shopping-list-entry').val('');
  
  
      $('.shopping-list').append(
        `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
  
    $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
      $(this).closest('li').remove();
    });
  
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
  
  });
}
$(main);
