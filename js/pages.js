$('.upload-file-input').change(function() {
    if ($(this).val() != '') $(this).prev().text('Вибрано файлів: ' + $(this)[0].files.length);
    else $(this).prev().text('Виберіть файли');
});