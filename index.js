function createPost() {
    
//    e.preventDefault();
    // post
    const post_template = document.getElementById("post-template").innerHTML;

    const title = document.getElementById("post-form-title").value;
    const body = document.getElementById("post-form-body").value;
    const author = document.getElementById("post-form-author").value;

    const post_template_fn = _.template(post_template);
    const post_html = post_template_fn({"title": title, "body": body, "author": author});
    const page_template = document.getElementById("page-template").innerHTML;
    const page_template_fn = _.template(page_template);
    const page_html = page_template_fn({"sidebar":"sidebar placeholder","posts":post_html});

    document.getElementById("page").innerHTML += page_html;

    // comments
    const comments_template = document.getElementById("comments-template").innerHTML;
    const comments_template_fn = _.template(comments_template);
    const comments_html = comments_template_fn({comments:''})

    document.getElementById("comment-section").innerHTML += comments_html;
}
function postComment(){
//    e.preventDefault();

    const comment_template = document.getElementById("comment-template").innerHTML;
    const comment_template_fn = _.template(comment_template);

    const body = document.getElementById('comment-body').value;
    const author = document.getElementById('comment-author').value;

    const comment_html = comment_template_fn({body:body, author:author})

    document.getElementById("comments-list").innerHTML += comment_html;
}