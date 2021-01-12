'use strict';

{
  $(function() {
    $('#button').click(
      function() {
        $.ajax({
          url: 'sample.json',
          dataType: 'json',
          success: function(data) {
            const body = document.querySelector('body');
            const div = document.createElement('div');

            div.textContent = data[`key${getRandumNum(Object.keys(data).length)}`];
            body.appendChild(div);
          },
          error: function(data) {
            alert('error');
          }
        });
      }
    );
  });

  function getRandumNum(max) {
    return Math.floor(Math.random() * Math.floor(max + 1))
  }
}
