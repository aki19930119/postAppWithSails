module.exports = async function(req, res) {
    console.log("home page post")
    
    const allPosts = await Post.find()
    
    res.view('pages/home',
        {allPosts}
    )

}