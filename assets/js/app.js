function createSlug () {
    let title = $('#title').val();
    $('#slug').val(String_to_slug(title));
}

function createSlug() {
    var title = document.getElementById("title").value;
    var slug = title.toLowerCase()
                    .replace(/[^\w\s-]/g, '') // Remove all non-word chars
                    .trim() // Remove spaces from start and end
                    .replace(/\s+/g, '-') // Replace spaces with -
                    .replace(/-+/g, '-'); // Replace multiple - with single -
    document.getElementById("slug").value = slug;

    return str;
}