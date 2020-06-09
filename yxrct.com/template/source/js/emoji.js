(function($) {
    $.fn.extend({
        insertAtCaret: function(myValue) {
            var $t = $(this)[0];
            if (document.selection) {
                this.focus();
                sel = document.selection.createRange();
                sel.text = myValue;
                this.focus();
            } else if ($t.selectionStart || $t.selectionStart == '0') {
                var startPos = $t.selectionStart;
                var endPos = $t.selectionEnd;
                var scrollTop = $t.scrollTop;
                $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
                this.focus();
                $t.selectionStart = startPos + myValue.length;
                $t.selectionEnd = startPos + myValue.length;
                $t.scrollTop = scrollTop;
            } else {
                this.value += myValue;
                this.focus();
            }
        }
    })
})(jQuery);
$(document).ready(function() {
    var nf=$("#new_comment_form").children().eq(0); 
    $(".comment-emoji").insertBefore(nf);
    $('#new_comment_form textarea').click(function() {
        $('.comment-emoji').fadeIn("slow");
    });
});
$(document).on('click', '.insert_emoji',function(event) {
    event.preventDefault();
    var emoji = $(this).data('emoji');
    $('.textarea_box').insertAtCaret(' ' + emoji + ' ');
});